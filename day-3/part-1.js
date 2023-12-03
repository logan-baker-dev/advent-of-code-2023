import { readFileSync } from 'fs';
import { parseNumbers, parseSymbols, isAdjacentToSymbol } from './helpers.js';

const inputFilePath = './day-3/input.txt';
const engineSchematic = readFileSync(inputFilePath, 'utf-8').split('\r\n');

const partNumbers = [];
const numbers = parseNumbers(engineSchematic);
const symbols = parseSymbols(engineSchematic);

for (const number of numbers) {
  const isPartNumber = symbols.some(symbol => isAdjacentToSymbol(number, symbol));

  if (isPartNumber) partNumbers.push(number.value);
}

const partNumberSum = partNumbers.reduce((sum, number) => sum + number, 0);
console.log(partNumberSum);
