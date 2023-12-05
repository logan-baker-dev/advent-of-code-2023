
/**
 * Parses the ticket string into a card object.
 *
 * @param {string} ticket - The ticket in string format.
 * @param {number} index - The current iteration number.
 * @returns A card object.
 */
export function createCard(ticket, index) {
  const [pickedNumbersAsString, winningNumbersAsString] = ticket.substring(ticket.indexOf(':') + 1)
    .trim()
    .split(' | ');

  const pickNumbers = parsedNumbersFromString(pickedNumbersAsString);
  const winningSet = new Set(parsedNumbersFromString(winningNumbersAsString));

  return {
    id: index + 1,
    pickNumbers,
    winningSet
  };
}

/**
 * Adds copies of a card to a map, updating the counts based on matching numbers.
 *
 * @param {Map<number, number>} cardCopies - The map containing card ID counts.
 * @param {{
 * id: number,
 * pickNumbers: number[],
 * winningSet: Set<number>
 * }} card - The card object with an `id` property.
 * @param {number} matchingNumbers - The number of matching numbers for the card.
 * @returns {void} This function modifies the provided `cardCopies` map in place.
 */
export function addCardCopies(cardCopies, card, matchingNumbers) {
  for (let i = 0; i < matchingNumbers; ++i) {
    const id = card.id + i + 1;
    const count = cardCopies.get(id) ?? 0;

    cardCopies.set(id, count + 1);
  }
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