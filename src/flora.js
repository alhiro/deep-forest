// Trees, undergrowth, rocks and logs. Everything is built from code and instanced.
import * as THREE from 'three';
import { mergeGeometries, mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';
import { rng, fbm, lerp, smoothstep } from './noise.js';
import { heightAt, forestDensity, coniferness, clearingFactor, CLEARING, POND, HALF } from './terrain.js';

export const windTime = { value: 0 };
const UP = new THREE.Vector3(0, 1, 0);

// ---------- shader patches ----------
function patchWind(mat, { sway, flutter, mode, fade = 0 }) {
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.uTime = windTime;
    const h = mode === 'tree' ? 'pow(clamp(transformed.y / 20.0, 0.0, 1.0), 1.5)' : 'uv.y * uv.y';
    sh.vertexShader = 'uniform float uTime;\n' + sh.vertexShader.replace('#include <begin_vertex>', `#include <begin_vertex>
      #ifdef USE_INSTANCING
        vec4 wp_ = modelMatrix * instanceMatrix * vec4(transformed, 1.0);
      #else
        vec4 wp_ = modelMatrix * vec4(transformed, 1.0);
      #endif
      float sw_ = sin(uTime * 1.1 + wp_.x * 0.13 + wp_.z * 0.11) + 0.5 * sin(uTime * 2.3 + wp_.x * 0.31 - wp_.z * 0.2);
      float fl_ = sin(uTime * 4.6 + wp_.x * 2.1 + wp_.y * 1.7 + wp_.z * 1.3);
      float hf_ = ${h};
      transformed.x += (sw_ * ${sway.toFixed(3)} + fl_ * ${flutter.toFixed(3)}) * hf_;
      transformed.z += (sw_ * ${(sway * 0.6).toFixed(3)} - fl_ * ${flutter.toFixed(3)}) * hf_;
      ${fade ? `transformed.y *= 1.0 - smoothstep(${(fade * 0.7).toFixed(1)}, ${fade.toFixed(1)}, distance(wp_.xyz, cameraPosition));` : ''}`);
    // cards use hand-made soft normals: do not flip them on back faces
    sh.fragmentShader = sh.fragmentShader.replace('#include <normal_fragment_begin>',
      THREE.ShaderChunk.normal_fragment_begin.replace('normal *= faceDirection;', ''));
  };
  mat.customProgramCacheKey = () => `wind-${mode}-${sway}-${flutter}-${fade}`;
  return mat;
}

function patchMoss(mat, amount) {
  mat.onBeforeCompile = (sh) => {
    sh.vertexShader = 'varying vec3 vWN_;\nvarying vec3 vWP_;\n' + sh.vertexShader.replace('#include <begin_vertex>', `#include <begin_vertex>
      #ifdef USE_INSTANCING
        mat4 mm_ = modelMatrix * instanceMatrix;
      #else
        mat4 mm_ = modelMatrix;
      #endif
      vWN_ = normalize(mat3(mm_) * objectNormal);
      vWP_ = (mm_ * vec4(transformed, 1.0)).xyz;`);
    sh.fragmentShader = 'varying vec3 vWN_;\nvarying vec3 vWP_;\n' + sh.fragmentShader.replace('#include <color_fragment>', `#include <color_fragment>
      float mn_ = sin(vWP_.x * 3.1) * sin(vWP_.z * 2.7 + vWP_.y * 2.0) * 0.5 + 0.5;
      float mk_ = smoothstep(0.25, 0.75, vWN_.y + mn_ * 0.35 - 0.1) * ${amount.toFixed(2)};
      diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.075, 0.115, 0.04) * (0.7 + mn_ * 0.6), mk_);`);
  };
  mat.customProgramCacheKey = () => 'moss' + amount;
  return mat;
}

