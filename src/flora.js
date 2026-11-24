// Trees, undergrowth, rocks and logs. Everything is built from code and instanced.
import * as THREE from 'three';
import { mergeGeometries, mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { Tree } from './eztree/index.js';
import { TreePreset } from './eztree/presets.js';
import { getBarkTexture, getLeafTexture } from './eztree/textures.js';
import { rng, fbm, lerp, smoothstep } from './noise.js';
import { heightAt, forestDensity, coniferness, clearingFactor, CLEARING, POND, HALF } from './terrain.js';
import { SUN_COLOR } from './atmosphere.js';

export const windTime = { value: 0 };
export const sunView = { value: new THREE.Vector3(0, 1, 0) };   // sun direction in view space, set every frame
const UP = new THREE.Vector3(0, 1, 0);

// ---------- shader patches ----------
function patchWind(mat, { sway, flutter, mode, fade = 0 }) {
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.uTime = windTime;
    const h = mode === 'tree' ? 'pow(clamp(transformed.y / 20.0, 0.0, 1.0), 1.5) + uv.y * 0.12' : 'uv.y * uv.y';
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
    sh.uniforms.uSunView = sunView;
    sh.fragmentShader = 'uniform vec3 uSunView;\n' + sh.fragmentShader.replace('#include <normal_fragment_begin>',
      THREE.ShaderChunk.normal_fragment_begin.replace('normal *= faceDirection;', '') + `
      ${mode === 'tree' ? 'if (dot(normal, uSunView) < 0.0) normal = -normal; normal = normalize(mix(normal, uSunView, 0.3));' : ''}`);
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

// A real branching tree from the ez-tree generator, scaled to a height in metres.
// `lod` 0 is full detail; 1 is a light version for trees seen through the mist.
function growTree(preset, seed, lod, height) {
  const tree = new Tree(), o = tree.options;
  o.copy(structuredClone(TreePreset[preset]));
  o.seed = seed;
  const L = o.branch.levels;
  if (lod === 0) {            // near: full trunk, slightly leaner twigs
    for (const k of [1, 2, 3]) { o.branch.sections[k] = Math.max(3, Math.round(o.branch.sections[k] * 0.6)); o.branch.segments[k] = Math.min(o.branch.segments[k], 4); }
    o.leaves.count = Math.max(2, Math.round(o.leaves.count * 0.8)); o.leaves.size *= 1.1;
  }
  if (lod === 1) {            // mid: small plants up close
    o.leaves.count = Math.max(2, Math.round(o.leaves.count * 0.6)); o.leaves.size *= 1.25;
    for (const k of [0, 1, 2, 3]) { o.branch.sections[k] = Math.max(2, Math.round(o.branch.sections[k] / 2)); o.branch.segments[k] = Math.min(o.branch.segments[k], k === 0 ? 6 : 3); }
  }
  if (lod === 2) {            // far: a light silhouette for the mist
    for (const k of [0, 1, 2, 3]) {
      o.branch.sections[k] = k === 0 ? Math.max(3, Math.round(o.branch.sections[k] / 4)) : 2;
      o.branch.segments[k] = k === 0 ? 4 : 3;
      if (k < L) o.branch.children[k] = Math.max(1, Math.round(o.branch.children[k] * (L === 1 ? 0.4 : k === 0 ? 0.8 : 0.6)));
    }
    o.leaves.count = Math.max(1, Math.round(o.leaves.count * 0.3));
    o.leaves.size *= 2.3;
  }
  tree.generate();
  const wood = tree.branchesMesh.geometry, leaves = tree.leavesMesh.geometry;
  wood.computeBoundingBox(); leaves.computeBoundingBox();
  const top = Math.max(wood.boundingBox.max.y, leaves.boundingBox.max.y), k = height / top;
  for (const g of [wood, leaves]) { g.scale(k, k, k); g.translate(0, -0.25, 0); g.computeBoundingSphere(); g.computeBoundingBox(); }
  return { wood, leaves, radius: o.branch.radius[0] * k, tris: (wood.index.count + leaves.index.count) / 3 };
}

// upright sprig of real leaves: seedlings and undergrowth
function sprigGeo() {
  const c = new Cards();
  for (let i = 0; i < 2; i++) {
    const a = i * 1.5708 + 0.4;
    c.add(new THREE.Vector3(0, 0.5, 0), new THREE.Vector3(Math.cos(a) * 0.5, 0, Math.sin(a) * 0.5), new THREE.Vector3(0, 0.5, 0), new THREE.Vector3(0, 1, 0));
  }
  return c.build();
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
// bake a loaded model's node transform into its geometry and sit it on the ground
function bakeModel(gltf, size) {
  let mesh = null; gltf.scene.updateMatrixWorld(true);
  gltf.scene.traverse((o) => { if (o.isMesh && !mesh) mesh = o; });
  const g = mesh.geometry.clone().applyMatrix4(mesh.matrixWorld);
  g.computeBoundingBox();
  const bb = g.boundingBox, k = size / Math.max(bb.max.x - bb.min.x, bb.max.z - bb.min.z);
  g.translate(-(bb.min.x + bb.max.x) / 2, -bb.min.y, -(bb.min.z + bb.max.z) / 2); g.scale(k, k, k);
  if (!g.attributes.normal) g.computeVertexNormals();
  g.computeBoundingSphere();
  return { geo: g, mat: mesh.material };
}

// ---------- impostors: a far tree is one camera-facing picture of itself ----------
function captureImpostor(renderer, parts) {
  const box = new THREE.Box3();
  for (const p of parts) { p.geo.computeBoundingBox(); box.union(p.geo.boundingBox); }
  const w = 2 * Math.max(-box.min.x, box.max.x, -box.min.z, box.max.z), y0 = box.min.y, h = box.max.y - y0;
  const scene = new THREE.Scene(), cam = new THREE.OrthographicCamera(-w / 2, w / 2, box.max.y, y0, 0.1, 400);
  cam.position.set(0, 0, 200);
  const sun = new THREE.DirectionalLight(SUN_COLOR, 2.4); sun.position.set(0.5, 0.8, 0.6);
  scene.add(new THREE.HemisphereLight(0xc4d6e0, 0x56603f, 1.25), sun);
  for (const p of parts) { const m = new THREE.Mesh(p.geo, p.mat); m.frustumCulled = false; scene.add(m); }
  const rt = new THREE.WebGLRenderTarget(256, 512, { generateMipmaps: true, minFilter: THREE.LinearMipmapLinearFilter, magFilter: THREE.LinearFilter });
  const keep = sunView.value.clone(), bg = new THREE.Color(); renderer.getClearColor(bg); const alpha = renderer.getClearAlpha();
  sunView.value.set(0.5, 0.8, 0.6).normalize();
  renderer.setRenderTarget(rt); renderer.setClearColor(0x16240f, 0); renderer.clear(); renderer.render(scene, cam);
  renderer.setRenderTarget(null); renderer.setClearColor(bg, alpha); sunView.value.copy(keep);
  return { tex: rt.texture, w, h, y0 };
}
const impostorGeo = new THREE.PlaneGeometry(1, 1).translate(0, 0.5, 0);
function impostorMat(imp) {
  const mat = new THREE.MeshBasicMaterial({ map: imp.tex, alphaTest: 0.5, side: THREE.DoubleSide });
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.uDim = { value: new THREE.Vector3(imp.w, imp.h, imp.y0) };
    sh.vertexShader = 'uniform vec3 uDim;\n' + sh.vertexShader.replace('#include <project_vertex>', `
      vec4 c_ = modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
      float sx_ = length(instanceMatrix[0].xyz), sy_ = length(instanceMatrix[1].xyz);
      vec3 tc_ = cameraPosition - c_.xyz; vec3 rt_ = normalize(vec3(tc_.z, 0.0, -tc_.x));
      vec3 wp_ = c_.xyz + rt_ * position.x * uDim.x * sx_ + vec3(0.0, (uDim.z + position.y * uDim.y) * sy_, 0.0);
      vec4 mvPosition = viewMatrix * vec4(wp_, 1.0);
      gl_Position = projectionMatrix * mvPosition;`);
  };
  mat.customProgramCacheKey = () => 'impostor';
  return mat;
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
        mesh.computeBoundingSphere(); if (part.tall) mesh.boundingSphere.radius += 36;
        mesh.matrixAutoUpdate = false; mesh.userData.lod = part.lod;
        parent.add(mesh); meshes.push(mesh);
      }
    }
    return meshes;
  }
}

