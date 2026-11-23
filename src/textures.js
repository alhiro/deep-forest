// Every texture in the forest is painted here at load time on a 2D canvas.
import * as THREE from 'three';
import { fbm, vnoise, rng, clamp } from './noise.js';

function canvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  c.getContext('2d', { willReadFrequently: true });
  return c;
}

// Canvas -> DataTexture. For cut-out textures, `fill` replaces the colour of fully
// transparent pixels so mipmaps do not bleed black fringes around the leaves.
function toTexture(cv, { srgb = true, fill = null, aniso = 8 } = {}) {
  const w = cv.width, h = cv.height;
  const src = cv.getContext('2d').getImageData(0, 0, w, h).data;
  const out = new Uint8Array(w * h * 4);
  for (let y = 0; y < h; y++) {
    const so = y * w * 4, d0 = (h - 1 - y) * w * 4;
    for (let x = 0; x < w * 4; x += 4) {
      const a = src[so + x + 3];
      if (fill && a < 12) { out[d0 + x] = fill[0]; out[d0 + x + 1] = fill[1]; out[d0 + x + 2] = fill[2]; out[d0 + x + 3] = 0; }
      else { out[d0 + x] = src[so + x]; out[d0 + x + 1] = src[so + x + 1]; out[d0 + x + 2] = src[so + x + 2]; out[d0 + x + 3] = fill ? a : 255; }
    }
  }
  const t = new THREE.DataTexture(out, w, h, THREE.RGBAFormat);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.generateMipmaps = true;
  t.minFilter = THREE.LinearMipmapLinearFilter;
  t.magFilter = THREE.LinearFilter;
  t.anisotropy = aniso;
  t.needsUpdate = true;
  return t;
}

// Tangent-space normal map from the brightness of a (tiling) canvas.
function normalFrom(cv, strength) {
  const w = cv.width, h = cv.height;
  const src = cv.getContext('2d').getImageData(0, 0, w, h).data;
  const L = (x, y) => { const i = (((y + h) % h) * w + ((x + w) % w)) * 4; return (src[i] + src[i + 1] + src[i + 2]) / 765; };
  const out = new Uint8Array(w * h * 4);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const dx = (L(x + 1, y) - L(x - 1, y)) * strength, dy = (L(x, y + 1) - L(x, y - 1)) * strength;
    const il = 1 / Math.hypot(dx, dy, 1), o = ((h - 1 - y) * w + x) * 4;
    out[o] = (-dx * il * 0.5 + 0.5) * 255; out[o + 1] = (dy * il * 0.5 + 0.5) * 255; out[o + 2] = (il * 0.5 + 0.5) * 255; out[o + 3] = 255;
  }
  const t = new THREE.DataTexture(out, w, h, THREE.RGBAFormat);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.generateMipmaps = true; t.minFilter = THREE.LinearMipmapLinearFilter; t.magFilter = THREE.LinearFilter;
  t.anisotropy = 8; t.needsUpdate = true;
  return t;
}

function paint(cv, fn) {
  const ctx = cv.getContext('2d'), w = cv.width, h = cv.height;
  const img = ctx.createImageData(w, h), d = img.data;
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const c = fn(x / w, y / h), i = (y * w + x) * 4;
    d[i] = clamp(c[0], 0, 1) * 255; d[i + 1] = clamp(c[1], 0, 1) * 255; d[i + 2] = clamp(c[2], 0, 1) * 255; d[i + 3] = 255;
  }
  ctx.putImageData(img, 0, 0);
  return ctx;
}

function leafPath(ctx, len, wid) {
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(wid, len * 0.25, wid * 0.8, len * 0.75, 0, len);
  ctx.bezierCurveTo(-wid * 0.8, len * 0.75, -wid, len * 0.25, 0, 0);
}

