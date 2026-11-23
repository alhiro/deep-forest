// First-person walker: damped look and movement, terrain following, trunk collision.
import { heightAt, PLAY_RADIUS } from './terrain.js';

const EYE = 1.68;
const damp = (cur, target, rate, dt) => cur + (target - cur) * (1 - Math.exp(-rate * dt));

export class Player {
  constructor(camera, dom, collide) {
    this.camera = camera; this.dom = dom; this.collide = collide;
    this.x = 0; this.z = 0; this.y = 0; this.vx = 0; this.vz = 0; this.vy = 0; this.air = false;
    this.yaw = 0; this.pitch = 0; this.yawS = 0; this.pitchS = 0;
    this.keys = new Set(); this.enabled = false; this.step = 0; this.speed = 0; this.onStep = null;
    this.touch = { ids: [], lx: 0, ly: 0 };
    addEventListener('keydown', (e) => { this.keys.add(e.code); if (e.code === 'Space') e.preventDefault(); });
    addEventListener('keyup', (e) => this.keys.delete(e.code));
    addEventListener('blur', () => this.keys.clear());
    document.addEventListener('mousemove', (e) => {
      if (document.pointerLockElement !== dom) return;
      this.look(e.movementX * 0.0021, e.movementY * 0.0021);
    });
    dom.addEventListener('touchstart', (e) => {
      e.preventDefault();
      for (const t of e.changedTouches) { this.touch.ids.push(t.identifier); if (this.touch.ids.length === 1) { this.touch.lx = t.clientX; this.touch.ly = t.clientY; } }
    }, { passive: false });
    dom.addEventListener('touchmove', (e) => {
      e.preventDefault();
      for (const t of e.changedTouches) if (t.identifier === this.touch.ids[0]) {
        this.look((t.clientX - this.touch.lx) * 0.005, (t.clientY - this.touch.ly) * 0.004);
        this.touch.lx = t.clientX; this.touch.ly = t.clientY;
      }
    }, { passive: false });
    const end = (e) => { for (const t of e.changedTouches) this.touch.ids = this.touch.ids.filter((i) => i !== t.identifier); };
    dom.addEventListener('touchend', end); dom.addEventListener('touchcancel', end);
  }
  look(dx, dy) {
    this.yaw -= dx;
    this.pitch = Math.max(-1.45, Math.min(1.45, this.pitch - dy));
  }
  place(x, z, yaw, pitch = 0) {
    this.x = x; this.z = z; this.y = Math.max(heightAt(x, z), -0.9); this.vx = this.vz = this.vy = 0;
    this.yaw = this.yawS = yaw; this.pitch = this.pitchS = pitch;
    this.apply(0);
  }
  update(dt) {
    const k = this.keys, t = this.touch.ids.length;
    let f = 0, s = 0;
    if (this.enabled) {
      f = (k.has('KeyW') || k.has('ArrowUp') ? 1 : 0) - (k.has('KeyS') || k.has('ArrowDown') ? 1 : 0) + (t > 0 ? 1 : 0);
      s = (k.has('KeyD') || k.has('ArrowRight') ? 1 : 0) - (k.has('KeyA') || k.has('ArrowLeft') ? 1 : 0);
    }
    const run = k.has('ShiftLeft') || k.has('ShiftRight') || t > 1;
    const ground = heightAt(this.x, this.z);
    let max = run ? 7.6 : 3.3;
    if (ground < -0.25) max *= 0.5;                         // wading
    const l = Math.hypot(f, s) || 1, sn = Math.sin(this.yawS), cs = Math.cos(this.yawS);
    const tx = ((-sn * f + cs * s) / l) * max, tz = ((-cs * f - sn * s) / l) * max;
    const rate = f || s ? 6 : 8;
    this.vx = damp(this.vx, tx, rate, dt); this.vz = damp(this.vz, tz, rate, dt);
    this.x += this.vx * dt; this.z += this.vz * dt;
    this.collide(this);
    const d = Math.hypot(this.x, this.z);
    if (d > PLAY_RADIUS) { this.x *= PLAY_RADIUS / d; this.z *= PLAY_RADIUS / d; }
    // vertical: smooth terrain following plus a small hop
    const g = Math.max(heightAt(this.x, this.z), -0.9);
    if (this.enabled && k.has('Space') && !this.air) { this.vy = 4.6; this.air = true; }
    if (this.air) {
      this.vy -= 13 * dt; this.y += this.vy * dt;
      if (this.y <= g) { this.y = g; this.air = false; this.vy = 0; if (this.onStep) this.onStep(1.4, g < 0.05); }
    } else this.y = damp(this.y, g, 14, dt);
    this.speed = Math.hypot(this.vx, this.vz);
    const before = Math.floor(this.step / Math.PI);
    this.step += this.speed * dt * (run ? 1.45 : 2.05);
    if (!this.air && this.speed > 0.6 && Math.floor(this.step / Math.PI) !== before && this.onStep) this.onStep(Math.min(1, this.speed / 5), g < 0.05);
    this.apply(dt);
  }
  apply(dt) {
    this.yawS = dt ? damp(this.yawS, this.yaw, 22, dt) : this.yaw;
    this.pitchS = dt ? damp(this.pitchS, this.pitch, 22, dt) : this.pitch;
    const amt = Math.min(1, this.speed / 3.3) * (this.air ? 0 : 1);
    const bobY = Math.sin(this.step * 2) * 0.028 * amt, bobX = Math.cos(this.step) * 0.02 * amt;
    const cs = Math.cos(this.yawS), sn = Math.sin(this.yawS);
    this.camera.position.set(this.x + cs * bobX, this.y + EYE + bobY, this.z - sn * bobX);
    this.camera.rotation.set(this.pitchS, this.yawS, bobX * 0.25, 'YXZ');
  }
}
