// Wildlife: foxes that wander and bolt, a herd of wild horses on the trail,
// birds above the canopy and butterflies in the meadow.
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { clone as cloneSkinned } from 'three/addons/utils/SkeletonUtils.js';
import { mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';
import { rng, lerp } from './noise.js';
import { heightAt, trail, CLEARING, POND } from './terrain.js';

const turnTo = (cur, target, max) => {
  let d = ((target - cur + Math.PI) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) - Math.PI;
  return cur + Math.max(-max, Math.min(max, d));
};
const shadows = (o) => o.traverse((m) => { if (m.isMesh) { m.castShadow = true; m.receiveShadow = true; m.frustumCulled = false; } });

// The source models are flat-shaded low-poly; welding their vertices gives smooth shading.
function smooth(geo, dropColor) {
  const g = geo.clone();
  g.deleteAttribute('normal'); if (dropColor) g.deleteAttribute('color');
  if (g.morphAttributes.normal) delete g.morphAttributes.normal;
  const m = mergeVertices(g, 1e-3);
  m.computeVertexNormals();
  return m;
}

export async function buildFauna(scene, Q, onProgress) {
  const loader = new GLTFLoader(), r = rng(4242);
  const load = (n) => loader.loadAsync(`models/${n}.glb`).catch(() => null);
  const [fox, horse, stork, parrot] = await Promise.all(['Fox', 'Horse', 'Stork', 'Parrot'].map(load));
  onProgress && onProgress();
  const updaters = [], foxes = [];
  if (fox) fox.scene.traverse((o) => { if (o.isSkinnedMesh) { o.geometry = smooth(o.geometry, false); o.material.roughness = 0.9; } });
  for (const g of [horse, stork, parrot]) if (g) { const m = g.scene.children[0]; m.geometry = smooth(m.geometry, g === horse); m.material.flatShading = false; m.material.vertexColors = g !== horse; m.material.roughness = 0.85; m.material.needsUpdate = true; }

  // ---------- foxes ----------
  if (fox) {
    const homes = [[30, 4], [-34, 44], [70, -52], [-60, -30], [12, 70], [58, 40]].slice(0, Q.foxes);
    for (const [hx, hz] of homes) {
      const obj = cloneSkinned(fox.scene); obj.scale.setScalar(0.0068); shadows(obj);
      scene.add(obj);
      const mixer = new THREE.AnimationMixer(obj), act = {};
      for (const c of fox.animations) { act[c.name] = mixer.clipAction(c); act[c.name].play(); act[c.name].setEffectiveWeight(0); }
      const f = { obj, x: hx, z: hz, hx, hz, heading: r() * 6.283, speed: 0, state: 'idle', timer: 1 + r() * 4, tx: hx, tz: hz, w: { Survey: 1, Walk: 0, Run: 0 } };
      foxes.push(f);
      const dry = (x, z) => heightAt(x, z) > 0.25;
      updaters.push((dt, player) => {
        const dp = Math.hypot(player.x - f.x, player.z - f.z);
        if (dp < 9 && f.state !== 'flee') { f.state = 'flee'; f.timer = 3.5 + r() * 2; }
        let want = 0, target = f.heading;
        if (f.state === 'idle') {
          if ((f.timer -= dt) <= 0) {
            for (let i = 0; i < 8; i++) { const a = r() * 6.283, d = 6 + r() * 22; f.tx = f.hx + Math.cos(a) * d; f.tz = f.hz + Math.sin(a) * d; if (dry(f.tx, f.tz)) break; }
            f.state = 'walk';
          }
        } else if (f.state === 'walk') {
          target = Math.atan2(f.tx - f.x, f.tz - f.z); want = 1.15;
          if (Math.hypot(f.tx - f.x, f.tz - f.z) < 0.8) { f.state = 'idle'; f.timer = 3 + r() * 7; }
        } else {
          target = Math.atan2(f.x - player.x, f.z - player.z); want = 6.2;
          if ((f.timer -= dt) <= 0 && dp > 16) { f.state = 'idle'; f.timer = 2 + r() * 3; f.hx = f.x; f.hz = f.z; }
        }
        // steer away from water
        const ax = f.x + Math.sin(target) * 2.5, az = f.z + Math.cos(target) * 2.5;
        if (want > 0 && !dry(ax, az)) { target += 1.4; if (f.state === 'walk') { f.state = 'idle'; f.timer = 0.5; } }
        f.heading = turnTo(f.heading, target, dt * (f.state === 'flee' ? 5 : 2.2));
        f.speed = lerp(f.speed, want, 1 - Math.exp(-dt * 4));
        const nx = f.x + Math.sin(f.heading) * f.speed * dt, nz = f.z + Math.cos(f.heading) * f.speed * dt;
        if (dry(nx, nz)) { f.x = nx; f.z = nz; }
        obj.position.set(f.x, heightAt(f.x, f.z), f.z);
        obj.rotation.y = f.heading;
        const goal = f.speed > 3 ? 'Run' : f.speed > 0.25 ? 'Walk' : 'Survey', k = 1 - Math.exp(-dt * 6);
        for (const n in f.w) { f.w[n] = lerp(f.w[n], n === goal ? 1 : 0, k); act[n] && act[n].setEffectiveWeight(f.w[n]); }
        if (act.Walk) act.Walk.timeScale = Math.max(0.5, f.speed / 1.15);
        mixer.update(dt);
      });
    }
  }

  // ---------- wild horses on the trail ----------
  const herd = { pos: new THREE.Vector3(), speed: 0 };
  if (horse) {
    const src = horse.scene.children[0], len = trail.getLength(), tmp = new THREE.Vector3(), tan = new THREE.Vector3();
    const coats = [0x8a5a34, 0x5c3d26, 0xa87a4e, 0x3d2b20, 0x9a6a44, 0x6e4a2e, 0xb08a60];
    let u = 0.93, pace = 9, rest = 0;
    for (let i = 0; i < Q.horses; i++) {
      const mesh = src.clone();
      mesh.material = src.material.clone(); mesh.material.color = new THREE.Color(coats[i % coats.length]); mesh.material.roughness = 0.75;
      mesh.scale.setScalar(0.0088 * (0.92 + r() * 0.16)); mesh.castShadow = true; mesh.frustumCulled = false;
      scene.add(mesh);
      const mixer = new THREE.AnimationMixer(mesh), a = mixer.clipAction(horse.animations[0]);
      a.play(); a.time = r(); const rate = 1.15 + r() * 0.2;
      const back = 3.2 * i + r() * 1.5, side = (i % 2 ? 1 : -1) * (0.8 + r() * 1.6);
      updaters.push((dt) => {
        const uu = (((u - back / len) % 1) + 1) % 1;
        trail.getPointAt(uu, tmp); trail.getTangentAt(uu, tan);
        const x = tmp.x - tan.z * side, z = tmp.z + tan.x * side;
        mesh.position.set(x, heightAt(x, z), z);
        mesh.rotation.y = Math.atan2(tan.x, tan.z);
        mixer.update(dt * rate * (pace / 9));
        if (i === 0) herd.pos.copy(mesh.position);
      });
    }
    updaters.push((dt) => { herd.speed = pace; u = (u + (pace * dt) / len) % 1; });
  }

  // ---------- birds ----------
  const addBird = (gltf, scale, path, rate) => {
    if (!gltf) return;
    const mesh = gltf.scene.children[0].clone(); mesh.scale.setScalar(scale); mesh.frustumCulled = false; mesh.castShadow = true;
    scene.add(mesh);
    const mixer = new THREE.AnimationMixer(mesh), a = mixer.clipAction(gltf.animations[0]); a.play(); a.time = r();
    let t = r() * 100; const p = new THREE.Vector3(), q = new THREE.Vector3();
    updaters.push((dt) => {
      t += dt; path(t, p); path(t + 0.1, q);
      mesh.position.copy(p);
      mesh.rotation.set(0, Math.atan2(q.x - p.x, q.z - p.z), 0);
      mesh.rotation.z = Math.atan2(q.y - p.y, 1) * 0.5;
      mixer.update(dt * rate);
    });
  };
  for (let i = 0; i < Q.birds; i++) {
    const cx = lerp(CLEARING.x, POND.x, r()), cz = lerp(CLEARING.z, POND.z, r()), rad = 35 + r() * 45, alt = 34 + r() * 14, w = (r() < 0.5 ? -1 : 1) * (7.5 / rad), ph = r() * 6.283;
    addBird(stork, 0.011, (t, o) => o.set(cx + Math.cos(t * w + ph) * rad, alt + Math.sin(t * 0.2 + ph) * 3, cz + Math.sin(t * w + ph) * rad), 0.8);
  }
  for (let i = 0; i < Q.birds + 2; i++) {
    const ph = r() * 6.283, a = 16 + r() * 16, b = 10 + r() * 12, alt = 5 + r() * 5, w = 0.32 + r() * 0.12, ox = (r() - 0.5) * 8;
    addBird(parrot, 0.0075, (t, o) => o.set(CLEARING.x + ox + Math.sin(t * w + ph) * a, alt + Math.sin(t * 0.9 + ph) * 1.6 + 2.4, CLEARING.z + Math.sin(t * w * 2 + ph * 2) * b), 1.6);
  }

  // ---------- butterflies ----------
  const NB = Q.butterflies, wing = new THREE.BufferGeometry();
  wing.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, -0.03, 0.07, 0, -0.06, 0.08, 0, 0.03, 0, 0, 0.04, 0, 0, -0.03, -0.07, 0, -0.06, -0.08, 0, 0.03, 0, 0, 0.04], 3));
  wing.setIndex([0, 1, 2, 0, 2, 3, 4, 6, 5, 4, 7, 6]);
  wing.setAttribute('aPhase', new THREE.InstancedBufferAttribute(Float32Array.from({ length: NB }, () => r() * 6.283), 1));
  const flapT = { value: 0 };
  const bmat = new THREE.MeshBasicMaterial({ side: THREE.DoubleSide });
  bmat.onBeforeCompile = (sh) => {
    sh.uniforms.uT = flapT;
    sh.vertexShader = 'uniform float uT; attribute float aPhase;\n' + sh.vertexShader.replace('#include <begin_vertex>', `#include <begin_vertex>
      float fa_ = sin(uT * 22.0 + aPhase) * 1.1; float ax_ = abs(transformed.x);
      transformed.y += ax_ * sin(fa_); transformed.x = sign(transformed.x) * ax_ * cos(fa_);`);
  };
  const flies = new THREE.InstancedMesh(wing, bmat, NB); flies.frustumCulled = false;
  const pal = [0xf4a020, 0xfdf6e0, 0x6aa8f0, 0xf0d040, 0xe86a3a], bf = [], mm = new THREE.Matrix4(), qq = new THREE.Quaternion(), ee = new THREE.Euler(), ss = new THREE.Vector3(1, 1, 1), vv = new THREE.Vector3();
  for (let i = 0; i < NB; i++) {
    const a = r() * 6.283, d = Math.sqrt(r()) * CLEARING.r;
    bf.push({ x: CLEARING.x + Math.cos(a) * d, z: CLEARING.z + Math.sin(a) * d, ph: r() * 100, sp: 0.5 + r() * 0.6, h: 0.5 + r() * 1.2 });
    flies.setColorAt(i, new THREE.Color(pal[(r() * pal.length) | 0]));
  }
  scene.add(flies);
  let bt = 0;
  updaters.push((dt) => {
    bt += dt; flapT.value = bt;
    for (let i = 0; i < NB; i++) {
      const b = bf[i], t = bt * b.sp + b.ph;
      const x = b.x + Math.sin(t * 0.7) * 3 + Math.sin(t * 1.9) * 0.8, z = b.z + Math.cos(t * 0.53) * 3 + Math.cos(t * 2.3) * 0.8;
      const hd = Math.atan2(Math.cos(t * 0.7) * 2.1 + Math.cos(t * 1.9) * 1.5, -Math.sin(t * 0.53) * 1.6 - Math.sin(t * 2.3) * 1.8);
      vv.set(x, heightAt(x, z) + b.h + Math.sin(t * 3.1) * 0.25, z); ee.set(0.3, hd, 0, 'YXZ'); qq.setFromEuler(ee);
      flies.setMatrixAt(i, mm.compose(vv, qq, ss));
    }
    flies.instanceMatrix.needsUpdate = true;
  });

  return { foxes, herd, update(dt, player) { for (const u of updaters) u(dt, player); } };
}