function ground(S) {
  const cv = canvas(S, S);
  const ctx = paint(cv, (u, v) => {
    const a = fbm(u * 8, v * 8, 5, 3, 8), b = fbm(u * 32, v * 32, 3, 9, 32);
    const l = 0.36 + a * 0.5 + (b - 0.5) * 0.34;
    return [l, l * 0.95, l * 0.86];
  });
  const r = rng(77);
  const pal = ['#d0a674', '#94714f', '#e2c48e', '#6d5642', '#b98450', '#4d4034', '#a89a6c', '#c7783c'];
  for (let i = 0; i < 2600; i++) {
    const x = r() * S, y = r() * S, len = 8 + r() * 13, wid = len * (0.2 + r() * 0.2), rot = r() * 6.283;
    ctx.fillStyle = pal[(r() * pal.length) | 0];
    ctx.globalAlpha = 0.5 + r() * 0.45;
    for (let ox = -S; ox <= S; ox += S) for (let oy = -S; oy <= S; oy += S) {
      if (x + ox < -30 || x + ox > S + 30 || y + oy < -30 || y + oy > S + 30) continue;
      ctx.save(); ctx.translate(x + ox, y + oy); ctx.rotate(rot);
      leafPath(ctx, len, wid); ctx.fill();
      ctx.strokeStyle = 'rgba(40,30,20,0.35)'; ctx.lineWidth = 0.7; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, len); ctx.stroke();
      ctx.restore();
    }
  }
  ctx.globalAlpha = 0.8; ctx.lineCap = 'round';
  for (let i = 0; i < 160; i++) {       // twigs and needles
    const x = r() * S, y = r() * S, a = r() * 6.283, l = 6 + r() * 26;
    ctx.strokeStyle = r() < 0.5 ? '#54463a' : '#7d6a55'; ctx.lineWidth = 0.8 + r() * 1.6;
    ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l); ctx.stroke();
  }
  ctx.globalAlpha = 1;
  return cv;
}

function bark(kind) {
  const W = 256, H = 512, cv = canvas(W, H);
  const ctx = paint(cv, (u, v) => {
    if (kind === 'birch') {
      const n = fbm(u * 4, v * 8, 4, 41, 4);
      const l = 0.78 + (n - 0.5) * 0.28;
      return [l, l * 0.985, l * 0.95];
    }
    const warp = fbm(u * 4, v * 4, 3, 5, 4);
    const k = kind === 'spruce' ? 13 : 10;
    const ridge = Math.pow(Math.abs(Math.sin((u * k + warp * 1.1 + Math.sin(v * 6.283) * 0.05) * Math.PI)), 0.55);
    const fine = fbm(u * 16, v * 48, 3, 13, 16);
    const plates = kind === 'spruce' ? 0.75 + 0.25 * Math.sin((v * 22 + warp * 9) * Math.PI) : 1;
    let l = (0.2 + 0.34 * ridge * plates) * (0.7 + 0.55 * fine);
    const m = Math.max(0, fbm(u * 4, v * 4, 3, 71, 4) - 0.56) * 4.5;   // lichen / moss patches
    const base = kind === 'spruce' ? [l * 1.0, l * 0.8, l * 0.66] : [l * 0.92, l * 0.84, l * 0.72];
    return [base[0] * (1 - m * 0.45) + 0.2 * m * 0.45, base[1] * (1 - m * 0.2) + 0.34 * m * 0.5, base[2] * (1 - m * 0.5) + 0.12 * m * 0.4];
  });
  if (kind === 'birch') {
    const r = rng(5);
    for (let i = 0; i < 260; i++) {
      const x = r() * W, y = r() * H, l = 5 + r() * 26;
      ctx.strokeStyle = `rgba(35,30,28,${0.35 + r() * 0.5})`; ctx.lineWidth = 0.8 + r() * 2;
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + l, y + (r() - 0.5) * 2); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(x - W, y); ctx.lineTo(x - W + l, y); ctx.stroke();
    }
    for (let i = 0; i < 14; i++) {
      const x = r() * W, y = r() * H;
      ctx.fillStyle = 'rgba(28,24,22,0.85)';
      ctx.beginPath(); ctx.ellipse(x, y, 10 + r() * 22, 5 + r() * 9, 0, 0, 6.283); ctx.fill();
    }
  }
  return cv;
}