// ---------- geometry helpers ----------
function trunkGeo(H, r0, r1, bendX = 0, bendZ = 0, radial = 9, hs = 8) {
  const g = new THREE.CylinderGeometry(1, 1, 1, radial, hs, true);
  const p = g.attributes.position, uv = g.attributes.uv;
  for (let i = 0; i < p.count; i++) {
    const t = p.getY(i) + 0.5, a = Math.atan2(p.getZ(i), p.getX(i));
    let r = lerp(r0, r1, Math.pow(t, 0.85)) * (1 + 0.9 * Math.exp(-t * H * 1.3));
    r *= 1 + 0.16 * Math.sin(a * 3 + 1) * Math.exp(-t * H * 0.9);
    p.setXYZ(i, Math.cos(a) * r + bendX * t * t, t * H - 0.4, Math.sin(a) * r + bendZ * t * t);
    uv.setXY(i, uv.getX(i) * 2, (t * H) / 2.6);
  }
  return g;
}
function branchGeo(from, to, r0, r1) {
  const d = new THREE.Vector3().subVectors(to, from), len = d.length();
  const g = new THREE.CylinderGeometry(r1, r0, len, 6, 2, true);
  const uv = g.attributes.uv;
  for (let i = 0; i < uv.count; i++) uv.setY(i, (uv.getY(i) * len) / 2.6);
  g.translate(0, len / 2, 0);
  g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(UP, d.normalize()));
  g.translate(from.x, from.y, from.z);
  return g;
}
class Cards {
  constructor() { this.p = []; this.n = []; this.uv = []; this.idx = []; }
  // quad centred at c spanned by half-vectors r (u axis) and u (v axis)
  add(c, r, u, n) {
    const b = this.p.length / 3;
    for (const [sx, sy] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) {
      this.p.push(c.x + r.x * sx + u.x * sy, c.y + r.y * sx + u.y * sy, c.z + r.z * sx + u.z * sy);
      this.n.push(n.x, n.y, n.z); this.uv.push(sx * 0.5 + 0.5, sy * 0.5 + 0.5);
    }
    this.idx.push(b, b + 1, b + 2, b, b + 2, b + 3);
  }
  build() {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.p, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(this.n, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(this.uv, 2));
    g.setIndex(this.idx);
    return g;
  }
}
const randDir = (r) => { const y = r() * 2 - 1, a = r() * 6.283, s = Math.sqrt(1 - y * y); return new THREE.Vector3(Math.cos(a) * s, y, Math.sin(a) * s); };

function crownCards(cards, r, center, radii, count, size) {
  for (let i = 0; i < count; i++) {
    const d = randDir(r); d.y = d.y * 0.75 + 0.2; d.normalize();
    const k = 0.5 + 0.5 * Math.sqrt(r());
    const c = new THREE.Vector3(center.x + d.x * radii.x * k, center.y + d.y * radii.y * k, center.z + d.z * radii.z * k);
    const face = randDir(r), right = new THREE.Vector3().crossVectors(face, UP);
    if (right.lengthSq() < 0.01) right.set(1, 0, 0);
    right.normalize();
    const up = new THREE.Vector3().crossVectors(right, face).normalize();
    const s = size * (0.8 + r() * 0.45) * 0.5;
    const n = new THREE.Vector3(d.x, d.y + 0.35, d.z).normalize();
    cards.add(c, right.multiplyScalar(s), up.multiplyScalar(s), n);
  }
}

function broadleaf(seed) {
  const r = rng(seed), Hf = 8 + r() * 3.5, parts = [trunkGeo(Hf + 1.5, 0.5, 0.3, (r() - 0.5) * 0.8, (r() - 0.5) * 0.8)];
  const fork = new THREE.Vector3(0, Hf - 0.4, 0), cards = new Cards(), nb = 4 + ((r() * 2) | 0);
  for (let i = 0; i < nb; i++) {
    const a = (i / nb) * 6.283 + r() * 0.8, out = 3.2 + r() * 3.2;
    const end = new THREE.Vector3(Math.cos(a) * out, Hf + 3.5 + r() * 3.5, Math.sin(a) * out);
    parts.push(branchGeo(fork, end, 0.2, 0.05));
    crownCards(cards, r, end, new THREE.Vector3(3.0, 2.0, 3.0), 12, 2.7);
  }
  parts.push(branchGeo(fork, new THREE.Vector3(r() - 0.5, Hf + 6.5, r() - 0.5), 0.24, 0.05));
  crownCards(cards, r, new THREE.Vector3(0, Hf + 5.5, 0), new THREE.Vector3(6.6, 4.6, 6.6), 70, 3.0);
  return { wood: mergeGeometries(parts), leaves: cards.build(), radius: 0.55 };
}

