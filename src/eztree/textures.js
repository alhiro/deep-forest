// Trimmed for Deep Forest: only the bark and leaf photographs the forest uses,
// loaded as separate files instead of being inlined. Original: ez-tree (MIT).
import * as THREE from 'three';
import birchColor from './birch_color_1k.jpg';
import birchNormal from './birch_normal_1k.jpg';
import oakColor from './oak_color_1k.jpg';
import oakNormal from './oak_normal_1k.jpg';
import pineColor from './pine_color_1k.jpg';
import pineNormal from './pine_normal_1k.jpg';
import ashLeaves from './ash_color.png';
import aspenLeaves from './aspen_color.png';
import oakLeaves from './oak_color.png';
import pineLeaves from './pine_color.png';

const loader = new THREE.TextureLoader();
const bark = {
  birch: { color: birchColor, normal: birchNormal },
  oak: { color: oakColor, normal: oakNormal },
  pine: { color: pineColor, normal: pineNormal },
};
const leaves = { ash: ashLeaves, aspen: aspenLeaves, oak: oakLeaves, pine: pineLeaves };
const cache = new Map();

function load(url, srgb, repeat) {
  if (!cache.has(url)) {
    const t = loader.load(url);
    if (srgb) t.colorSpace = THREE.SRGBColorSpace;
    t.wrapS = t.wrapT = repeat ? THREE.RepeatWrapping : THREE.ClampToEdgeWrapping;
    t.anisotropy = 8;
    cache.set(url, t);
  }
  return cache.get(url);
}
export function getBarkTexture(barkType, fileType) {
  const url = bark[barkType] && bark[barkType][fileType];
  return url ? load(url, fileType === 'color', true) : null;
}
export function getLeafTexture(leafType) {
  return load(leaves[leafType] || leaves.oak, true, false);
}
