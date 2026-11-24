import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { makeTextures } from './textures.js';
import { buildTerrain, heightAt, forestDensity, coniferness, trail, setRegionTerrain, CLEARING, POND } from './terrain.js';
import { buildFlora, windTime, sunView } from './flora.js';
import { buildAtmosphere, setRegionLight, SUN } from './atmosphere.js';
import { buildFauna } from './fauna.js';
import { Player } from './player.js';
import { ForestAudio } from './audio.js';
import { REGIONS, REGION_ORDER } from './regions.js';
import { SPECIES, speciesOf, FIELDS } from './species.js';
import { planSpots, buildBoards, wikiInfo } from './guide.js';

// ---------- detail levels ----------
// lodDist: full-detail trees inside this range. impDist: beyond it a tree is a single picture.
const LEVELS = {
  low:    { treeCell: 7.6, grass: 0.22, ferns: 0.05, bushes: 700,  rocks: 300, logs: 40, shadow: 1024, shadowRange: 36, coverDist: 48, pr: 1,    post: false, lodDist: 0,  impDist: 46, treeFar: 130, segs: 220, shafts: 26, dust: 500,  foxes: 3, horses: 4, birds: 2, butterflies: 30 },
  medium: { treeCell: 6.4, grass: 0.5,  ferns: 0.1,  bushes: 1300, rocks: 450, logs: 60, shadow: 2048, shadowRange: 42, coverDist: 62, pr: 1.25, post: true,  lodDist: 26, impDist: 60, treeFar: 150, segs: 320, shafts: 46, dust: 1200, foxes: 5, horses: 5, birds: 3, butterflies: 60 },
  high:   { treeCell: 5.6, grass: 0.9,  ferns: 0.16, bushes: 2000, rocks: 600, logs: 80, shadow: 2048, shadowRange: 52, coverDist: 80, pr: 1.5,  post: true,  lodDist: 40, impDist: 84, treeFar: 170, segs: 420, shafts: 70, dust: 2200, foxes: 6, horses: 7, birds: 4, butterflies: 90 },
};
const params = new URLSearchParams(location.search);
const store = { get(k) { try { return localStorage.getItem(k); } catch { return null; } }, set(k, v) { try { localStorage.setItem(k, v); } catch {} } };
const coarse = matchMedia('(pointer: coarse)').matches;
const level = LEVELS[params.get('q')] ? params.get('q') : LEVELS[store.get('forest.detail')] ? store.get('forest.detail') : 'low';
const Q = LEVELS[level];
const regionKey = REGIONS[params.get('r')] ? params.get('r') : REGIONS[store.get('forest.region')] ? store.get('forest.region') : 'sumatra';
const region = REGIONS[regionKey];
const species = speciesOf(regionKey);
const found = new Set((() => { try { return JSON.parse(store.get('forest.found') || '[]'); } catch { return []; } })());
const countFound = (key) => speciesOf(key).filter((s) => found.has(s.id)).length;

const $ = (id) => document.getElementById(id);
const el = (tag, cls, text) => { const n = document.createElement(tag); if (cls) n.className = cls; if (text != null) n.textContent = text; return n; };
const canvas = $('view'), enterBtn = $('enter'), bar = $('bar').firstElementChild;
const go = (q, r) => { const p = new URLSearchParams(); p.set('r', r); if (params.get('q')) p.set('q', q); location.search = p.toString(); };
for (const b of $('quality').children) {
  b.setAttribute('aria-pressed', b.dataset.q === level);
  b.onclick = () => { if (b.dataset.q !== level) { store.set('forest.detail', b.dataset.q); params.delete('q'); go(b.dataset.q, regionKey); } };
}
const drawRegions = () => {
  const box = $('regions'); box.textContent = '';
  for (const key of REGION_ORDER) {
    const R = REGIONS[key], b = el('button');
    b.setAttribute('aria-pressed', key === regionKey);
    b.append(el('span', 'k', R.benua), el('span', 'n', R.nama), el('span', 'f', R.blurb), el('span', 'p', `${countFound(key)} / ${speciesOf(key).length} satwa dikenali`));
    b.onclick = () => { if (key !== regionKey) { store.set('forest.region', key); go(level, key); } };
    box.append(b);
  }
};
drawRegions();
$('hudRegion').textContent = region.nama;
const tick = () => new Promise((r) => setTimeout(r, 0));
const progress = async (f, label) => { bar.style.width = f * 100 + '%'; if (label) enterBtn.textContent = label; await tick(); };

