import { readFileSync } from 'fs';

const calibrationDocument = readFileSync('./day-1/input.txt', 'utf-8').split('\r\n');
const wordToNumbers = new Map([
  ['one', '1'],
  ['two', '2'],
  ['three', '3'],
  ['four', '4'],
  ['five', '5'],
  ['six', '6'],
  ['seven', '7'],
  ['eight', '8'],
  ['nine', '9']
]);

const calibrationValues = [];

for (const line of calibrationDocument) {
  const firstNumber = getNumber(line, wordToNumbers);
  const lastNumber = getNumberReversed(line, wordToNumbers);

  calibrationValues.push(Number.parseInt(firstNumber + lastNumber));
}

console.log(calibrationValues.reduce((prev, curr) => prev + curr, 0));

/**
 * Gets the number from the given line based on the provided word-to-number mapping.
 *
 * @param {string} line - The input line to extract the number from.
 * @param {Map<string, string>} wordToNumbers - The mapping of words to their corresponding numeric representations.
 * @returns {string} - The extracted number as a string.
 */
function getNumber(line, wordToNumbers) {
  let currentNumberString = '';

  for (let i = 0; i < line.length; ++i) {
    currentNumberString += line[i];

    const numberAsString = findNumberRepresentation(currentNumberString, wordToNumbers);

    if (numberAsString) return numberAsString;
  }

  return '';
}

/**
 * Gets the number from the given line in a reversed order, based on the provided word-to-number mapping.
 *
 * @param {string} line - The input line to extract the number from.
 * @param {Map<string, string>} wordToNumbers - The mapping of words to their corresponding numeric representations.
 * @returns {string} - The extracted number as a string.
 */
function getNumberReversed(line, wordToNumbers) {
  let currentNumberString = '';

  for (let i = line.length - 1; i >= 0; --i) {
    currentNumberString = line[i] + currentNumberString;

    const numberAsString = findNumberRepresentation(currentNumberString, wordToNumbers);

    if (numberAsString) return numberAsString;
  }

  return '';
}

/**
 * Finds the number representation from the given string based on the provided mapping.
 *
 * @param {string} str - The string to check for a number representation.
 * @param {Map<string, string>} wordToNumbers - The mapping of words to their corresponding numeric representations.
 * @returns {string} - The extracted number representation or an empty string if not found.
 */
function findNumberRepresentation(str, wordToNumbers) {
  for (const [word, digit] of wordToNumbers) {
    if (str.includes(word) || str.includes(digit)) {
      return digit;
    }
  }

  return '';
}