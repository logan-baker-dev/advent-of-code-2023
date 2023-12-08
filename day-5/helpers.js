import { readFileSync } from 'fs';
import AlmanacElement from './AlmanacElement.js';
import AlmanacMapping from './AlmanacMapping.js';

const AlmanacSections = {
  seeds: 0,
  seedToSoil: 1,
  soilToFertilizer: 2,
  fertilizerToWater: 3,
  waterToLight: 4,
  lightToTemperature: 5,
  temperatureToHumidity: 6,
  humidityToLocation: 7
};

/**
 * Builds an almanac from a text file.
 * 
 * @param {string} inputFilePath - The text file path to read from. 
 * @returns An almanac object.
 */
export function buildAlmanac(inputFilePath) {
  const sections = readFileSync(inputFilePath, 'utf-8').split('\r\n\r\n');
  const almanac = {};

  almanac.seeds = parseSeeds(sections[AlmanacSections.seeds]);

  almanac.seedToSoilMap = parseSection(sections[AlmanacSections.seedToSoil]);
  almanac.soilToFertilizerMap = parseSection(sections[AlmanacSections.soilToFertilizer]);
  almanac.fertilizerToWaterMap = parseSection(sections[AlmanacSections.fertilizerToWater]);
  almanac.waterToLightMap = parseSection(sections[AlmanacSections.waterToLight]);
  almanac.lightToTemperatureMap = parseSection(sections[AlmanacSections.lightToTemperature]);
  almanac.temperatureToHumidityMap = parseSection(sections[AlmanacSections.temperatureToHumidity]);
  almanac.humidityToLocationMap = parseSection(sections[AlmanacSections.humidityToLocation]);

  return almanac;
}

/**
 * Parses the seed string into an array of seed numbers.
 * 
 * @param {string} seedString - The seed string to parse.
 * @returns An array of seed numbers.
 */
function parseSeeds(seedString) {
  const seedNumbers = seedString.split(': ')[1]
    .split(' ')
    .map(numberString => Number(numberString));

  return seedNumbers;
}

/**
 * Parses a given section string into mapping for that section.
 * 
 * @param {string} sectionString - The section string to parse.
 * @returns An AlmanacMapping for the given section string.
 */
function parseSection(sectionString) {
  const elements = parseElements(sectionString);

  return new AlmanacMapping(elements);
}

/**
 * Converts a string representation of an AlmanacElement into an AlmanacElement object.
 * 
 * @param {string} elementString - The element string to parse.
 * @returns An AlmanacElement object.
 */
function parseElements(elementString) {
  return elementString.split(':')[1]
    .split('\r\n')
    .filter(string => string.length > 0)
    .map(string => string.split(' ').map(numberString => Number(numberString)))
    .map(numberArray => new AlmanacElement(numberArray[0], numberArray[1], numberArray[2]));
}