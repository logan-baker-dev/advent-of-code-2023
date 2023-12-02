/**
 * Represents a cube with a number and color.
 */
export default class Cube {
  /**
   * @param {number} number - The number of the cube.
   * @param {string} color - The color of the cube.
   */
  constructor(number = 0, color = '') {
    /**
     * @private
     * @type {number}
     */
    this._number = number;

    /**
     * @private
     * @type {string}
     */
    this._color = color;
  }

  /**
   * Gets the number of the cube.
   *
   * @returns {number} The number of the cube.
   */
  get number() {
    return this._number;
  }

  /**
   * Sets the number of the cube.
   *
   * @param {number} number - The number to set.
   */
  set number(number) {
    this._number = number;
  }

  /**
   * Gets the color of the cube.
   *
   * @returns {string} The color of the cube.
   */
  get color() {
    return this._color;
  }

  /**
   * Sets the color of the cube.
   *
   * @param {string} color - The color to set.
   */
  set color(color) {
    this._color = color;
  }
}