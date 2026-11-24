// Forest soundscape synthesised live with Web Audio: wind in the canopy, birdsong,
// water near the ponds, hooves when the herd passes, and your own footsteps.
export class ForestAudio {
  constructor(region) { this.ctx = null; this.muted = false; this.insects = region.insects; this.birdBase = region.birdBase; }
  start() {
    if (this.ctx) { this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
    const ctx = (this.ctx = new AC());
    this.master = ctx.createGain(); this.master.gain.value = 0; this.master.connect(ctx.destination);
    this.master.gain.linearRampToValueAtTime(0.9, ctx.currentTime + 3);
    const len = ctx.sampleRate * 4, buf = ctx.createBuffer(1, len, ctx.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    this.noiseBuf = buf;
    const loop = (type, freq, q, gain) => {
      const s = ctx.createBufferSource(); s.buffer = buf; s.loop = true;
      const f = ctx.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q;
      const g = ctx.createGain(); g.gain.value = gain;
      s.connect(f).connect(g).connect(this.master); s.start(0, Math.random() * 3);
      return { f, g };
    };
    this.wind = loop('lowpass', 320, 0.4, 0.16);
    this.leaves = loop('bandpass', 3800, 0.5, 0.035);
    this.water = loop('bandpass', 1300, 0.9, 0);
    if (this.insects > 0) {                 // tropical insect chorus: a high band pulsed quickly
      const ins = loop('bandpass', 5600, 6, 0.011 * this.insects), lfo = ctx.createOscillator(), depth = ctx.createGain();
      lfo.frequency.value = 43; depth.gain.value = 0.009 * this.insects; lfo.connect(depth).connect(ins.g.gain); lfo.start();
    }
    this.hooves = ctx.createGain(); this.hooves.gain.value = 0; this.hooves.connect(this.master);
    this.t = 0; this.nextBird = 2; this.nextHoof = 0;
  }
  setMuted(m) { this.muted = m; if (this.ctx) this.master.gain.setTargetAtTime(m ? 0 : 0.9, this.ctx.currentTime, 0.2); }
  chirp(pan, vol) {
    const ctx = this.ctx, t0 = ctx.currentTime + 0.02, kind = (Math.random() * 4) | 0;
    const p = ctx.createStereoPanner ? ctx.createStereoPanner() : ctx.createGain(); if (p.pan) p.pan.value = pan;
    p.connect(this.master);
    const note = (t, f0, f1, dur, v) => {
      const o = ctx.createOscillator(), g = ctx.createGain(); o.type = 'sine';
      o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(f1, t + dur);
      g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(v * vol, t + dur * 0.2); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(g).connect(p); o.start(t); o.stop(t + dur + 0.02);
    };
    const base = this.birdBase * 0.85 + Math.random() * this.birdBase;
    if (kind === 0) { const n = 3 + ((Math.random() * 5) | 0); for (let i = 0; i < n; i++) note(t0 + i * 0.13, base, base * (1.25 + Math.random() * 0.3), 0.09, 0.05); }
    else if (kind === 1) { for (let i = 0; i < 9; i++) note(t0 + i * 0.055, base * 1.2, base * 0.9, 0.04, 0.04); }
    else if (kind === 2) { note(t0, 780, 760, 0.28, 0.07); note(t0 + 0.42, 620, 600, 0.36, 0.07); }      // cuckoo
    else { note(t0, base, base * 0.7, 0.18, 0.05); note(t0 + 0.24, base * 0.8, base * 1.3, 0.14, 0.05); note(t0 + 0.44, base * 1.1, base * 0.85, 0.2, 0.05); }
  }
  thud(vol, freq, dest) {
    const ctx = this.ctx, t = ctx.currentTime, s = ctx.createBufferSource(); s.buffer = this.noiseBuf;
    const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = freq;
    const g = ctx.createGain(); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.16);
    s.connect(f).connect(g).connect(dest || this.master); s.start(t, Math.random() * 3, 0.2);
  }
  footstep(strength, wet) { if (this.ctx && !this.muted) this.thud(0.1 * strength + 0.04, wet ? 2400 : 620 + Math.random() * 300); }
  update(dt, info) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime; this.t += dt;
    const gust = 0.5 + 0.5 * Math.sin(this.t * 0.23) * Math.sin(this.t * 0.071 + 1);
    this.wind.g.gain.setTargetAtTime(0.09 + gust * 0.13, now, 0.5);
    this.wind.f.frequency.setTargetAtTime(240 + gust * 260, now, 0.5);
    this.leaves.g.gain.setTargetAtTime(0.012 + gust * 0.045, now, 0.4);
    this.water.g.gain.setTargetAtTime(info.waterNear * 0.06, now, 0.6);
    if (this.t > this.nextBird) { this.nextBird = this.t + 0.6 + Math.random() * 3.2; this.chirp(Math.random() * 2 - 1, 0.35 + Math.random() * 0.65); }
    const hv = Math.max(0, 1 - info.herdDist / 70);
    this.hooves.gain.setTargetAtTime(hv * hv, now, 0.2);
    if (hv > 0 && this.t > this.nextHoof) { this.nextHoof = this.t + 0.07 + Math.random() * 0.07; this.thud(0.22, 180 + Math.random() * 120, this.hooves); }
  }
}