function rock() {
  const cv = canvas(256, 256);
  paint(cv, (u, v) => {
    const a = fbm(u * 4, v * 4, 5, 91, 4), b = fbm(u * 24, v * 24, 3, 93, 24);
    const crack = Math.pow(1 - Math.abs(fbm(u * 6, v * 6, 4, 97, 6) - 0.5) * 2, 10);
    const l = 0.32 + a * 0.4 + (b - 0.5) * 0.18 - crack * 0.25;
    return [l, l * 0.985, l * 0.96];
  });
  return cv;
}

function leafCluster(kind) {
  const S = 256, cv = canvas(S, S), ctx = cv.getContext('2d'), r = rng(kind === 'birch' ? 31 : 17);
  const n = kind === 'birch' ? 210 : 190;
  const leaves = [];
  for (let i = 0; i < n; i++) {
    const a = r() * 6.283, d = Math.sqrt(r()) * 104;
    leaves.push({ x: 128 + Math.cos(a) * d, y: 128 + Math.sin(a) * d, rot: a - Math.PI / 2 + (r() - 0.5) * 2.2, l: r() });
  }
  leaves.sort((p, q) => p.l - q.l);
  for (const lf of leaves) {
    const len = kind === 'birch' ? 13 + r() * 8 : 17 + r() * 12, wid = len * (kind === 'birch' ? 0.42 : 0.36);
    const hue = kind === 'birch' ? 72 + r() * 20 : 88 + r() * 28;
    const lig = (kind === 'birch' ? 20 : 11) + lf.l * 20;
    ctx.save(); ctx.translate(lf.x, lf.y); ctx.rotate(lf.rot);
    ctx.fillStyle = `hsl(${hue},${36 + r() * 16}%,${lig}%)`;
    leafPath(ctx, len, wid); ctx.fill();
    ctx.strokeStyle = `hsla(${hue},40%,${lig + 14}%,0.7)`; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(0, 1); ctx.lineTo(0, len - 2); ctx.stroke();
    ctx.restore();
  }
  return cv;
}

function coniferBranch() {
  const S = 256, cv = canvas(S, S), ctx = cv.getContext('2d'), r = rng(23);
  ctx.lineCap = 'round';
  const needles = (x0, y0, x1, y1, nl, count) => {
    const dx = x1 - x0, dy = y1 - y0, ang = Math.atan2(dy, dx);
    for (let i = 0; i < count; i++) {
      const t = r(), px = x0 + dx * t, py = y0 + dy * t, side = r() < 0.5 ? -1 : 1;
      const a = ang + side * (0.75 + r() * 0.5), l = nl * (0.6 + r() * 0.6) * (1 - t * 0.4);
      ctx.strokeStyle = `hsl(${105 + r() * 40},${28 + r() * 22}%,${9 + r() * 16}%)`;
      ctx.lineWidth = 1.1 + r() * 0.9;
      ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(px + Math.cos(a) * l, py + Math.sin(a) * l); ctx.stroke();
    }
  };
  for (let i = 0; i < 17; i++) {
    const t = i / 17, y = 248 - t * 228;
    for (const s of [-1, 1]) {
      const l = (12 + 100 * Math.sin(Math.min(1, t * 1.25 + 0.12) * Math.PI) * (1 - t * 0.35)) * (0.8 + r() * 0.3);
      const a = -Math.PI / 2 + s * (0.85 + r() * 0.3 - t * 0.25);
      const x1 = 128 + Math.cos(a) * l, y1 = y + Math.sin(a) * l + l * 0.12;
      needles(128, y, x1, y1, 11, Math.round(l * 2.6));
      ctx.strokeStyle = '#3a2a1c'; ctx.lineWidth = 1.6;
      ctx.beginPath(); ctx.moveTo(128, y); ctx.lineTo(x1, y1); ctx.stroke();
    }
  }
  needles(128, 250, 128, 12, 12, 320);
  ctx.strokeStyle = '#3a2a1c'; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(128, 256); ctx.lineTo(128, 18); ctx.stroke();
  return cv;
}

