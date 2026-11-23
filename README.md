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

Terrain, placement, sky, water, light and sound are generated in the browser at load time. Trees are grown at load
with the ez-tree generator and textured with photographs; rocks and the grass tuft are small models.

| File | What it does |
| --- | --- |
| `src/terrain.js` | Height function, clearing, pond, the game trail, ground colours. Start here to reshape the world. |
| `src/textures.js` | Loads the ground photographs and paints the water ripple map. |
| `src/eztree/` | Tree generator (MIT), trimmed to the textures the forest uses. |
| `src/flora.js` | Grows oak, ash, pine and aspen/birch shapes at two levels of detail, plus bushes, seedlings, grass, flowers, rocks and logs; instancing in culled chunks; wind. |
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
- Trees, bark and leaf photographs, ground textures, rock and grass models: [ez-tree](https://github.com/dgreenheck/ez-tree)
  by Daniel Greenheck (MIT).
- Horse, Stork, Parrot: by mirada, from the ro.me project, distributed with the three.js examples.
- [three.js](https://threejs.org) (MIT).

Code: MIT.
