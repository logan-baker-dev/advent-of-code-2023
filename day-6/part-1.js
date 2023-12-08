import { getRaceData } from './helpers.js';

const inputFilePath = './day-6/input.txt';
const raceData = getRaceData(inputFilePath);

const numberOfWays = [];

for (const [time, record] of raceData) {
  const choices = new Array(time + 1).fill(0).map((value, index) => value + index);
  let ways = 0;

  for (const choice of choices) {
    const remainingTime = time - choice;
    const travelDistance = choice * remainingTime;

    if (travelDistance > record) {
      ++ways;
    }
  }

  numberOfWays.push(ways);
}

const numberOfWaysProduct = numberOfWays.reduce((product, ways) => product * ways, 1);
console.log(numberOfWaysProduct);