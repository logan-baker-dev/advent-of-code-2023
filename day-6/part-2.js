import { getSingleRaceData } from './helpers.js';

const inputFilePath = './day-6/input.txt';
const [time, record] = getSingleRaceData(inputFilePath);

const choices = new Array(time + 1).fill(0).map((value, index) => value + index);

let ways = 0;

for (const choice of choices) {
  const remainingTime = time - choice;
  const travelDistance = choice * remainingTime;

  if (travelDistance > record) {
    ++ways;
  }
}

console.log(ways);