function birch(seed) {
  const r = rng(seed), H = 12.5 + r() * 4, cards = new Cards();
  const bx = (r() - 0.5) * 2.4, bz = (r() - 0.5) * 2.4;
  const parts = [trunkGeo(H, 0.17, 0.04, bx, bz, 8, 10)];
  for (let i = 0; i < 4; i++) {
    const t = 0.5 + r() * 0.35, a = r() * 6.283;
    const from = new THREE.Vector3(bx * t * t, t * H - 0.4, bz * t * t);
    const end = from.clone().add(new THREE.Vector3(Math.cos(a) * 1.8, 1.4 + r(), Math.sin(a) * 1.8));
    parts.push(branchGeo(from, end, 0.05, 0.015));
    crownCards(cards, r, end, new THREE.Vector3(1.4, 1.6, 1.4), 8, 1.7);
  }
  crownCards(cards, r, new THREE.Vector3(bx * 0.6, H * 0.74, bz * 0.6), new THREE.Vector3(2.6, H * 0.3, 2.6), 44, 2.0);
  return { wood: mergeGeometries(parts), leaves: cards.build(), radius: 0.25 };
}

function spruce(seed) {
  const r = rng(seed), H = 17 + r() * 6, cards = new Cards(), whorls = 13, y0 = 2.6 + r() * 2.5;
  for (let w = 0; w < whorls; w++) {
    const f = w / (whorls - 1), y = lerp(y0, H - 1.1, Math.pow(f, 0.92)), L = lerp(3.7, 0.7, Math.pow(f, 0.85)) * (0.9 + r() * 0.2);
    const nb = 6, off = r() * 6.283;
    for (let b = 0; b < nb; b++) {
      const a = off + (b / nb) * 6.283 + (r() - 0.5) * 0.3;
      const d = new THREE.Vector3(Math.cos(a), -0.28 - 0.28 * (1 - f) + (r() - 0.5) * 0.12, Math.sin(a)).normalize();
      const side = new THREE.Vector3().crossVectors(d, UP).normalize().applyAxisAngle(d, (r() < 0.5 ? -1 : 1) * (0.35 + r() * 0.55));
      const c = d.clone().multiplyScalar(L * 0.5).add(new THREE.Vector3(0, y, 0));
      const n = new THREE.Vector3(Math.cos(a) * 0.55, 0.85, Math.sin(a) * 0.55).normalize();
      cards.add(c, side.multiplyScalar(L * 0.42), d.clone().multiplyScalar(L * 0.5), n);
    }
  }
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * Math.PI;
    cards.add(new THREE.Vector3(0, H - 0.9, 0), new THREE.Vector3(Math.cos(a) * 0.75, 0, Math.sin(a) * 0.75), new THREE.Vector3(0, 1.1, 0), new THREE.Vector3(Math.cos(a + 1.57) * 0.5, 0.85, Math.sin(a + 1.57) * 0.5).normalize());
  }
  return { wood: trunkGeo(H, 0.36, 0.035, (r() - 0.5) * 0.5, (r() - 0.5) * 0.5, 9, 6), leaves: cards.build(), radius: 0.45 };
}

function bush(seed) {
  const r = rng(seed), cards = new Cards();
  crownCards(cards, r, new THREE.Vector3(0, 0.75, 0), new THREE.Vector3(1.25, 0.85, 1.25), 14, 1.5);
  return cards.build();
}

