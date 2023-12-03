import EngineNumber from './EngineNumber.js';
import EngineSymbol from './EngineSymbol.js';

/**
 * Parses an engine schematic to build an array of EngineNumber objects.
 * 
 * @param {string[][]} engineSchematic - The engine schematic to parse.
 * @returns {EngineNumber[]} - The array of engine numbers in the engine schematic.
 */
export function parseNumbers(grid) {
  const engineNumbers = [];
  const engineNumberRegex = /\d+/g; // Matches any consecutive digits.

  for (let row = 0; row < grid.length; ++row) {
    const engineNumberMatches = Array.from(grid[row].matchAll(engineNumberRegex));

    for (const match of engineNumberMatches) {
      const value = Number.parseInt(match[0]);
      const end = match.index + match[0].length - 1;

      engineNumbers.push(new EngineNumber(value, row, match.index, end));
    }
  }

  return engineNumbers;
}

/**
 * Parses an engine schematic to build an array of EngineSymbol objects.
 * 
 * @param {string[][]} engineSchematic - The engine schematic to parse.
 * @returns {EngineSymbol[]} - The array of engine symbols in the engine schematic.
 */
export function parseSymbols(engineSchematic) {
  const engineSymbols = [];
  const engineSymbolRegex = /[^\d.]/g; // Matches anything that isn't a digit or a period.

  for (let row = 0; row < engineSchematic.length; ++row) {
    const engineSymbolMatches = Array.from(engineSchematic[row].matchAll(engineSymbolRegex));

    for (const match of engineSymbolMatches) {
      engineSymbols.push(new EngineSymbol(match[0], row, match.index));
    }
  }

  return engineSymbols;
}

/**
 * Checks if a symbol is adjacent to a number based on their row and column positions.
 * 
 * Conditions for adjacency:
 * 1. Symbol's row is within one row above or below the number.
 * 2. Symbol's column is within one column before, within, or after the number's range.
 * 
 * @param {EngineNumber} number - The engine number to compare.
 * @param {EngineSymbol} symbol - The engine symbol to compare.
 * @returns {boolean} - True if the symbol is adjacent to the number, false otherwise.
 */
export function isAdjacentToSymbol(number, symbol) {
  const isAdjacentRow = symbol.row >= number.row - 1 && symbol.row <= number.row + 1;
  const isAdjacentCol = symbol.col >= number.colStart - 1 && symbol.col <= number.colEnd + 1;

  return isAdjacentRow && isAdjacentCol;
}