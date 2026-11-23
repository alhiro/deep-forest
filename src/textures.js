// Ground photographs are loaded here; the water ripple map is painted on a canvas.
import * as THREE from 'three';
import { fbm, clamp } from './noise.js';

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

function waterHeight() {
  const cv = canvas(256, 256);
  paint(cv, (u, v) => { const l = fbm(u * 6, v * 6, 4, 55, 6); return [l, l, l]; });
  return cv;
}

export function makeTextures() {
  const loader = new THREE.TextureLoader();
  const photo = (url, srgb) => {
    const t = loader.load(url);
    if (srgb) t.colorSpace = THREE.SRGBColorSpace;
    t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 16;
    return t;
  };
  return {
    dirt: photo('models/dirt_color.jpg', true),
    dirtN: photo('models/dirt_normal.jpg', false),
    grassGround: photo('models/grass.jpg', true),
    waterN: normalFrom(waterHeight(), 5),
  };
}