function grassGeo() {
  const c = new Cards();
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * Math.PI;
    c.add(new THREE.Vector3(0, 0.21, 0), new THREE.Vector3(Math.cos(a) * 0.32, 0, Math.sin(a) * 0.32), new THREE.Vector3(0, 0.21, 0), UP);
  }
  return c.build();
}
function fernGeo(seed) {
  const r = rng(seed), p = [], n = [], uv = [], idx = [], fronds = 7, segs = 4;
  for (let f = 0; f < fronds; f++) {
    const a = (f / fronds) * 6.283 + r() * 0.5, len = 0.75 + r() * 0.45, lift = 0.75 + r() * 0.35, b = p.length / 3;
    const dx = Math.cos(a), dz = Math.sin(a), sx = -dz, sz = dx;
    for (let s = 0; s <= segs; s++) {
      const t = s / segs, out = t * len, y = Math.sin(t * 2.1) * lift * 0.55 * len, w = 0.19 * len;
      p.push(dx * out - sx * w, y, dz * out - sz * w, dx * out + sx * w, y, dz * out + sz * w);
      n.push(dx * 0.3, 0.95, dz * 0.3, dx * 0.3, 0.95, dz * 0.3); uv.push(0, t, 1, t);
      if (s < segs) { const i = b + s * 2; idx.push(i, i + 1, i + 3, i, i + 3, i + 2); }
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(p, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(n, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  return g;
}
function tint(g, hex) {
  const c = new THREE.Color(hex), a = new Float32Array(g.attributes.position.count * 3);
  for (let i = 0; i < a.length; i += 3) { a[i] = c.r; a[i + 1] = c.g; a[i + 2] = c.b; }
  g.setAttribute('color', new THREE.BufferAttribute(a, 3)); g.deleteAttribute('uv');
  return g.index ? g.toNonIndexed() : g;
}
function flowerGeo(hex) {
  const stem = new THREE.CylinderGeometry(0.006, 0.008, 0.3, 4, 1, true); stem.translate(0, 0.15, 0);
  const head = new THREE.CircleGeometry(0.055, 7); head.rotateX(-Math.PI / 2 + 0.35); head.translate(0, 0.31, 0);
  const eye = new THREE.CircleGeometry(0.018, 6); eye.rotateX(-Math.PI / 2 + 0.35); eye.translate(0, 0.316, 0.002);
  return mergeGeometries([tint(stem, '#4f7a2a'), tint(head, hex), tint(eye, '#e8b020')]);
}
function mushroomGeo(cap) {
  const stem = new THREE.CylinderGeometry(0.018, 0.026, 0.1, 7, 1, true); stem.translate(0, 0.05, 0);
  const top = new THREE.SphereGeometry(0.07, 10, 5, 0, 6.283, 0, 1.5); top.scale(1, 0.62, 1); top.translate(0, 0.085, 0);
  return mergeGeometries([tint(stem, '#e9e0cc'), tint(top, cap)]);
}
function rockGeo(seed) {
  let g = new THREE.IcosahedronGeometry(1, 3); g.deleteAttribute('uv'); g.deleteAttribute('normal'); g = mergeVertices(g);
  const p = g.attributes.position, uv = new Float32Array(p.count * 2);
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    const d = 0.62 + 0.75 * fbm(x * 1.1 + y * 0.8 + seed * 3.7, z * 1.1 - y * 0.7 + seed, 4, seed);
    p.setXYZ(i, x * d, y * d * 0.62, z * d);
    uv[i * 2] = Math.atan2(z, x) / 6.283 * 2; uv[i * 2 + 1] = y * 0.6;
  }
  g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  g.computeVertexNormals();
  return g;
}

// ---------- chunked instancing ----------
class Scatter {
  constructor(chunk) { this.chunk = chunk; this.groups = new Map(); }
  add(key, m, color) {
    const e = m.elements, cx = Math.floor((e[12] + 400) / this.chunk), cz = Math.floor((e[14] + 400) / this.chunk);
    const k = key + '|' + cx + '|' + cz;
    let g = this.groups.get(k);
    if (!g) { g = { key, m: [], c: [] }; this.groups.set(k, g); }
    for (let i = 0; i < 16; i++) g.m.push(e[i]);
    if (color) g.c.push(color.r, color.g, color.b);
  }
  build(defs, parent) {
    const meshes = [];
    for (const g of this.groups.values()) {
      for (const part of defs[g.key]) {
        const n = g.m.length / 16, mesh = new THREE.InstancedMesh(part.geo, part.mat, n);
        mesh.instanceMatrix.array.set(g.m); mesh.instanceMatrix.needsUpdate = true;
        if (g.c.length && part.tint !== false) mesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(g.c), 3);
        mesh.castShadow = !!part.cast; mesh.receiveShadow = part.receive !== false;
        if (part.depth) mesh.customDepthMaterial = part.depth;
        mesh.computeBoundingSphere();
        mesh.matrixAutoUpdate = false;
        parent.add(mesh); meshes.push(mesh);
      }
    }
    return meshes;
  }
}

export function buildFlora(scene, tex, Q) {
  const r = rng(2026), root = new THREE.Group(); scene.add(root);
  const colliders = [];

  // materials
  const barkMat = (k, ns) => patchMoss(new THREE.MeshLambertMaterial({ map: tex['bark_' + k], normalMap: tex['barkN_' + k], normalScale: new THREE.Vector2(ns, ns) }), k === 'birch' ? 0.08 : 0.3);
  const leafMat = (map, sway, flutter) => patchWind(new THREE.MeshLambertMaterial({ map, alphaTest: 0.38, side: THREE.DoubleSide }), { sway, flutter, mode: 'tree' });
  const depth = (map) => new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking, map, alphaTest: 0.38, side: THREE.DoubleSide });
  const mats = {
    spruceW: barkMat('spruce', 1.5), oakW: barkMat('oak', 1.5), birchW: barkMat('birch', 0.6),
    spruceL: leafMat(tex.branch, 0.1, 0.012), oakL: leafMat(tex.leaves, 0.14, 0.03), birchL: leafMat(tex.leavesBirch, 0.2, 0.045),
    grass: patchWind(new THREE.MeshLambertMaterial({ map: tex.grass, alphaTest: 0.3, side: THREE.DoubleSide }), { sway: 0.07, flutter: 0.035, mode: 'cover', fade: Q.coverDist }),
    fern: patchWind(new THREE.MeshLambertMaterial({ map: tex.fern, alphaTest: 0.35, side: THREE.DoubleSide }), { sway: 0.04, flutter: 0.02, mode: 'cover', fade: Q.coverDist }),
    small: new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide }),
    rock: patchMoss(new THREE.MeshLambertMaterial({ map: tex.rock, normalMap: tex.rockN }), 0.85),
  };
  const dSpruce = depth(tex.branch), dOak = depth(tex.leaves), dBirch = depth(tex.leavesBirch);

  const defs = {}, radius = {};
  for (let v = 0; v < 3; v++) {
    const s = spruce(100 + v), o = broadleaf(200 + v), b = birch(300 + v);
    defs['spruce' + v] = [{ geo: s.wood, mat: mats.spruceW, cast: true, tint: false }, { geo: s.leaves, mat: mats.spruceL, cast: true, depth: dSpruce }];
    defs['oak' + v] = [{ geo: o.wood, mat: mats.oakW, cast: true, tint: false }, { geo: o.leaves, mat: mats.oakL, cast: true, depth: dOak }];
    defs['birch' + v] = [{ geo: b.wood, mat: mats.birchW, cast: true, tint: false }, { geo: b.leaves, mat: mats.birchL, cast: true, depth: dBirch }];
    radius['spruce' + v] = s.radius; radius['oak' + v] = o.radius; radius['birch' + v] = b.radius;
    defs['bush' + v] = [{ geo: bush(400 + v), mat: mats.oakL, cast: true, depth: dOak }];
    defs['rock' + v] = [{ geo: rockGeo(v + 1), mat: mats.rock, cast: true }];
    defs['fern' + v] = [{ geo: fernGeo(500 + v), mat: mats.fern }];
  }
  defs.log = [{ geo: trunkGeo(7, 0.34, 0.26, 0, 0, 9, 3), mat: mats.oakW, cast: true, tint: false }];
  defs.grass = [{ geo: grassGeo(), mat: mats.grass }];
  ['#f4f1e6', '#f2d23c', '#b48ae0', '#ee8fb0'].forEach((c, i) => { defs['flower' + i] = [{ geo: flowerGeo(c), mat: mats.small, tint: false }]; });
  ['#b23a22', '#9a6a3c'].forEach((c, i) => { defs['shroom' + i] = [{ geo: mushroomGeo(c), mat: mats.small, tint: false }]; });

  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), s = new THREE.Vector3(), p = new THREE.Vector3(), col = new THREE.Color();
  const place = (sc, key, x, z, scale, { sink = 0, lean = 0, sy = 1, c = null, rx = 0, rz = 0 } = {}) => {
    e.set(rx + (r() - 0.5) * lean, r() * 6.283, rz + (r() - 0.5) * lean, 'YXZ');
    q.setFromEuler(e); p.set(x, heightAt(x, z) - sink, z); s.set(scale, scale * sy, scale);
    sc.add(key, m.compose(p, q, s), c);
  };

  // --- trees ---
  const trees = new Scatter(80), E = 250, cell = Q.treeCell;
  for (let gx = -E; gx < E; gx += cell) for (let gz = -E; gz < E; gz += cell) {
    const x = gx + r() * cell * 0.85, z = gz + r() * cell * 0.85, h = heightAt(x, z);
    if (h < 0.55) continue;
    const dens = forestDensity(x, z), cl = clearingFactor(x, z);
    if (cl > 0.35 && r() > 0.004) continue;
    if (r() > 0.2 + 0.8 * dens) continue;
    const con = coniferness(x, z), v = (r() * 3) | 0, edge = h < 2 || dens < 0.45;
    const kind = r() < con * 0.9 ? 'spruce' : r() < (edge ? 0.5 : 0.14) ? 'birch' : 'oak';
    const young = r() < 0.16;
    const sc = young ? 0.25 + r() * 0.3 : (kind === 'spruce' ? 0.95 : 0.9) + r() * 0.65;
    const b = 0.72 + r() * 0.4;
    col.setRGB(b * (0.95 + r() * 0.15), b, b * (0.85 + r() * 0.2));
    place(trees, kind + v, x, z, sc, { lean: 0.07, sy: 0.9 + r() * 0.25, c: col });
    if (!young) colliders.push({ x, z, r: radius[kind + v] * sc + 0.3 });
  }
  // --- bushes, rocks, logs ---
  for (let i = 0; i < Q.bushes; i++) {
    const x = (r() - 0.5) * 420, z = (r() - 0.5) * 420;
    if (heightAt(x, z) < 0.5 || clearingFactor(x, z) > 0.7 || r() > 0.35 + forestDensity(x, z) * 0.5) continue;
    const b = 0.5 + r() * 0.35; col.setRGB(b, b, b * 0.9);
    place(trees, 'bush' + ((r() * 3) | 0), x, z, 0.6 + r() * 0.6, { sink: 0.1, c: col });
  }
  for (let i = 0; i < Q.rocks; i++) {
    const x = (r() - 0.5) * 400, z = (r() - 0.5) * 400, big = r() < 0.12;
    if (heightAt(x, z) < -0.6) continue;
    const sc = big ? 1.3 + r() * 1.6 : 0.25 + r() * 0.7, b = 0.75 + r() * 0.4; col.setRGB(b, b, b);
    place(trees, 'rock' + ((r() * 3) | 0), x, z, sc, { sink: sc * 0.18, lean: 0.6, c: col });
    if (sc > 0.9) colliders.push({ x, z, r: sc * 0.95 });
  }
  for (let i = 0; i < Q.logs; i++) {
    const x = (r() - 0.5) * 360, z = (r() - 0.5) * 360;
    if (heightAt(x, z) < 0.4 || forestDensity(x, z) < 0.3) continue;
    place(trees, 'log', x, z, 0.8 + r() * 0.5, { sink: -0.22, rz: Math.PI / 2, lean: 0.06 });
    for (let k = 0; k < 9; k++) {      // mushrooms hug fallen logs
      const mx = x + (r() - 0.5) * 5, mz = z + (r() - 0.5) * 5;
      place(trees, 'shroom' + ((r() * 2) | 0), mx, mz, 0.8 + r() * 1.6, { lean: 0.3 });
    }
  }
  const treeMeshes = trees.build(defs, root);

  // --- ground cover (distance-culled chunks) ---
  const cover = new Scatter(40);
  const area = 400 * 400;
  for (let i = 0; i < area * Q.grass; i++) {
    const x = (r() - 0.5) * 400, z = (r() - 0.5) * 400, h = heightAt(x, z);
    if (h < 0.12) continue;
    const open = Math.max(clearingFactor(x, z), 1 - forestDensity(x, z));
    if (r() > 0.1 + open * 0.9) continue;
    const b = 0.75 + r() * 0.5; col.setRGB(b * (0.9 + r() * 0.25), b, b * 0.8);
    place(cover, 'grass', x, z, 0.7 + r() * 0.7 + open * 0.2, { sink: 0.03, sy: 0.7 + r() * 0.6, c: col });
  }
  // extra-lush meadow in the clearing, with flowers
  for (let i = 0; i < 3000 * Q.grass * 40; i++) {
    const a = r() * 6.283, d = Math.sqrt(r()) * (CLEARING.r + 6), x = CLEARING.x + Math.cos(a) * d, z = CLEARING.z + Math.sin(a) * d;
    const b = 0.8 + r() * 0.45; col.setRGB(b * (0.95 + r() * 0.25), b, b * 0.75);
    place(cover, 'grass', x, z, 0.8 + r() * 0.7, { sink: 0.03, sy: 0.8 + r() * 0.8, c: col });
    if (r() < 0.05) place(cover, 'flower' + ((r() * 4) | 0), x + r() - 0.5, z + r() - 0.5, 0.55 + r() * 0.5, { lean: 0.3 });
  }
  for (let i = 0; i < area * Q.ferns; i++) {
    const x = (r() - 0.5) * 400, z = (r() - 0.5) * 400, h = heightAt(x, z);
    if (h < 0.25 || r() > forestDensity(x, z) * 0.9 + 0.08) continue;
    const b = 0.5 + r() * 0.35; col.setRGB(b, b, b * 0.85);
    place(cover, 'fern' + ((r() * 3) | 0), x, z, 0.45 + r() * 0.5, { sink: 0.02, lean: 0.2, c: col });
  }
  for (let i = 0; i < 1400; i++) {         // reeds of tall grass around the pond
    const a = r() * 6.283, d = POND.r * (0.55 + r() * 0.5), x = POND.x + Math.cos(a) * d, z = POND.z + Math.sin(a) * d, h = heightAt(x, z);
    if (h < -0.25 || h > 0.9) continue;
    col.setRGB(0.8, 0.85, 0.5);
    place(cover, 'grass', x, z, 1.3 + r() * 0.8, { sink: 0.05, sy: 1.6 + r() * 1.2, c: col });
  }
  const coverMeshes = cover.build(defs, root);
  const coverCull = coverMeshes.map((mesh) => ({ mesh, c: mesh.boundingSphere.center.clone(), rad: mesh.boundingSphere.radius }));

  // spatial hash of trunks/rocks for the walker
  const grid = new Map(), GC = 8;
  for (const c of colliders) { const k = Math.floor(c.x / GC) + ',' + Math.floor(c.z / GC); (grid.get(k) || grid.set(k, []).get(k)).push(c); }
  const collide = (pos) => {
    const cx = Math.floor(pos.x / GC), cz = Math.floor(pos.z / GC);
    for (let i = -1; i <= 1; i++) for (let j = -1; j <= 1; j++) {
      const list = grid.get(cx + i + ',' + (cz + j)); if (!list) continue;
      for (const c of list) {
        const dx = pos.x - c.x, dz = pos.z - c.z, d = Math.hypot(dx, dz), min = c.r + 0.35;
        if (d < min && d > 1e-4) { pos.x = c.x + (dx / d) * min; pos.z = c.z + (dz / d) * min; }
      }
    }
  };

  return {
    collide, colliders, treeCount: colliders.length, meshCount: treeMeshes.length + coverMeshes.length,
    update(cam) {
      for (const c of coverCull) c.mesh.visible = c.c.distanceTo(cam) - c.rad < Q.coverDist;
    },
  };
}
