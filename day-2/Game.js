import Cube from './Cube.js';

/**
 * Represents a game with an ID and cubes.
 */
export default class Game {
  /**
   * @param {number} id - The ID of the game.
   * @param {Cube[]} cubes - An array representing cubes in the game.
   */
  constructor(id = 0, cubes = []) {
    /**
     * @private
     * @type {number}
     */
    this._id = id;

    /**
     * @private
     * @type {Cube[]}
     */
    this._cubes = cubes;
  }

  /**
   * Sets the ID of the game.
   *
   * @param {number} value - The ID to set.
   */
  set id(value) {
    this._id = value;
  }

  /**
   * Gets the ID of the game.
   *
   * @returns {number} The ID of the game.
   */
  get id() {
    return this._id;
  }

  /**
   * Sets the cubes in the game.
   *
   * @param {Cube[]} cubes - An array representing cubes in the game.
   */
  set cubes(cubes) {
    this._cubes = cubes;
  }

  /**
   * Gets the cubes in the game.
   *
   * @returns {Cube[]} An array representing cubes in the game.
   */
  get cubes() {
    return this._cubes;
  }
}