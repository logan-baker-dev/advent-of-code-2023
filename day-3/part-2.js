import { readFileSync } from 'fs';
import { parseNumbers, parseSymbols, isAdjacentToSymbol } from './helpers.js';

const inputFilePath = './day-3/input.txt';
const engineSchematic = readFileSync(inputFilePath, 'utf-8').split('\r\n');

const gearRatios = [];
const numbers = parseNumbers(engineSchematic);
const symbols = parseSymbols(engineSchematic).filter(symbol => symbol.value === '*');

for (const symbol of symbols) {
  const adjacentNumbers = numbers.filter(number => isAdjacentToSymbol(number, symbol));

  if (adjacentNumbers.length !== 2) continue;

  const gearRatio = adjacentNumbers.reduce((product, number) => product * number.value, 1);
  gearRatios.push(gearRatio);
}

const gearRatioSum = gearRatios.reduce((sum, ratio) => sum + ratio, 0);
console.log(gearRatioSum);
