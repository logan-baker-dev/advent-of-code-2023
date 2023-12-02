import { readFileSync } from 'fs';
import { parseGameInfo } from './helpers.js';

const inputFilePath = './day-2/input.txt';
const gameInfo = readFileSync(inputFilePath, 'utf-8').split('\r\n');

const redLimit = 12;
const greenLimit = 13;
const blueLimit = 14;

const gameInfoParsed = parseGameInfo(gameInfo);
let sumOfValidGameIds = 0;

for (const game of gameInfoParsed) {
  const redCubes = game.cubes.filter((cube) => cube.color === 'red');
  const greenCubes = game.cubes.filter((cube) => cube.color === 'green');
  const blueCubes = game.cubes.filter((cube) => cube.color === 'blue');

  const doesExceedRedLimit = redCubes.some((cube) => cube.number > redLimit);
  const doesExceedGreenLimit = greenCubes.some((cube) => cube.number > greenLimit);
  const doesExceedBlueLimit = blueCubes.some((cube) => cube.number > blueLimit);

  if (doesExceedRedLimit || doesExceedGreenLimit || doesExceedBlueLimit) {
    continue;
  }

  sumOfValidGameIds += game.id;
}

console.log(sumOfValidGameIds);