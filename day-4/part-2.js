import { readFileSync } from 'fs';
import { createCard } from './helpers.js';

const inputFilePath = './day-4/input.txt';
const cards = readFileSync(inputFilePath, 'utf-8')
  .split('\r\n')
  .map(ticket => createCard(ticket));

for (let i = 0; i < cards.length; ++i) {
  const card = cards[i];
  const matchingNumberCount = card.pickedNumbers
    .reduce((sum, pick) => card.winningSet.has(pick) ? sum + 1 : sum, 0);

  // Adjust the count of the next n many cards where n = matchingNumberCount.
  for (let j = 1; j <= matchingNumberCount; ++j) {
    const nextCard = cards[i + j];
    nextCard.count += card.count;
  }
}

const totalCards = cards.reduce((sum, card) => sum + card.count, 0);
console.log(totalCards);
