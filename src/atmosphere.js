// Sky, sun, mist, light shafts, drifting pollen and the water surface.
import * as THREE from 'three';
import { rng } from './noise.js';
import { heightAt, forestDensity } from './terrain.js';

export const SUN = new THREE.Vector3(-0.52, 0.6, -0.61).normalize();
export const FOG_COLOR = new THREE.Color().setRGB(0.66, 0.76, 0.68, THREE.SRGBColorSpace);
const SUN_COLOR = new THREE.Color().setRGB(1.0, 0.86, 0.66, THREE.SRGBColorSpace);
const TAIL = '\n#include <tonemapping_fragment>\n#include <colorspace_fragment>\n';

export function buildAtmosphere(scene, tex, Q) {
  const time = { value: 0 };
  scene.fog = new THREE.FogExp2(FOG_COLOR, 0.0135);
  scene.background = FOG_COLOR;

  // --- lights ---
  const hemi = new THREE.HemisphereLight(0xb8d2e6, 0x4c5a3a, 1.35);
  const sun = new THREE.DirectionalLight(SUN_COLOR, 4.0);
  sun.castShadow = true;
  sun.shadow.mapSize.set(Q.shadow, Q.shadow);
  const R = Q.shadowRange, cam = sun.shadow.camera;
  cam.left = -R; cam.right = R; cam.top = R; cam.bottom = -R; cam.near = 1; cam.far = 260;
  sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.06;
  scene.add(hemi, sun, sun.target);

  // --- sky dome ---
  const sky = new THREE.Mesh(new THREE.SphereGeometry(900, 32, 16), new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: { uSun: { value: SUN }, uFog: { value: FOG_COLOR }, uSunCol: { value: SUN_COLOR }, uTime: time },
    vertexShader: 'varying vec3 vD; void main(){ vD = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
    fragmentShader: `varying vec3 vD; uniform vec3 uSun, uFog, uSunCol; uniform float uTime;
      float h(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
      float n(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f); return mix(mix(h(i),h(i+vec2(1,0)),f.x), mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x), f.y); }
      float fb(vec2 p){ float a=0.5,s=0.0; for(int i=0;i<5;i++){ s+=a*n(p); p*=2.03; a*=0.5; } return s; }
      void main(){
        vec3 d = normalize(vD); float y = max(d.y, 0.0);
        vec3 col = mix(vec3(0.62,0.76,0.90), vec3(0.20,0.42,0.76), pow(y, 0.55));
        vec2 cp = d.xz / (d.y + 0.25) * 1.3 + uTime * 0.006;
        float c = smoothstep(0.48, 0.78, fb(cp)) * smoothstep(0.02, 0.3, d.y);
        col = mix(col, vec3(1.0, 0.97, 0.92), c * 0.85);
        float s = max(dot(d, uSun), 0.0);
        col += uSunCol * (pow(s, 900.0) * 14.0 + pow(s, 14.0) * 0.45 + pow(s, 3.0) * 0.12);
        col = mix(uFog, col, smoothstep(0.0, 0.3, d.y));
        gl_FragColor = vec4(col, 1.0);${TAIL} }`,
  }));
  sky.renderOrder = -10; sky.frustumCulled = false;
  scene.add(sky);

  // --- light shafts under the canopy ---
  const r = rng(909), P = [], UV = [], SEED = [], IDX = [];
  const w1 = new THREE.Vector3().crossVectors(SUN, new THREE.Vector3(0, 1, 0)).normalize(), w2 = new THREE.Vector3().crossVectors(SUN, w1).normalize();
  let made = 0, guard = 0;
  while (made < Q.shafts && guard++ < 5000) {
    const x = (r() - 0.5) * 320, z = (r() - 0.5) * 320, d = forestDensity(x, z), y = heightAt(x, z);
    if (d < 0.35 || d > 0.9 || y < 0.3) continue;
    const len = 24 + r() * 16, wid = 1.6 + r() * 3.2, seed = r();
    for (const w of [w1, w2]) {
      const b = P.length / 3;
      for (const [sx, sy] of [[-1, 0], [1, 0], [1, 1], [-1, 1]]) {
        P.push(x + w.x * wid * sx + SUN.x * len * sy, y - 0.3 + w.y * wid * sx + SUN.y * len * sy, z + w.z * wid * sx + SUN.z * len * sy);
        UV.push(sx * 0.5 + 0.5, sy); SEED.push(seed);
      }
      IDX.push(b, b + 1, b + 2, b, b + 2, b + 3);
    }
    made++;
  }
  const sg = new THREE.BufferGeometry();
  sg.setAttribute('position', new THREE.Float32BufferAttribute(P, 3));
  sg.setAttribute('uv', new THREE.Float32BufferAttribute(UV, 2));
  sg.setAttribute('aSeed', new THREE.Float32BufferAttribute(SEED, 1));
  sg.setIndex(IDX);
  const shafts = new THREE.Mesh(sg, new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
    uniforms: { uTime: time, uCol: { value: SUN_COLOR } },
    vertexShader: `attribute float aSeed; varying vec2 vUv; varying float vS; varying float vDist;
      void main(){ vUv = uv; vS = aSeed; vec4 mv = modelViewMatrix * vec4(position,1.0); vDist = length(mv.xyz); gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `varying vec2 vUv; varying float vS; varying float vDist; uniform float uTime; uniform vec3 uCol;
      void main(){
        float a = pow(sin(vUv.x * 3.14159), 2.0) * smoothstep(0.0, 0.2, vUv.y) * smoothstep(1.0, 0.45, vUv.y);
        a *= smoothstep(2.0, 16.0, vDist) * (1.0 - smoothstep(60.0, 115.0, vDist));
        a *= 0.65 + 0.35 * sin(uTime * 0.35 + vS * 40.0);
        gl_FragColor = vec4(uCol * a * 0.06, 1.0);${TAIL} }`,
  }));
  shafts.frustumCulled = false; shafts.renderOrder = 5;
  scene.add(shafts);

  // --- pollen and dust that wraps around the camera ---
  const N = Q.dust, pp = new Float32Array(N * 3), ps = new Float32Array(N);
  for (let i = 0; i < N; i++) { pp[i * 3] = r() * 40; pp[i * 3 + 1] = r() * 16; pp[i * 3 + 2] = r() * 40; ps[i] = r(); }
  const dg = new THREE.BufferGeometry();
  dg.setAttribute('position', new THREE.BufferAttribute(pp, 3));
  dg.setAttribute('aSeed', new THREE.BufferAttribute(ps, 1));
  const dust = new THREE.Points(dg, new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: { uTime: time, uCam: { value: new THREE.Vector3() }, uCol: { value: SUN_COLOR }, uScale: { value: 1 } },
    vertexShader: `attribute float aSeed; uniform float uTime, uScale; uniform vec3 uCam; varying float vA;
      void main(){
        vec3 p = position + vec3(uTime * 0.22, sin(uTime * 0.5 + aSeed * 30.0) * 0.4 - uTime * 0.03, uTime * 0.13);
        p.x += sin(uTime * 0.7 + aSeed * 50.0) * 0.5;
        vec3 box = vec3(40.0, 16.0, 40.0);
        p = mod(p - uCam + box * 0.5, box) - box * 0.5 + uCam;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        float dist = -mv.z;
        vA = smoothstep(0.4, 2.5, dist) * (1.0 - smoothstep(12.0, 20.0, dist)) * (0.35 + 0.65 * aSeed);
        gl_PointSize = uScale * (0.6 + aSeed * 1.2) * 11.0 / max(dist, 0.5);
        gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `varying float vA; uniform vec3 uCol;
      void main(){ float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.0, d); gl_FragColor = vec4(uCol * a * a * vA * 0.4, 1.0);${TAIL} }`,
  }));
  dust.frustumCulled = false; dust.renderOrder = 6;
  scene.add(dust);

  // --- water ---
  const water = new THREE.Mesh(new THREE.PlaneGeometry(700, 700).rotateX(-Math.PI / 2), new THREE.ShaderMaterial({
    transparent: true, fog: true,
    uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.fog, {
      uN: { value: null }, uTime: { value: 0 }, uSun: { value: SUN }, uSunCol: { value: SUN_COLOR }, uFog: { value: FOG_COLOR },
    }]),
    vertexShader: `varying vec3 vW;
      #include <fog_pars_vertex>
      void main(){ vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; vec4 mvPosition = viewMatrix * w; gl_Position = projectionMatrix * mvPosition;
      #include <fog_vertex>
      }`,
    fragmentShader: `varying vec3 vW; uniform sampler2D uN; uniform float uTime; uniform vec3 uSun, uSunCol, uFog;
      #include <fog_pars_fragment>
      void main(){
        vec2 u = vW.xz;
        vec3 n1 = texture2D(uN, u * 0.11 + vec2(uTime * 0.012, uTime * 0.008)).xyz * 2.0 - 1.0;
        vec3 n2 = texture2D(uN, u * 0.27 - vec2(uTime * 0.016, -uTime * 0.011)).xyz * 2.0 - 1.0;
        vec3 n = normalize(vec3((n1.x + n2.x) * 0.22, 1.0, (n1.y + n2.y) * 0.22));
        vec3 v = normalize(cameraPosition - vW);
        vec3 rf = reflect(-v, n);
        float fr = 0.03 + 0.97 * pow(1.0 - max(dot(v, n), 0.0), 5.0);
        vec3 skyc = mix(uFog, vec3(0.3, 0.5, 0.8), pow(max(rf.y, 0.0), 0.6));
        vec3 refl = mix(vec3(0.035, 0.07, 0.03), skyc, smoothstep(0.18, 0.62, rf.y + (n1.x + n2.y) * 0.08));
        refl += uSunCol * pow(max(dot(rf, uSun), 0.0), 420.0) * 6.0;
        vec3 deep = vec3(0.02, 0.045, 0.035);
        gl_FragColor = vec4(mix(deep, refl, fr), mix(0.72, 1.0, fr));
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        #include <fog_fragment>
      }`,
  }));
  water.material.uniforms.uN.value = tex.waterN;
  water.material.uniforms.uTime = time;
  water.material.uniforms.uSun.value = SUN; water.material.uniforms.uSunCol.value = SUN_COLOR; water.material.uniforms.uFog.value = FOG_COLOR;
  water.position.y = 0; water.renderOrder = 2;
  scene.add(water);

  const snap = new THREE.Vector3();
  return {
    time, sun,
    update(t, camPos, pixelScale) {
      time.value = t;
      sky.position.copy(camPos);
      dust.material.uniforms.uCam.value.copy(camPos);
      dust.material.uniforms.uScale.value = pixelScale;
      // shadow frustum follows the visitor in whole-texel steps to avoid shimmering
      const step = (R * 2) / Q.shadow * 4;
      snap.set(Math.round(camPos.x / step) * step, 11, Math.round(camPos.z / step) * step);
      sun.target.position.copy(snap);
      sun.position.copy(snap).addScaledVector(SUN, 130);
    },
  };
}
