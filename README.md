# Deep Forest

A walkable old forest that runs in the browser: a meadow, a pond, a conifer grove, a ridge and a game trail,
with foxes that bolt when you get close, a herd of wild horses that gallops the trail, birds and butterflies.

Inspired by [Abyssal Garden](https://github.com/Noniv/abyssal-garden). Built with three.js (WebGL 2), so it
runs in Chrome, Edge, Firefox and Safari.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static site in docs/
```

GitHub Pages serves the `docs/` folder of `main`. To publish a change: `npm run build`, commit `docs/`, push.

Live: https://alhiro.github.io/deep-forest/

## Controls

| Key | Action |
| --- | --- |
| W A S D / arrows | walk |
| Mouse | look |
| Shift | run |
| Space | hop |
| 1 – 6 | jump to a place |
| M / H / Esc | mute / stats / menu |

Touch: hold to walk forward, slide to look, second finger to run.

## How it is made

Everything except the four animal models is generated in the browser at load time.

| File | What it does |
| --- | --- |
| `src/terrain.js` | Height function, clearing, pond, the game trail, ground colours. Start here to reshape the world. |
| `src/textures.js` | Paints bark, leaves, fern, grass, ground and rock textures on a 2D canvas. |
| `src/flora.js` | Builds spruce, broadleaf and birch trees, bushes, ferns, grass, flowers, rocks and logs; instancing in culled chunks; wind. |
| `src/atmosphere.js` | Sun and shadows, mist, sky, light shafts, pollen, water. |
| `src/fauna.js` | Fox behaviour, horse herd, birds, butterflies. |
| `src/player.js` | Damped first-person walking, terrain following, trunk collision, touch. |
| `src/audio.js` | Wind, birdsong, water, hooves and footsteps, synthesised with Web Audio. |
| `src/main.js` | Renderer, detail levels, adaptive resolution, menu, viewpoints. |

Detail levels (Low / Medium / High) change tree density, undergrowth, shadow size and post-processing.
If the frame rate drops below about 45 fps the render resolution is lowered in small steps.

Testing helpers: `?q=low|medium|high`, `?vp=1..6`, `?auto=1` (skip the menu).

## Credits

- Fox: model by PixelMannen (CC0), rigging and animation by tomkranis (CC BY 4.0), glTF conversion by
  AsoboStudio and scurest (CC BY 4.0), from the Khronos glTF Sample Assets.
- Horse, Stork, Parrot: by mirada, from the ro.me project, distributed with the three.js examples.
- [three.js](https://threejs.org) (MIT).

Code: MIT.
