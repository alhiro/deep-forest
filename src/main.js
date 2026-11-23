import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { makeTextures } from './textures.js';
import { buildTerrain, heightAt, forestDensity, coniferness, trail, CLEARING, POND } from './terrain.js';
import { buildFlora, windTime, sunView } from './flora.js';
import { SUN } from './atmosphere.js';
import { buildAtmosphere } from './atmosphere.js';
import { buildFauna } from './fauna.js';
import { Player } from './player.js';
import { ForestAudio } from './audio.js';

// ---------- detail levels ----------
const LEVELS = {
  low:    { treeCell: 7.6, grass: 0.22, ferns: 0.05, bushes: 700,  rocks: 300, logs: 40, shadow: 1024, shadowRange: 40, coverDist: 48, pr: 1,    post: false, lodDist: 0,  treeFar: 115, segs: 220, shafts: 26, dust: 500,  foxes: 3, horses: 4, birds: 2, butterflies: 30 },
  medium: { treeCell: 6.4, grass: 0.5,  ferns: 0.1,  bushes: 1300, rocks: 450, logs: 60, shadow: 2048, shadowRange: 56, coverDist: 66, pr: 1.25, post: true,  lodDist: 30, treeFar: 135, segs: 320, shafts: 46, dust: 1200, foxes: 5, horses: 5, birds: 3, butterflies: 60 },
  high:   { treeCell: 5.6, grass: 0.9,  ferns: 0.16, bushes: 2000, rocks: 600, logs: 80, shadow: 4096, shadowRange: 62, coverDist: 86, pr: 2,    post: true,  lodDist: 44, treeFar: 155, segs: 420, shafts: 70, dust: 2200, foxes: 6, horses: 7, birds: 4, butterflies: 90 },
};
const params = new URLSearchParams(location.search);
const store = { get(k) { try { return localStorage.getItem(k); } catch { return null; } }, set(k, v) { try { localStorage.setItem(k, v); } catch {} } };
const coarse = matchMedia('(pointer: coarse)').matches;
const guess = 'low';     // Low already uses the real trees and textures and holds 60 fps on an Apple M1
const level = LEVELS[params.get('q')] ? params.get('q') : LEVELS[store.get('forest.detail')] ? store.get('forest.detail') : guess;
const Q = LEVELS[level];

const $ = (id) => document.getElementById(id);
const canvas = $('view'), enterBtn = $('enter'), bar = $('bar').firstElementChild;
for (const b of $('quality').children) {
  b.setAttribute('aria-pressed', b.dataset.q === level);
  b.onclick = () => { if (b.dataset.q !== level) { store.set('forest.detail', b.dataset.q); location.reload(); } };
}
const tick = () => new Promise((r) => setTimeout(r, 0));
const progress = async (f, label) => { bar.style.width = f * 100 + '%'; if (label) enterBtn.textContent = label; await tick(); };

