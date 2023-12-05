import { readFileSync } from 'fs';
import { createCard, addCardCopies } from './helpers.js';

const inputFilePath = './day-4/input.txt';
const cards = readFileSync(inputFilePath, 'utf-8')
  .split('\r\n')
  .map((ticket, index) => createCard(ticket, index));

const cardCopies = new Map();

for (const card of cards) {
  const matchingNumbers = card.pickNumbers.reduce(
    (sum, pick) => card.winningSet.has(pick) ? sum + 1 : sum,
    0);

  if (matchingNumbers === 0) continue;

  addCardCopies(cardCopies, card, matchingNumbers);

  const duplicateCardCount = cardCopies.get(card.id) ?? 0;

  for (let i = 0; i < duplicateCardCount; ++i) {
    addCardCopies(cardCopies, card, matchingNumbers);
  }
}

const cardCopyTotals = Array.from(cardCopies.values()).reduce(
  (sum, count) => sum + count,
  0);

const totalCards = cards.length + cardCopyTotals;
console.log(totalCards);