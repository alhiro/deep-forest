import ashSmall from './preset_ash_small.json';
import ashMedium from './preset_ash_medium.json';
import ashLarge from './preset_ash_large.json';
import aspenSmall from './preset_aspen_small.json';
import aspenMedium from './preset_aspen_medium.json';
import aspenLarge from './preset_aspen_large.json';
import bush1 from './preset_bush_1.json';
import bush2 from './preset_bush_2.json';
import bush3 from './preset_bush_3.json';
import oakSmall from './preset_oak_small.json';
import oakMedium from './preset_oak_medium.json';
import oakLarge from './preset_oak_large.json';
import pineSmall from './preset_pine_small.json';
import pineMedium from './preset_pine_medium.json';
import pineLarge from './preset_pine_large.json';
import trellis from './preset_trellis.json';
import TreeOptions from './options';

export const TreePreset = {
  'Ash Small': ashSmall,
  'Ash Medium': ashMedium,
  'Ash Large': ashLarge,
  'Aspen Small': aspenSmall,
  'Aspen Medium': aspenMedium,
  'Aspen Large': aspenLarge,
  'Bush 1': bush1,
  'Bush 2': bush2,
  'Bush 3': bush3,
  'Oak Small': oakSmall,
  'Oak Medium': oakMedium,
  'Oak Large': oakLarge,
  'Pine Small': pineSmall,
  'Pine Medium': pineMedium,
  'Pine Large': pineLarge,
  'Trellis': trellis,
};

/**
 * @param {string} name The name of the preset to load
 * @returns {TreeOptions}
 */
export function loadPreset(name) {
  const preset = TreePreset[name];
  return preset ? structuredClone(preset) : new TreeOptions();
}