async function boot() {
  setRegionTerrain(region); setRegionLight(region);

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
  await progress(0.05, 'Menyiapkan tanah…');
  const tex = makeTextures();
  await progress(0.2, 'Membentuk medan…');
  scene.add(buildTerrain(tex, Q.segs));
  const atmo = buildAtmosphere(scene, tex, Q, region);
  await progress(0.35, 'Menumbuhkan hutan…');
  const spots = planSpots(species);
  const flora = await buildFlora(scene, tex, Q, region, renderer, spots);
  await progress(0.75, 'Membangunkan satwa…');
  const fauna = await buildFauna(scene, Q, region);
  const boards = buildBoards(scene, spots, found);
  const audio = new ForestAudio(region);
  const player = new Player(camera, canvas, flora.collide);
  player.onStep = (s, wet) => audio.footstep(s, wet);

  // ---------- places ----------
  const yawTo = (x, z, tx, tz) => Math.atan2(-(tx - x), -(tz - z));
  const best = (score, rad) => { let b = [0, 0], bs = -1e9; for (let x = -rad; x <= rad; x += 6) for (let z = -rad; z <= rad; z += 6) { if (Math.hypot(x, z) > rad || heightAt(x, z) < 1) continue; const s = score(x, z); if (s > bs) { bs = s; b = [x, z]; } } return b; };
  const grove = best((x, z) => forestDensity(x, z) + coniferness(x, z) - Math.hypot(x, z) / 400, 120);
  const ridge = best((x, z) => heightAt(x, z), 130);
  const tp = trail.getPointAt(0.31), tt = trail.getTangentAt(0.31);
  const b0 = spots.find((s) => s.sp.spot === 'trail') || spots[0];
  const places = [
    { name: 'Padang rumput', x: 26, z: 4, yaw: yawTo(26, 4, CLEARING.x, CLEARING.z) },
    { name: 'Tepi air', x: POND.x + 23, z: POND.z + 13, yaw: yawTo(POND.x + 23, POND.z + 13, POND.x, POND.z) },
    { name: 'Rimba tua', x: grove[0], z: grove[1], yaw: yawTo(grove[0], grove[1], 0, 0) + 2.2 },
    { name: 'Jalur satwa', x: tp.x, z: tp.z, yaw: yawTo(0, 0, tt.x, tt.z) },
    { name: 'Punggung bukit', x: ridge[0], z: ridge[1], yaw: yawTo(ridge[0], ridge[1], 0, 0) },
    { name: 'Papan pengamatan', x: b0.x + Math.sin(b0.yaw) * 4, z: b0.z + Math.cos(b0.yaw) * 4, yaw: yawTo(b0.x + Math.sin(b0.yaw) * 4, b0.z + Math.cos(b0.yaw) * 4, b0.x, b0.z) },
  ];
  let placeTimer = 0;
  const say = (text) => { $('place').textContent = text; $('place').style.opacity = 1; placeTimer = 3.5; };
  const goTo = (i) => { const p = places[i]; if (!p) return; player.place(p.x, p.z, p.yaw, -0.03); say(p.name); };
  goTo(Math.max(0, Math.min(5, (parseInt(params.get('vp')) || 1) - 1)));

  // ---------- field guide ----------
  const sheet = $('sheet'), prompt = $('prompt');
  const interactables = [...boards.items, ...fauna.live];
  const fwd = new THREE.Vector3(), tmp = new THREE.Vector3();
  let inside = false, reading = false, statsOn = false, aim = null;
  const hud = () => { $('hudCount').textContent = `${countFound(regionKey)} / ${species.length}`; };
  hud();
  const pickTarget = () => {
    camera.getWorldDirection(fwd);
    let bestIt = null, bestScore = -1;
    for (const it of interactables) {
      tmp.copy(it.pos); if (it.lift) tmp.y += it.lift;
      tmp.sub(camera.position); const d = tmp.length();
      if (d > it.range || d < 0.01) continue;
      const dot = tmp.dot(fwd) / d;
      if (dot < it.cone) continue;
      const sc = dot - d * 0.002;
      if (sc > bestScore) { bestScore = sc; bestIt = it; }
    }
    return bestIt;
  };
  const chipClass = (s) => (s.includes('(CR)') ? 'chip cr' : s.includes('(EN)') ? 'chip en' : s.includes('(VU)') ? 'chip vu' : 'chip');
  const closeSheet = (relock) => {
    sheet.classList.remove('open'); sheet.textContent = ''; reading = false; player.enabled = inside;
    if (relock && inside && !coarse && canvas.requestPointerLock) { try { const p = canvas.requestPointerLock(); if (p && p.catch) p.catch(() => {}); } catch {} }
  };
  const openSheet = (node) => {
    reading = true; player.enabled = false; player.keys.clear();
    if (document.pointerLockElement) document.exitPointerLock();
    sheet.textContent = ''; sheet.append(node); sheet.classList.add('open');
    const btn = node.querySelector('.close'); if (btn) btn.focus({ preventScroll: true });
    const body = node.querySelector('.body'); if (body) body.scrollTop = 0;
  };
  const openCard = (id) => {
    const sp = { id, ...SPECIES[id] };
    if (!found.has(id)) {
      found.add(id); store.set('forest.found', JSON.stringify([...found])); hud(); drawRegions();
      for (const it of boards.items) if (it.id === id) it.spr.visible = false;
    }
    const card = el('div', 'card'), pic = el('div', 'pic'), body = el('div', 'body');
    const none = el('div', 'none', 'Memuat foto dari Wikipedia…'); pic.append(none);
    body.append(el('h2', '', sp.nama), el('div', 'latin', sp.latin), el('span', chipClass(sp.status), 'Status konservasi: ' + sp.status));
    for (const [key, title] of FIELDS) { body.append(el('h3', '', title), el('p', '', sp[key])); }
    const foot = el('div', 'foot'), src = el('span', '', `${countFound(regionKey)} dari ${species.length} satwa ${region.nama} dikenali`), close = el('button', 'close', 'Tutup (E)');
    close.onclick = () => closeSheet(true);
    foot.append(src, close); body.append(foot);
    card.append(pic, body);
    wikiInfo(sp).then((info) => {
      if (!info.thumb) { none.textContent = 'Foto tidak dapat dimuat. Periksa koneksi internet ke Wikipedia.'; return; }
      const img = new Image(); img.alt = sp.nama; img.src = info.thumb;
      img.onload = () => { none.remove(); pic.prepend(img); if (info.photo && info.photo !== info.thumb) { const big = new Image(); big.onload = () => { img.src = info.photo; }; big.src = info.photo; } };
      const cap = el('small'), a = el('a', '', 'Wikipedia: ' + sp.wiki); a.href = info.page || 'https://en.wikipedia.org/wiki/' + encodeURIComponent(sp.wiki); a.target = '_blank'; a.rel = 'noopener';
      cap.append('Foto dan lisensinya: ', a); pic.append(cap);
    });
    openSheet(card);
  };
  const openBook = () => {
    const card = el('div', 'card list');
    card.append(el('h2', '', 'Buku lapangan'), el('p', 'sub', `${region.hutan} · ${countFound(regionKey)} dari ${species.length} dikenali`));
    const ul = el('ul'), where = { trail: 'di sepanjang jalur', water: 'di tepi air', meadow: 'di padang rumput' };
    for (const sp of species) {
      const li = el('li', found.has(sp.id) ? '' : 'unknown');
      if (found.has(sp.id)) { const b = el('button', '', sp.nama); b.onclick = () => openCard(sp.id); li.append(b, el('i', '', sp.latin)); }
      else li.append(el('b', '', 'Belum ditemukan'));
      li.append(el('span', '', (sp.live ? 'satwa hidup, juga papan ' : 'papan ') + where[sp.spot]));
      ul.append(li);
    }
    const close = el('button', 'close', 'Tutup (J)'); close.onclick = () => closeSheet(true);
    card.append(ul, close);
    openSheet(card);
  };
  const interact = () => { if (reading) closeSheet(true); else if (aim) openCard(aim.id); };
  prompt.onclick = interact;
  sheet.addEventListener('click', (e) => { if (e.target === sheet) closeSheet(true); });

  // ---------- menu / input ----------
  const lock = () => { if (!coarse && canvas.requestPointerLock) { try { const p = canvas.requestPointerLock(); if (p && p.catch) p.catch(() => {}); } catch {} } };
  const enter = () => {
    inside = true; player.enabled = true; document.body.classList.remove('menu'); document.body.classList.add('play');
    audio.start(); lock(); say(region.hutan);
  };
  const leave = () => { inside = false; player.enabled = false; document.body.classList.add('menu'); document.body.classList.remove('play'); enterBtn.textContent = 'Lanjut menjelajah'; };
  enterBtn.onclick = enter;
  canvas.addEventListener('click', () => { if (inside && !reading && !coarse && document.pointerLockElement !== canvas) lock(); });
  document.addEventListener('mousedown', () => { if (inside && !reading && aim && document.pointerLockElement === canvas) openCard(aim.id); });
  document.addEventListener('pointerlockchange', () => { if (!document.pointerLockElement && inside && !reading && !params.get('auto')) leave(); });
  addEventListener('keydown', (e) => {
    if (reading) { if (e.code === 'KeyE' || e.code === 'KeyJ' || e.code === 'Escape' || e.code === 'Enter') { e.preventDefault(); closeSheet(e.code !== 'Escape'); } return; }
    if (e.code === 'Escape' && inside && !document.pointerLockElement) leave();
    if (!inside) { if (e.code === 'Enter') enter(); return; }
    if (e.code === 'KeyE') interact();
    if (e.code === 'KeyJ') openBook();
    if (e.code === 'KeyM') audio.setMuted(!audio.muted);
    if (e.code === 'KeyH') { statsOn = !statsOn; $('stats').style.display = statsOn ? 'block' : 'none'; }
    if (/^Digit[1-6]$/.test(e.code)) goTo(+e.code.slice(5) - 1);
  });
  document.addEventListener('visibilitychange', () => { if (audio.ctx) document.hidden ? audio.ctx.suspend() : audio.ctx.resume(); });

  // ---------- loop ----------
  const clock = new THREE.Clock();
  let t = 0, acc = 0, frames = 0, fps = 60, slow = 0, fast = 0, lastAim = null;
  const waterNear = () => { let n = 0; for (let a = 0; a < 6.28; a += 0.785) if (heightAt(player.x + Math.cos(a) * 7, player.z + Math.sin(a) * 7) < 0) n++; return n / 8; };
  const frame = () => {
    const dt = Math.min(clock.getDelta(), 0.05); t += dt;
    if (!inside) player.yaw += dt * 0.035;              // slow pan behind the menu
    player.update(dt);
    windTime.value = t;
    sunView.value.copy(SUN).transformDirection(camera.matrixWorldInverse);
    flora.update(camera.position);
    fauna.update(dt, player);
    boards.update(t);
    atmo.update(t, camera.position, (basePR * scale * innerHeight) / 900);
    audio.update(dt, { waterNear: waterNear(), herdDist: fauna.hasHerd ? fauna.herd.pos.distanceTo(camera.position) : 1e9 });
    renderer.info.reset();
    if (composer) composer.render(dt); else renderer.render(scene, camera);
    if (placeTimer > 0 && (placeTimer -= dt) <= 0) $('place').style.opacity = 0;

    aim = inside && !reading ? pickTarget() : null;
    if (aim !== lastAim) {
      lastAim = aim;
      if (aim) { prompt.textContent = ''; const k = el('kbd', '', coarse ? 'Ketuk' : 'E'); prompt.append(k, (found.has(aim.id) ? 'Amati lagi: ' : 'Amati: ') + SPECIES[aim.id].nama); prompt.style.display = 'block'; }
      else prompt.style.display = 'none';
    }

    // keep it smooth: trade resolution for frame rate in small steps
    acc += dt; frames++;
    if (acc >= 1) {
      fps = frames / acc; acc = 0; frames = 0;
      if (fps < 44) { slow++; fast = 0; } else if (fps > 57) { fast++; slow = 0; } else slow = fast = 0;
      if (slow >= 2 && scale > 0.5 && !params.get('auto')) { scale = Math.max(0.5, scale - 0.1); slow = 0; resize(); }
      if (fast >= 6 && scale < 1) { scale = Math.min(1, scale + 0.05); fast = 0; resize(); }
      if (statsOn) $('stats').textContent = `${fps.toFixed(0)} fps · ${level}\n${renderer.info.render.calls} draw · ${(renderer.info.render.triangles / 1e6).toFixed(2)} jt segitiga\nresolusi ${(scale * 100) | 0}%`;
    }
    requestAnimationFrame(frame);
  };
  await progress(1);
  enterBtn.disabled = false; enterBtn.textContent = 'Masuk ke hutan ' + region.nama;
  window.__forest = { player, goTo, renderer, places, fauna, flora, boards, spots, enter, openCard, openBook, species,
    snap() { flora.update(camera.position); sunView.value.copy(SUN).transformDirection(camera.matrixWorldInverse); renderer.info.reset(); if (composer) composer.render(0.016); else renderer.render(scene, camera); return { img: canvas.toDataURL('image/jpeg', 0.92), calls: renderer.info.render.calls, tris: renderer.info.render.triangles, fps }; } };
  if (params.get('auto')) enter();
  frame();
}

boot().catch((err) => {
  console.error(err);
  enterBtn.textContent = 'Tidak dapat dimulai';
  const f = $('fail'); f.style.display = 'block';
  f.textContent = 'Hutan tidak dapat dimulai. Dibutuhkan WebGL 2: coba Chrome, Edge, Firefox, atau Safari terbaru dengan akselerasi hardware aktif. (' + err.message + ')';
});