async function boot() {
  // ---------- renderer ----------
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: !Q.post, powerPreference: 'high-performance' });
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
  renderer.info.autoReset = false;
  const basePR = Math.min(devicePixelRatio || 1, Q.pr);
  let scale = 1;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(62, innerWidth / innerHeight, 0.12, 1000);
  let composer = null;
  if (Q.post) {
    const rt = new THREE.WebGLRenderTarget(innerWidth, innerHeight, { type: THREE.HalfFloatType, samples: level === 'high' ? 4 : 2 });
    composer = new EffectComposer(renderer, rt);
    composer.addPass(new RenderPass(scene, camera));
    composer.addPass(new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), 0.2, 0.7, 0.92));
    composer.addPass(new OutputPass());
  }
  const resize = () => {
    camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
    renderer.setPixelRatio(basePR * scale); renderer.setSize(innerWidth, innerHeight, false);
    if (composer) { composer.setPixelRatio(basePR * scale); composer.setSize(innerWidth, innerHeight); }
  };
  addEventListener('resize', resize); resize();

  // ---------- world ----------
  await progress(0.05, 'Mixing soil and bark…');
  const tex = makeTextures();
  await progress(0.25, 'Raising the ground…');
  scene.add(buildTerrain(tex, Q.segs));
  const atmo = buildAtmosphere(scene, tex, Q);
  await progress(0.4, 'Growing the forest…');
  const flora = await buildFlora(scene, tex, Q);
  await progress(0.75, 'Waking the animals…');
  const fauna = await buildFauna(scene, Q);
  const audio = new ForestAudio();
  const player = new Player(camera, canvas, flora.collide);
  player.onStep = (s, wet) => audio.footstep(s, wet);

  // ---------- places ----------
  const yawTo = (x, z, tx, tz) => Math.atan2(-(tx - x), -(tz - z));
  const best = (score, rad) => { let b = null, bs = -1e9; for (let x = -rad; x <= rad; x += 6) for (let z = -rad; z <= rad; z += 6) { if (Math.hypot(x, z) > rad || heightAt(x, z) < 1) continue; const s = score(x, z); if (s > bs) { bs = s; b = [x, z]; } } return b; };
  const grove = best((x, z) => forestDensity(x, z) + coniferness(x, z) - Math.hypot(x, z) / 400, 120);
  const ridge = best((x, z) => heightAt(x, z), 130);
  const tp = trail.getPointAt(0.31), tt = trail.getTangentAt(0.31);
  const fx = fauna.foxes[0] || { x: 30, z: 4 };
  const places = [
    { name: 'The meadow', x: 26, z: 4, yaw: yawTo(26, 4, CLEARING.x, CLEARING.z) },
    { name: 'Still water', x: POND.x + 23, z: POND.z + 13, yaw: yawTo(POND.x + 23, POND.z + 13, POND.x, POND.z) },
    { name: 'The old grove', x: grove[0], z: grove[1], yaw: yawTo(grove[0], grove[1], 0, 0) + 2.2 },
    { name: 'The horse trail', x: tp.x, z: tp.z, yaw: yawTo(0, 0, tt.x, tt.z) },
    { name: 'The ridge', x: ridge[0], z: ridge[1], yaw: yawTo(ridge[0], ridge[1], 0, 0) },
    { name: 'Fox country', x: fx.x + 9, z: fx.z + 7, yaw: yawTo(fx.x + 9, fx.z + 7, fx.x, fx.z) },
  ];
  let placeTimer = 0;
  const goTo = (i) => {
    const p = places[i]; if (!p) return;
    player.place(p.x, p.z, p.yaw, -0.03);
    $('place').textContent = p.name; $('place').style.opacity = 1; placeTimer = 3.5;
  };
  goTo(Math.max(0, Math.min(5, (parseInt(params.get('vp')) || 1) - 1)));

  // ---------- menu / input ----------
  let inside = false, statsOn = false;
  const enter = () => {
    inside = true; player.enabled = true; document.body.classList.remove('menu');
    audio.start();
    if (!coarse && canvas.requestPointerLock) { try { const p = canvas.requestPointerLock(); if (p && p.catch) p.catch(() => {}); } catch {} }
    $('place').style.opacity = 1; placeTimer = 3.5;
  };
  const leave = () => { inside = false; player.enabled = false; document.body.classList.add('menu'); enterBtn.textContent = 'Keep walking'; };
  enterBtn.onclick = enter;
  canvas.addEventListener('click', () => { if (inside && !coarse && document.pointerLockElement !== canvas) canvas.requestPointerLock(); });
  document.addEventListener('pointerlockchange', () => { if (!document.pointerLockElement && inside && !params.get('auto')) leave(); });
  addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && inside && !document.pointerLockElement) leave();
    if (!inside) { if (e.code === 'Enter') enter(); return; }
    if (e.code === 'KeyM') audio.setMuted(!audio.muted);
    if (e.code === 'KeyH') { statsOn = !statsOn; $('stats').style.display = statsOn ? 'block' : 'none'; }
    if (/^Digit[1-6]$/.test(e.code)) goTo(+e.code.slice(5) - 1);
  });
  document.addEventListener('visibilitychange', () => { if (audio.ctx) document.hidden ? audio.ctx.suspend() : audio.ctx.resume(); });

  // ---------- loop ----------
  const clock = new THREE.Clock();
  let t = 0, acc = 0, frames = 0, fps = 60, slow = 0, fast = 0;
  const waterNear = () => { let n = 0; for (let a = 0; a < 6.28; a += 0.785) if (heightAt(player.x + Math.cos(a) * 7, player.z + Math.sin(a) * 7) < 0) n++; return n / 8; };
  const frame = () => {
    const dt = Math.min(clock.getDelta(), 0.05); t += dt;
    if (!inside) player.yaw += dt * 0.035;              // slow pan behind the menu
    player.update(dt);
    windTime.value = t;
    sunView.value.copy(SUN).transformDirection(camera.matrixWorldInverse);
    flora.update(camera.position);
    fauna.update(dt, player);
    atmo.update(t, camera.position, (basePR * scale * innerHeight) / 900);
    audio.update(dt, { waterNear: waterNear(), herdDist: fauna.herd.pos.distanceTo(camera.position) });
    renderer.info.reset();
    if (composer) composer.render(dt); else renderer.render(scene, camera);
    if (placeTimer > 0 && (placeTimer -= dt) <= 0) $('place').style.opacity = 0;

    // keep it smooth: trade resolution for frame rate in small steps
    acc += dt; frames++;
    if (acc >= 1) {
      fps = frames / acc; acc = 0; frames = 0;
      if (fps < 44) { slow++; fast = 0; } else if (fps > 57) { fast++; slow = 0; } else slow = fast = 0;
      if (slow >= 2 && scale > 0.5 && !params.get('auto')) { scale = Math.max(0.5, scale - 0.1); slow = 0; resize(); }
      if (fast >= 6 && scale < 1) { scale = Math.min(1, scale + 0.05); fast = 0; resize(); }
      if (statsOn) $('stats').textContent = `${fps.toFixed(0)} fps · ${level}\n${flora.treeCount} trees and rocks\n${renderer.info.render.calls} draws · ${(renderer.info.render.triangles / 1e6).toFixed(2)}M tris\nresolution ${(scale * 100) | 0}%`;
    }
    requestAnimationFrame(frame);
  };
  await progress(1);
  enterBtn.disabled = false; enterBtn.textContent = 'Enter the forest';
  window.__forest = { player, goTo, renderer, places, fauna, flora, enter,
    snap() { flora.update(camera.position); sunView.value.copy(SUN).transformDirection(camera.matrixWorldInverse); renderer.info.reset(); if (composer) composer.render(0.016); else renderer.render(scene, camera); return { img: canvas.toDataURL('image/jpeg', 0.92), calls: renderer.info.render.calls, tris: renderer.info.render.triangles, fps }; } };
  if (params.get('auto')) enter();
  frame();
}

boot().catch((err) => {
  console.error(err);
  enterBtn.textContent = 'Could not start';
  const f = $('fail'); f.style.display = 'block';
  f.textContent = 'The forest could not start. It needs WebGL 2: try a recent Chrome, Edge, Firefox or Safari with hardware acceleration on. (' + err.message + ')';
});
