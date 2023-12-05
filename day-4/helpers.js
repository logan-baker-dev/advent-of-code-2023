
/**
 * Parses the ticket string into a card object.
 *
 * @param {string} ticketString - The ticket in string format.
 * @returns A card object.
 */
export function createCard(ticketString) {
  const [pickedNumberString, winningNumberString] = ticketString.substring(ticketString.indexOf(':') + 1)
    .trim()
    .split(' | ');

  const pickedNumbers = parsedNumbersFromString(pickedNumberString);
  const winningSet = new Set(parsedNumbersFromString(winningNumberString));

  return {
    count: 1,
    pickedNumbers,
    winningSet
  };
}

/**
 * Parses the ticket number string into an array of numbers.
 * 
 * @param {string} ticketNumberString - The string representing the ticket numbers.
 * @returns An array of ticket numbers.
 */
export function parsedNumbersFromString(ticketNumberString) {
  return ticketNumberString.split(' ')
    .filter(numberString => numberString.length > 0)
    .map(numberString => Number.parseInt(numberString));
}