function fern() {
  const W = 128, H = 256, cv = canvas(W, H), ctx = cv.getContext('2d'), r = rng(3);
  for (let i = 0; i < 30; i++) {
    const t = i / 30, y = 250 - t * 238;
    const l = 58 * Math.pow(Math.sin(Math.min(1, t * 0.9 + 0.1) * Math.PI), 0.7) * (1 - t * 0.25) + 3;
    for (const s of [-1, 1]) {
      ctx.save(); ctx.translate(64, y); ctx.rotate(s * (1.15 - t * 0.35) + Math.PI);
      ctx.fillStyle = `hsl(${92 + r() * 22},${48 + r() * 14}%,${20 + r() * 14 + t * 8}%)`;
      leafPath(ctx, l, 5.2); ctx.fill();
      ctx.restore();
    }
  }
  ctx.strokeStyle = '#4c5a22'; ctx.lineWidth = 2.2;
  ctx.beginPath(); ctx.moveTo(64, 256); ctx.lineTo(64, 12); ctx.stroke();
  return cv;
}

function grassTuft() {
  const S = 128, cv = canvas(S, S), ctx = cv.getContext('2d'), r = rng(8);
  for (let i = 0; i < 60; i++) {
    const bx = 34 + r() * 60, tx = bx + (r() - 0.5) * 78, ty = 6 + r() * 70, w = 2 + r() * 2.4;
    const g = ctx.createLinearGradient(0, S, 0, ty);
    const hue = 76 + r() * 28, lig = 15 + r() * 14;
    g.addColorStop(0, `hsl(${hue + 8},45%,${lig * 0.55}%)`); g.addColorStop(1, `hsl(${hue},44%,${lig + 13}%)`);
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.moveTo(bx - w, S);
    ctx.quadraticCurveTo(bx + (tx - bx) * 0.15, (S + ty) / 2, tx, ty);
    ctx.quadraticCurveTo(bx + (tx - bx) * 0.3, (S + ty) / 2, bx + w, S);
    ctx.fill();
  }
  return cv;
}

function waterHeight() {
  const cv = canvas(256, 256);
  paint(cv, (u, v) => { const l = fbm(u * 6, v * 6, 4, 55, 6); return [l, l, l]; });
  return cv;
}

export function makeTextures() {
  const g = ground(1024);
  const out = { ground: toTexture(g, { aniso: 16 }), groundN: normalFrom(g, 2.2) };
  for (const k of ['spruce', 'oak', 'birch']) {
    const b = bark(k);
    out['bark_' + k] = toTexture(b); out['barkN_' + k] = normalFrom(b, k === 'birch' ? 1.2 : 2.6);
  }
  const rk = rock();
  out.rock = toTexture(rk); out.rockN = normalFrom(rk, 3);
  out.leaves = toTexture(leafCluster('oak'), { fill: [44, 70, 22], aniso: 4 });
  out.leavesBirch = toTexture(leafCluster('birch'), { fill: [90, 120, 40], aniso: 4 });
  out.branch = toTexture(coniferBranch(), { fill: [26, 44, 24], aniso: 4 });
  out.fern = toTexture(fern(), { fill: [54, 88, 30], aniso: 4 });
  out.grass = toTexture(grassTuft(), { fill: [70, 100, 34], aniso: 4 });
  for (const k of ['leaves', 'leavesBirch', 'branch', 'fern', 'grass']) out[k].wrapS = out[k].wrapT = THREE.ClampToEdgeWrapping;
  out.waterN = normalFrom(waterHeight(), 5);
  return out;
}
