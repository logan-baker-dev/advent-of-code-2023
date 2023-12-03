import { readFileSync } from 'fs';
import { parseGameInfoIntoGames, getMaxCubeNumberForColor } from './helpers.js';

const inputFilePath = './day-2/input.txt';
const gameInfo = readFileSync(inputFilePath, 'utf-8').split('\r\n');

const games = parseGameInfoIntoGames(gameInfo);
const colors = ['red', 'green', 'blue'];

const sumOfPowers = games.reduce((sum, game) => {
  const cubeMaxesByColor = colors.map(color => getMaxCubeNumberForColor(game.cubes, color));
  const product = cubeMaxesByColor.reduce((currentProduct, cubeMax) => currentProduct * cubeMax, 1)

  return sum + product;
}, 0);

console.log(sumOfPowers);