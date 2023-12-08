import { readFileSync } from 'fs';

export function getRaceData(inputFilePath) {
  const raceData = [];

  const [timesString, distancesString] = readFileSync(inputFilePath, 'utf-8')
    .split('\r\n');

  const timeIdentifier = 'Time:';
  const times = timesString.substring(timeIdentifier.length + 1)
    .split(' ')
    .filter(string => string.length > 0)
    .map(numberString => Number(numberString));

  const distanceIdentifier = 'Distance:';
  const distances = distancesString.substring(distanceIdentifier.length + 1)
    .split(' ')
    .filter(string => string.length > 0)
    .map(numberString => Number(numberString));

  for (let i = 0; i < times.length; ++i) {
    raceData.push([times[i], distances[i]]);
  }

  return raceData;
}

export function getSingleRaceData(inputFilePath) {
  const raceData = [];

  const [timesString, distancesString] = readFileSync(inputFilePath, 'utf-8')
    .split('\r\n');

  const timeIdentifier = 'Time:';
  const timeString = timesString.substring(timeIdentifier.length + 1)
    .split(' ')
    .filter(string => string.length > 0)
    .join('');

  const time = new Number(timeString);

  const distanceIdentifier = 'Distance:';
  const distanceString = distancesString.substring(distanceIdentifier.length + 1)
    .split(' ')
    .filter(string => string.length > 0)
    .join('');

  const distance = new Number(distanceString);

  return [time, distance];
}