const SPECIES = {
  oak:    { presets: ['Oak Large', 'Oak Medium', 'Ash Large'],     h: [25, 20, 23],    sway: 0.14, flutter: 0.035 },
  spruce: { presets: ['Pine Large', 'Pine Medium', 'Pine Large'],  h: [31, 24, 27],    sway: 0.1,  flutter: 0.015 },
  birch:  { presets: ['Aspen Large', 'Aspen Medium', 'Aspen Large'], h: [19, 16, 21],  sway: 0.2,  flutter: 0.05 },
  bush:   { presets: ['Bush 1', 'Bush 2', 'Bush 3'],               h: [2.3, 1.8, 2.7], sway: 0.03, flutter: 0.03 },
  young:  { presets: ['Oak Small', 'Pine Small', 'Aspen Small'],   h: [5.5, 7, 6],     sway: 0.08, flutter: 0.04 },
};
const loaded = (t) => new Promise((res) => { const chk = () => (t.image ? res() : setTimeout(chk, 30)); chk(); });

export async function buildFlora(scene, tex, Q, region, renderer, avoid = []) {
  const r = rng(2026 + region.seed), root = new THREE.Group(); scene.add(root);
  const colliders = [];
  const loader = new GLTFLoader().setDRACOLoader(new DRACOLoader().setDecoderPath('models/'));
  const [rocks, grassModel] = await Promise.all([
    Promise.all(['rock1', 'rock2', 'rock3'].map((n) => loader.loadAsync(`models/${n}.glb`))),
    loader.loadAsync('models/grass.glb'),
  ]);
  const barkKinds = ['oak', 'pine', 'birch'], leafKinds = ['oak', 'pine', 'aspen', 'ash'];
  await Promise.all([...barkKinds.flatMap((k) => [getBarkTexture(k, 'color'), getBarkTexture(k, 'normal')]), ...leafKinds.map(getLeafTexture)].map(loaded));

  // materials
  const barkCache = new Map();
  const barkMat = (kind, sx, sy) => {
    const key = kind + sx + '/' + sy;
    if (!barkCache.has(key)) {
      const map = getBarkTexture(kind, 'color').clone(), normalMap = getBarkTexture(kind, 'normal').clone();
      for (const t of [map, normalMap]) { t.repeat.set(sx, sy); t.needsUpdate = true; }
      barkCache.set(key, patchMoss(new THREE.MeshLambertMaterial({ map, normalMap }), kind === 'birch' ? 0.05 : 0.22));
    }
    return barkCache.get(key);
  };
  const leafCache = new Map();
  const leafMat = (kind, sway, flutter) => {
    const key = kind + sway;
    if (!leafCache.has(key)) {
      const map = getLeafTexture(kind);
      const mat = patchWind(new THREE.MeshLambertMaterial({ map, alphaTest: 0.5, side: THREE.DoubleSide }), { sway, flutter, mode: 'tree' });
      if (kind === 'aspen') mat.color.setRGB(...region.aspen);          // the photographed aspen is in autumn colour
      leafCache.set(key, { mat, depth: new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking, map, alphaTest: 0.5, side: THREE.DoubleSide }) });
    }
    return leafCache.get(key);
  };
  const coverMat = (map, alphaTest) => patchWind(new THREE.MeshLambertMaterial({ map, alphaTest, side: THREE.DoubleSide }), { sway: 0.06, flutter: 0.03, mode: 'cover', fade: Q.coverDist });
  const mats = { small: new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide }) };

  // grow every tree shape once, at two levels of detail, then instance it
  const defs = {}, radius = {}, budget = {};
  for (const [name, sp] of Object.entries(SPECIES)) {
    sp.presets.forEach((preset, v) => {
      const o = TreePreset[preset], ts = o.bark.textureScale, wood = barkMat(o.bark.type, ts.x, 1 / ts.y), leaf = leafMat(o.leaves.type, sp.sway, sp.flutter);
      const parts = [], small = name === 'bush' || name === 'young', height = sp.h[v] * (small ? 1 : region.hMul);
      const seed = 1000 + v * 77 + name.length + region.seed * 13;
      const far = growTree(preset, seed, 2, height);
      const farParts = [{ geo: far.wood, mat: wood, cast: true, tint: false, lod: 'lo' }, { geo: far.leaves, mat: leaf.mat, depth: leaf.depth, cast: true, lod: 'lo' }];
      if (Q.lodDist > 0) {
        const near = growTree(preset, seed, small ? 1 : 0, height);
        parts.push({ geo: near.wood, mat: wood, cast: true, tint: false, lod: 'hi' }, { geo: near.leaves, mat: leaf.mat, depth: leaf.depth, cast: true, lod: 'hi' });
        budget[name + v + 'hi'] = near.tris;
      }
      parts.push(...farParts);
      if (name !== 'bush') parts.push({ geo: impostorGeo, mat: impostorMat(captureImpostor(renderer, farParts)), lod: 'imp', receive: false, tall: true });
      radius[name + v] = far.radius; budget[name + v + 'lo'] = far.tris;
      defs[name + v] = parts;
    });
  }
  rocks.forEach((g, v) => {
    const b = bakeModel(g, 2), src = b.mat;
    defs['rock' + v] = [{ geo: b.geo, mat: new THREE.MeshLambertMaterial({ map: src.map, normalMap: src.normalMap, color: new THREE.Color(2.6, 2.6, 2.5), side: THREE.DoubleSide }), cast: true }];
  });
  const tuft = bakeModel(grassModel, 0.75);
  tuft.geo.attributes.normal.array.fill(0).forEach((_, i, a) => { if (i % 3 === 1) a[i] = 1; });
  tuft.mat.map.anisotropy = 4;
  defs.grass = [{ geo: tuft.geo, mat: coverMat(tuft.mat.map, 0.4) }];
  ['ash', 'oak', 'pine'].forEach((k, i) => { defs['sprig' + i] = [{ geo: sprigGeo(), mat: coverMat(getLeafTexture(k), 0.5) }]; });
  defs.log = [{ geo: trunkGeo(7, 0.34, 0.26, 0, 0, 9, 3), mat: barkMat('oak', 1, 1), cast: true, tint: false }];
  ['#f4f1e6', '#f2d23c', '#b48ae0', '#ee8fb0'].forEach((c, i) => { defs['flower' + i] = [{ geo: flowerGeo(c), mat: mats.small, tint: false }]; });
  ['#b23a22', '#9a6a3c'].forEach((c, i) => { defs['shroom' + i] = [{ geo: mushroomGeo(c), mat: mats.small, tint: false }]; });

  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), s = new THREE.Vector3(), p = new THREE.Vector3(), col = new THREE.Color();
  const place = (sc, key, x, z, scale, { sink = 0, lean = 0, sy = 1, c = null, rx = 0, rz = 0 } = {}) => {
    e.set(rx + (r() - 0.5) * lean, r() * 6.283, rz + (r() - 0.5) * lean, 'YXZ');
    q.setFromEuler(e); p.set(x, heightAt(x, z) - sink, z); s.set(scale, scale * sy, scale);
    sc.add(key, m.compose(p, q, s), c);
  };

  const blocked = (x, z, rad) => avoid.some((a) => (a.x - x) ** 2 + (a.z - z) ** 2 < rad * rad);
  for (const a of avoid) colliders.push({ x: a.x, z: a.z, r: 0.25 });
  // --- trees ---
  const trees = new Scatter(50), E = 250, cell = Q.treeCell;
  for (let gx = -E; gx < E; gx += cell) for (let gz = -E; gz < E; gz += cell) {
    const x = gx + r() * cell * 0.85, z = gz + r() * cell * 0.85, h = heightAt(x, z);
    if (h < 0.55) continue;
    const dens = forestDensity(x, z), cl = clearingFactor(x, z);
    if (cl > 0.35 && r() > 0.004) continue;
    if (r() > 0.2 + 0.8 * dens || blocked(x, z, 3.6)) continue;
    const con = coniferness(x, z), v = (r() * 3) | 0, edge = h < 2 || dens < 0.45;
    const young = r() < region.young;
    const kind = young ? 'young' : r() < con * 0.9 ? 'spruce' : r() < Math.min(0.9, region.birch * (edge ? 3 : 1)) ? 'birch' : 'oak';
    const sc = 0.8 + r() * 0.5, b = 0.6 + r() * 0.35;
    col.setRGB(b * (0.92 + r() * 0.16) * region.leaf[0], b * region.leaf[1], b * (0.85 + r() * 0.2) * region.leaf[2]);
    place(trees, kind + v, x, z, sc, { lean: 0.06, sy: 0.92 + r() * 0.2, c: col, sink: young ? 0.2 : 1.3 });
    if (!young) colliders.push({ x, z, r: radius[kind + v] * sc + 0.3 });
  }
  // --- bushes, rocks, logs ---
  for (let i = 0; i < Q.bushes * region.bushMul; i++) {
    const x = (r() - 0.5) * 420, z = (r() - 0.5) * 420;
    if (blocked(x, z, 2.6) || heightAt(x, z) < 0.5 || clearingFactor(x, z) > 0.7 || r() > 0.35 + forestDensity(x, z) * 0.5) continue;
    const b = 0.55 + r() * 0.3; col.setRGB(b * region.leaf[0], b * region.leaf[1], b * 0.9 * region.leaf[2]);
    place(trees, 'bush' + ((r() * 3) | 0), x, z, 0.6 + r() * 0.7, { sink: 0.05, c: col });
  }
  for (let i = 0; i < Q.rocks; i++) {
    const x = (r() - 0.5) * 400, z = (r() - 0.5) * 400, big = r() < 0.12;
    if (heightAt(x, z) < -0.6 || blocked(x, z, 3)) continue;
    const sc = big ? 0.9 + r() * 1.3 : 0.15 + r() * 0.45, b = 0.7 + r() * 0.3; col.setRGB(b, b, b);
    place(trees, 'rock' + ((r() * 3) | 0), x, z, sc, { sink: sc * 0.35, lean: 0.5, sy: 0.7 + r() * 0.5, c: col });
    if (sc > 0.8) colliders.push({ x, z, r: sc * 0.85 });
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
  const lodCull = treeMeshes.map((mesh) => ({ mesh, lod: mesh.userData.lod, c: mesh.boundingSphere.center.clone(), rad: mesh.boundingSphere.radius }));

  const GH = region.grassHue, grassTint = (b, dry) => col.setRGB(b * (GH[0] + dry * 0.13), b * GH[1], b * GH[2]);
  // --- ground cover (distance-culled chunks) ---
  const cover = new Scatter(40);
  const area = 400 * 400;
  for (let i = 0; i < area * Q.grass * region.grassMul; i++) {
    const x = (r() - 0.5) * 400, z = (r() - 0.5) * 400, h = heightAt(x, z);
    if (h < 0.12) continue;
    const open = Math.max(clearingFactor(x, z), 1 - forestDensity(x, z));
    if (r() > 0.1 + open * 0.9) continue;
    grassTint(0.75 + r() * 0.5, r());
    place(cover, 'grass', x, z, 0.7 + r() * 0.7 + open * 0.2, { sink: 0.03, sy: 0.7 + r() * 0.6, c: col });
  }
  // extra-lush meadow in the clearing, with flowers
  for (let i = 0; i < 3000 * Q.grass * 40; i++) {
    const a = r() * 6.283, d = Math.sqrt(r()) * (CLEARING.r + 6), x = CLEARING.x + Math.cos(a) * d, z = CLEARING.z + Math.sin(a) * d;
    grassTint(0.85 + r() * 0.5, r());
    place(cover, 'grass', x, z, 0.8 + r() * 0.7, { sink: 0.03, sy: 0.8 + r() * 0.8, c: col });
    if (r() < 0.05) place(cover, 'flower' + ((r() * 4) | 0), x + r() - 0.5, z + r() - 0.5, 0.55 + r() * 0.5, { lean: 0.3 });
  }
  for (let i = 0; i < area * Q.ferns * region.underMul; i++) {
    const x = (r() - 0.5) * 400, z = (r() - 0.5) * 400, h = heightAt(x, z);
    if (h < 0.25 || r() > forestDensity(x, z) * 0.9 + 0.08) continue;
    const b = 0.55 + r() * 0.35; col.setRGB(b * region.leaf[0], b * region.leaf[1], b * 0.9 * region.leaf[2]);
    place(cover, 'sprig' + ((r() * 3) | 0), x, z, 0.45 + r() * 0.75, { sink: 0.02, lean: 0.2, c: col });
  }
  for (let i = 0; i < 1400; i++) {         // reeds of tall grass around the pond
    const a = r() * 6.283, d = POND.r * (0.55 + r() * 0.5), x = POND.x + Math.cos(a) * d, z = POND.z + Math.sin(a) * d, h = heightAt(x, z);
    if (h < -0.25 || h > 0.9) continue;
    grassTint(0.9, 0.9);
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
    budget,
    update(cam) {
      for (const c of coverCull) c.mesh.visible = c.c.distanceTo(cam) - c.rad < Q.coverDist;
      for (const c of lodCull) {       // detailed shape up close, light shape further out, a picture in the mist
        const d = c.c.distanceTo(cam);
        if (d - c.rad > Q.treeFar) { c.mesh.visible = false; continue; }
        const dn = Math.max(0, d - c.rad * 0.6);
        c.mesh.visible = c.lod === 'hi' ? dn < Q.lodDist : c.lod === 'lo' ? dn >= Q.lodDist && dn < Q.impDist : c.lod === 'imp' ? dn >= Q.impDist : true;
      }
    },
  };
}
