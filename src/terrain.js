import * as THREE from 'three';
import { fbm, lerp, smoothstep, clamp } from './noise.js';

export const WORLD = 400;          // metres, square
export const HALF = WORLD / 2;
export const PLAY_RADIUS = 150;    // how far the visitor may wander
export const CLEARING = { x: 38, z: -24, r: 30 };
export const POND = { x: -8, z: 22, r: 19 };

// A game trail loops through the forest; the wild horses run it and you can follow it.
const WAY = [[38, -24], [84, 6], [98, 66], [44, 108], [-38, 98], [-98, 44], [-104, -38], [-52, -96], [8, -78]];
export const trail = new THREE.CatmullRomCurve3(WAY.map(([x, z]) => new THREE.Vector3(x, 0, z)), true, 'catmullrom', 0.5);
const TRAIL_PTS = trail.getSpacedPoints(400);
const TG = 256, TCELL = 520 / TG, trailField = new Float32Array(TG * TG);
for (let j = 0; j < TG; j++) for (let i = 0; i < TG; i++) {
  const x = -260 + i * TCELL, z = -260 + j * TCELL;
  let d = 1e9;
  for (const p of TRAIL_PTS) { const q = (p.x - x) ** 2 + (p.z - z) ** 2; if (q < d) d = q; }
  trailField[j * TG + i] = Math.sqrt(d);
}
export function trailDist(x, z) {
  const fx = clamp((x + 260) / TCELL, 0, TG - 1.001), fz = clamp((z + 260) / TCELL, 0, TG - 1.001);
  const i = fx | 0, j = fz | 0, u = fx - i, v = fz - j, o = j * TG + i;
  return lerp(lerp(trailField[o], trailField[o + 1], u), lerp(trailField[o + TG], trailField[o + TG + 1], u), v);
}

// Single source of truth for the ground. Water sits at y = 0.
export function heightAt(x, z) {
  let h = (fbm(x * 0.0075 + 11.3, z * 0.0075 + 4.7, 5, 1) - 0.33) * 34;
  h += (fbm(x * 0.045, z * 0.045, 3, 7) - 0.5) * 1.8;
  const dc = Math.hypot(x - CLEARING.x, z - CLEARING.z);
  const c = smoothstep(CLEARING.r + 26, CLEARING.r - 8, dc);
  h = lerp(h, 2.4 + (fbm(x * 0.03, z * 0.03, 2, 9) - 0.5) * 1.4, c);
  const dp = Math.hypot(x - POND.x, z - POND.z);
  const p = smoothstep(POND.r + 15, POND.r * 0.25, dp);
  h = lerp(h, -1.9, p);
  const t = smoothstep(9, 2.5, trailDist(x, z));     // keep the trail dry and gentle
  if (t > 0) h = lerp(h, Math.max(h, 0.55), t);
  return h;
}
export function clearingFactor(x, z) {
  return smoothstep(CLEARING.r + 6, CLEARING.r - 6, Math.hypot(x - CLEARING.x, z - CLEARING.z));
}
// 0 = open, 1 = dense old forest
export function forestDensity(x, z) {
  const n = fbm(x * 0.011 + 3.1, z * 0.011 + 8.2, 3, 21);
  return clamp(smoothstep(0.28, 0.62, n) * (1 - clearingFactor(x, z)), 0, 1);
}
// 0 = broadleaf, 1 = conifer
export function coniferness(x, z) {
  return smoothstep(0.42, 0.58, fbm(x * 0.006 + 40, z * 0.006 - 13, 3, 33));
}

export function buildTerrain(tex, segs) {
  const geo = new THREE.PlaneGeometry(WORLD + 200, WORLD + 200, segs, segs);
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) pos.setY(i, heightAt(pos.getX(i), pos.getZ(i)));
  geo.computeVertexNormals();
  const nor = geo.attributes.normal;
  const col = new Float32Array(pos.count * 3), grassy = new Float32Array(pos.count);
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
    const dens = forestDensity(x, z), cl = clearingFactor(x, z), tr = smoothstep(2.6, 0.6, trailDist(x, z)) * (1 - cl);
    const n = fbm(x * 0.08, z * 0.08, 3, 5), wet = smoothstep(0.9, 0.05, y);
    // the photographs carry the colour; vertex colour only shades: damp ground, trodden trail, canopy shade
    let v = lerp(1.25, 0.85, dens) * lerp(0.85, 1.15, fbm(x * 0.3, z * 0.3, 2, 12));
    v *= lerp(1, 0.55, Math.max(wet, tr * 0.5));
    col[i * 3] = v * 0.86; col[i * 3 + 1] = v * 0.96; col[i * 3 + 2] = v * lerp(0.84, 0.7, wet);
    grassy[i] = clamp(Math.max(cl * 1.1, (1 - dens) * 0.75) + (n - 0.5) * 0.7 - wet * 0.6 - tr - smoothstep(0.85, 0.65, nor.getY(i)), 0, 1);
  }
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  geo.setAttribute('aGrass', new THREE.BufferAttribute(grassy, 1));
  const uv = geo.attributes.uv;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, pos.getX(i) / 2.6, pos.getZ(i) / 2.6);
  const mat = new THREE.MeshLambertMaterial({ map: tex.dirt, normalMap: tex.dirtN, normalScale: new THREE.Vector2(1.6, 1.6), vertexColors: true });
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.uGrass = { value: tex.grassGround };
    sh.vertexShader = 'attribute float aGrass;\nvarying float vGrass;\n' + sh.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\n vGrass = aGrass;');
    // two scales of each photograph hide the repeat; grass creeps in along the darker soil first
    sh.fragmentShader = 'uniform sampler2D uGrass;\nvarying float vGrass;\n' + sh.fragmentShader.replace('#include <map_fragment>', `
      vec3 d_ = mix(texture2D(map, vMapUv).rgb, texture2D(map, vMapUv * 0.23 + 0.37).rgb, 0.45);
      vec3 g_ = mix(texture2D(uGrass, vMapUv * 1.3).rgb, texture2D(uGrass, vMapUv * 0.19 + 0.11).rgb, 0.5);
      float n_ = texture2D(uGrass, vMapUv * 0.031).g + texture2D(map, vMapUv * 0.083).r;
      float m_ = smoothstep(0.3, 0.7, vGrass + (0.22 - dot(d_, vec3(0.333))) * 1.2 + (n_ - 0.55) * 1.3);
      diffuseColor.rgb *= mix(d_ * 1.6, g_ * 1.05, m_);`);
  };
  const mesh = new THREE.Mesh(geo, mat);
  mesh.receiveShadow = true;
  return mesh;
}
