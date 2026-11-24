# Deep Forest

A walkable old forest that runs in the browser: a meadow, a pond, a conifer grove, a ridge and a game trail,
with foxes that bolt when you get close, a herd of wild horses that gallops the trail, birds and butterflies.

Inspired by [Abyssal Garden](https://github.com/Noniv/abyssal-garden). Built with three.js (WebGL 2), so it
runs in Chrome, Edge, Firefox and Safari.

## Six forests and a field guide

Pick a forest on the start screen: Amazon, Sumatra, Congo, North America, Europe or Australia. Each one changes
the terrain seed, tree mix, light, mist, ground colour and sound (`src/regions.js`).

Every forest has six species (`src/species.js`), each with an observation board in the world. Walk up to a board,
or aim at a live animal, and press **E** to open its card: size, habitat, diet, reproduction, behaviour and
conservation status, with a photograph loaded from Wikipedia at run time (`src/guide.js`). **J** opens the field
journal; progress is kept in `localStorage`. The interface text is Indonesian.

Only four species have moving 3D models (red fox, Konik horse, white stork, parrot). The rest are boards.

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
| E / click | observe the animal or board you are aiming at |
| J | field journal |
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
| `src/main.js` | Renderer, detail levels, adaptive resolution, menu, viewpoints, interaction and cards. |
| `src/regions.js`, `src/species.js`, `src/guide.js` | The six forests, the 36 species, and the observation boards. |

Detail levels (Low / Medium / High) change tree density, undergrowth, shadow size and post-processing.
If the frame rate drops below about 45 fps the render resolution is lowered in small steps.

Far trees are drawn as impostors: one camera-facing picture per tree, captured from the real tree at load.

Testing helpers: `?r=amazon|sumatra|kongo|amerikautara|eropa|australia`, `?q=low|medium|high`, `?vp=1..6`, `?auto=1` (skip the menu).

## Credits

- Fox: model by PixelMannen (CC0), rigging and animation by tomkranis (CC BY 4.0), glTF conversion by
  AsoboStudio and scurest (CC BY 4.0), from the Khronos glTF Sample Assets.
- Trees, bark and leaf photographs, ground textures, rock and grass models: [ez-tree](https://github.com/dgreenheck/ez-tree)
  by Daniel Greenheck (MIT).
- Horse, Stork, Parrot: by mirada, from the ro.me project, distributed with the three.js examples.
- [three.js](https://threejs.org) (MIT).

Code: MIT.
