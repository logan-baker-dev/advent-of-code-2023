import { readFileSync } from 'fs';
import { parseGameInfoIntoGames, doesGameExceedColorLimits } from './helpers.js';

const inputFilePath = './day-2/input.txt';
const gameInfo = readFileSync(inputFilePath, 'utf-8').split('\r\n');

const games = parseGameInfoIntoGames(gameInfo);

const sumOfValidGameIds = games.reduce((sum, game) => {
  return doesGameExceedColorLimits(game)
    ? sum
    : sum + game.id;
}, 0);

console.log(sumOfValidGameIds);
