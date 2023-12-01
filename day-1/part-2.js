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
  let numberAsString = '';

  for (let i = 0; i < line.length; ++i) {
    numberAsString += line[i];

    if (hasNumberRepresentation(numberAsString, wordToNumbers)) {
      return getNumberRepresentation(numberAsString, wordToNumbers);
    }
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
  let numberAsString = '';

  for (let i = line.length - 1; i >= 0; --i) {
    numberAsString = line[i] + numberAsString;

    if (hasNumberRepresentation(numberAsString, wordToNumbers)) {
      return getNumberRepresentation(numberAsString, wordToNumbers);
    }
  }

  return '';
}

/**
 * Checks if the given string has a valid number representation based on the provided mapping.
 *
 * @param {string} str - The string to check for a number representation.
 * @param {Map<string, string>} wordToNumbers - The mapping of words to their corresponding numeric representations.
 * @returns {boolean} - True if a valid representation is found, false otherwise.
 */
function hasNumberRepresentation(str, wordToNumbers) {
  return Array.from(wordToNumbers.keys()).some(word => str.includes(word)) ||
    Array.from(wordToNumbers.values()).some(digit => str.includes(digit));
}

/**
 * Gets the number representation from the given string based on the provided mapping.
 *
 * @param {string} str - The string to extract the number representation from.
 * @param {Map<string, string>} wordToNumbers - The mapping of words to their corresponding numeric representations.
 * @returns {string} - The extracted number representation.
 */
function getNumberRepresentation(str, wordToNumbers) {
  for (const [word, digit] of wordToNumbers) {
    if (str.includes(word) || str.includes(digit)) {
      return digit;
    }
  }

  return '';
}
