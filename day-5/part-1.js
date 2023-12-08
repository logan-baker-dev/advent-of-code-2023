import { buildAlmanac } from "./helpers.js";

const inputFilePath = './day-5/input.txt';

const almanac = buildAlmanac(inputFilePath);

let lowestLocationNumber = Number.MAX_SAFE_INTEGER;

for (const seed of almanac.seeds) {
  const soilNumber = almanac.seedToSoilMap.get(seed) ?? seed;
  const fertilizerNumber = almanac.soilToFertilizerMap.get(soilNumber) ?? soilNumber;
  const waterNumber = almanac.fertilizerToWaterMap.get(fertilizerNumber) ?? fertilizerNumber;
  const lightNumber = almanac.waterToLightMap.get(waterNumber) ?? waterNumber;
  const temperatureNumber = almanac.lightToTemperatureMap.get(lightNumber) ?? lightNumber;
  const humidityNumber = almanac.temperatureToHumidityMap.get(temperatureNumber) ?? temperatureNumber;
  const locationNumber = almanac.humidityToLocationMap.get(humidityNumber) ?? humidityNumber;

  lowestLocationNumber = Math.min(lowestLocationNumber, locationNumber);
}

console.log(lowestLocationNumber);