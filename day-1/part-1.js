import { readFileSync } from 'fs';

const inputFilePath = './day-1/input.txt';
const calibrationDocument = readFileSync(inputFilePath, 'utf-8').split('\r\n');

const numberSet = new Set('0123456789'.split(''));
const calibrationValues = [];

for (const line of calibrationDocument) {
  let left = 0;
  let right = line.length - 1;

  while (left <= right) {
    const leftChar = line[left];
    const rightChar = line[right];

    if (numberSet.has(leftChar) && numberSet.has(rightChar)) {
      calibrationValues.push(Number.parseInt(leftChar + rightChar));
      break;
    }

    if (!numberSet.has(leftChar)) ++left;
    if (!numberSet.has(rightChar)) --right;
  }
}

const sum = calibrationValues.reduce((prev, curr) => prev + curr, 0);

console.log(sum);
