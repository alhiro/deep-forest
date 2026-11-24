// Observation boards: one per species, standing where that animal would be looked for.
// Each carries a real photograph fetched from Wikipedia at run time.
import * as THREE from 'three';
import { heightAt, trail, CLEARING, POND } from './terrain.js';

const cache = new Map();
// Photograph and article link for a species, from the Wikipedia summary API (CORS-enabled).
export function wikiInfo(sp) {
  if (!cache.has(sp.id)) {
    const url = 'https://en.wikipedia.org/api/rest_v1/page/summary/' + encodeURIComponent(sp.wiki.replace(/ /g, '_'));
    cache.set(sp.id, fetch(url).then((r) => (r.ok ? r.json() : null)).then((j) => (j ? {
      thumb: j.thumbnail && j.thumbnail.source,
      photo: (j.originalimage && j.originalimage.source) || (j.thumbnail && j.thumbnail.source),
      page: j.content_urls && j.content_urls.desktop && j.content_urls.desktop.page,
    } : {})).catch(() => ({})));
  }
  return cache.get(sp.id);
}

// Decide where each board stands and which way it faces.
export function planSpots(list) {
  const us = [0.14, 0.27, 0.4, 0.55, 0.7, 0.86], out = [];
  let ti = 0, wi = 0, mi = 0;
  for (const sp of list) {
    let x, z, fx, fz;
    if (sp.spot === 'water') {
      const a = 0.7 + wi++ * 2.1; let d = POND.r * 0.6;
      while (d < POND.r + 22 && heightAt(POND.x + Math.cos(a) * d, POND.z + Math.sin(a) * d) < 0.5) d += 0.5;
      d += 1.2; x = POND.x + Math.cos(a) * d; z = POND.z + Math.sin(a) * d; fx = Math.cos(a); fz = Math.sin(a);
    } else if (sp.spot === 'meadow') {
      const a = 0.9 + mi++ * 2.3, d = CLEARING.r * 0.7;
      x = CLEARING.x + Math.cos(a) * d; z = CLEARING.z + Math.sin(a) * d; fx = -Math.cos(a); fz = -Math.sin(a);
    } else {
      const u = us[ti % us.length], p = trail.getPointAt(u), t = trail.getTangentAt(u), side = ti++ % 2 ? 4.4 : -4.4;
      x = p.x - t.z * side; z = p.z + t.x * side; fx = p.x - x; fz = p.z - z;
      const l = Math.hypot(fx, fz); fx /= l; fz /= l;
    }
    out.push({ sp, x, z, y: heightAt(x, z), yaw: Math.atan2(fx, fz) });
  }
  return out;
}

function labelTexture(sp) {
  const c = document.createElement('canvas'); c.width = 512; c.height = 112;
  const g = c.getContext('2d');
  g.fillStyle = '#f3ecd8'; g.fillRect(0, 0, 512, 112);
  g.fillStyle = '#23301c'; g.font = '600 40px Georgia, serif'; g.textBaseline = 'middle';
  let name = sp.nama; while (g.measureText(name).width > 480 && name.length > 4) name = name.slice(0, -2) + '…';
  g.fillText(name, 18, 40);
  g.fillStyle = '#5c6a4c'; g.font = 'italic 26px Georgia, serif';
  g.fillText(sp.latin, 18, 84);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
  return t;
}
function glowTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 64;
  const g = c.getContext('2d'), r = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  r.addColorStop(0, 'rgba(255,240,190,1)'); r.addColorStop(0.3, 'rgba(255,220,140,0.5)'); r.addColorStop(1, 'rgba(255,210,120,0)');
  g.fillStyle = r; g.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
}

export function buildBoards(scene, spots, found) {
  const wood = new THREE.MeshLambertMaterial({ color: 0x5a4330 }), frame = new THREE.MeshLambertMaterial({ color: 0x3e2f22 });
  const post = new THREE.CylinderGeometry(0.055, 0.07, 1.5, 8).translate(0, 0.75, 0);
  const panel = new THREE.BoxGeometry(1.24, 0.98, 0.06), photoGeo = new THREE.PlaneGeometry(1.12, 0.63), labelGeo = new THREE.PlaneGeometry(1.12, 0.245);
  const glow = glowTexture(), loader = new THREE.TextureLoader(); loader.setCrossOrigin('anonymous');
  const items = [];
  for (const s of spots) {
    const g = new THREE.Group(); g.position.set(s.x, s.y - 0.05, s.z); g.rotation.y = s.yaw;
    const p = new THREE.Mesh(post, wood); p.castShadow = true; g.add(p);
    const head = new THREE.Group(); head.position.y = 1.62; head.rotation.x = -0.2; g.add(head);
    const b = new THREE.Mesh(panel, frame); b.castShadow = true; head.add(b);
    const photoMat = new THREE.MeshBasicMaterial({ color: 0x6f7a62 });
    const photo = new THREE.Mesh(photoGeo, photoMat); photo.position.set(0, 0.135, 0.032); head.add(photo);
    const label = new THREE.Mesh(labelGeo, new THREE.MeshBasicMaterial({ map: labelTexture(s.sp), color: 0xd8d8d8 })); label.position.set(0, -0.335, 0.032); head.add(label);
    const spr = new THREE.Sprite(new THREE.SpriteMaterial({ map: glow, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
    spr.position.y = 2.75; spr.scale.setScalar(0.85); g.add(spr);
    scene.add(g);
    wikiInfo(s.sp).then((info) => {
      if (!info.thumb) return;
      loader.load(info.thumb, (t) => {
        t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
        const ia = t.image.width / t.image.height, pa = 1.12 / 0.63;         // crop to fill the frame
        if (ia > pa) { t.repeat.x = pa / ia; t.offset.x = (1 - t.repeat.x) / 2; } else { t.repeat.y = ia / pa; t.offset.y = (1 - t.repeat.y) * 0.62; }
        photoMat.map = t; photoMat.color.set(0xd0d0d0); photoMat.needsUpdate = true;
      }, undefined, () => {});
    });
    const item = { id: s.sp.id, range: 7.5, cone: 0.72, pos: new THREE.Vector3(s.x, s.y + 1.6, s.z), x: s.x, z: s.z, spr };
    spr.visible = !found.has(item.id);
    items.push(item);
  }
  return {
    items,
    update(t) { for (const it of items) if (it.spr.visible) { it.spr.position.y = 2.75 + Math.sin(t * 1.6 + it.x) * 0.12; it.spr.material.opacity = 0.7 + 0.3 * Math.sin(t * 2.3 + it.z); } },
  };
}
