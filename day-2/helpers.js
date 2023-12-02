import Game from './Game.js';
import Cube from './Cube.js';

/**
 * Parses the game information into game objects.
 * 
 * @param {string[]} gameInfo - The game information.
 * @returns {Game[]} - An array of Game objects representing the game information.
 */
export function parseGameInfo(gameInfo) {
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