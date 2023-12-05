import { readFileSync } from 'fs';
import { parsedNumbersFromString } from './helpers.js';

const inputFilePath = './day-4/input.txt';
const picksAndWinningNumbers = readFileSync(inputFilePath, 'utf-8')
  .split('\r\n')
  .map(ticket => {
    const [pickedNumbersAsString, winningNumbersAsString] = ticket.substring(ticket.indexOf(':') + 1)
      .trim()
      .split(' | ');

    const pickNumbers = parsedNumbersFromString(pickedNumbersAsString);
    const winningNumberSet = new Set(parsedNumbersFromString(winningNumbersAsString));

    return [pickNumbers, winningNumberSet];
  });

const pointTotal = picksAndWinningNumbers.reduce((points, [picks, winningNumberSet]) => {
  const sum = picks.reduce((pickSum, pick) => {
    if (winningNumberSet.has(pick) && pickSum === 0) return 1;

    return winningNumberSet.has(pick)
      ? pickSum * 2
      : pickSum;
  }, 0);

  return sum + points;
}, 0);

console.log(pointTotal);