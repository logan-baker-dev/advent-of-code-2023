import Game from './Game.js';
import Cube from './Cube.js';

/**
 * Parses the game information into game objects.
 * 
 * @param {string[]} gameInfo - The game information.
 * @returns {Game[]} - An array of Game objects representing the game information.
 */
export function parseGameInfoIntoGames(gameInfo) {
  const parsedGameInfo = [];

  for (const gameString of gameInfo) {
    const game = new Game();
    const [gameIdString, cubeString] = gameString.split(':');

    game.id = Number.parseInt(gameIdString.substring(gameIdString.lastIndexOf(' ') + 1));
    game.cubes = parseCubes(cubeString);

    parsedGameInfo.push(game);
  }

  return parsedGameInfo;
}

/**
 * Parses the cube string into an array of cube data.
 * 
 * @param {string} cubeString - The cube array represented as a string. 
 * @returns {Cube[]} - The parsed cube array.
 */
export function parseCubes(cubeString) {
  const parsedCubes = [];
  const cubeSetAsString = cubeString.split(';');

  for (const cubeSetString of cubeSetAsString) {
    const cubesString = cubeSetString.split(',');

    for (const cubeString of cubesString) {
      const [number, color] = cubeString.trim().split(' ');
      parsedCubes.push(new Cube(Number.parseInt(number), color));
    }
  }

  return parsedCubes;
}

/**
 * Checks if any of the game's cubes exceed the color limits.
 * 
 * @param {Game} game - The game object.
 * @returns {boolean} - True if the game exceeds any color limits, false otherwise.
 */
export function doesGameExceedColorLimits(game) {
  const colorLimits = new Map([
    ['red', 12],
    ['green', 13],
    ['blue', 14]
  ]);

  return game.cubes.some((cube) => cube.number > colorLimits.get(cube.color));
}

/**
 * Returns the cube number with the highest value based on the color of the cube.
 * 
 * @param {Cube[]} cubes - The array of cubes.
 * @param {string} color - The color to filter on.
 */
export function getMaxCubeNumberForColor(cubes, color) {
  const cubeNumbersByColor = cubes.filter(cube => cube.color === color)
    .map(cube => cube.number);

  return Math.max(...cubeNumbersByColor);
}