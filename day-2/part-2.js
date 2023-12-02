import { readFileSync } from 'fs';
import { parseGameInfo } from './helpers.js';

const inputFilePath = './day-2/input.txt';
const gameInfo = readFileSync(inputFilePath, 'utf-8').split('\r\n');

const gameInfoParsed = parseGameInfo(gameInfo);
let sumOfPowers = 0;

for (const game of gameInfoParsed) {
  const maxRedCubes = game.cubes.filter((cube) => cube.color === 'red')
    .reduce((max, cube) => Math.max(max, cube.number), Number.MIN_SAFE_INTEGER);

  const maxGreenCubes = game.cubes.filter((cube) => cube.color === 'green')
    .reduce((max, cube) => Math.max(max, cube.number), Number.MIN_SAFE_INTEGER);

  const maxBlueCubes = game.cubes.filter((cube) => cube.color === 'blue')
    .reduce((max, cube) => Math.max(max, cube.number), Number.MIN_SAFE_INTEGER);

  const powerSum = maxRedCubes * maxGreenCubes * maxBlueCubes;
  sumOfPowers += powerSum;
}

console.log(sumOfPowers);