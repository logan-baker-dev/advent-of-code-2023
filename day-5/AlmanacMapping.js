import AlmanacElement from "./AlmanacElement.js";

export default class AlmanacMapping {
  /**
   * 
   * @param {AlmanacElement[]} almanacElements 
   */
  constructor(almanacElements = []) {
    /**
     * @type {AlmanacElement[]}
     */
    this.almanacElements = almanacElements;
  }

  get(id) {
    for (const element of this.almanacElements) {
      if (!this.has(element, id)) continue;

      const difference = Math.abs(id - element.sourceRangeStart);

      return element.destRangeStart + difference;
    }

    return null;
  }

  has(element, id) {
    const end = element.sourceRangeStart + element.rangeLength;

    return id >= element.sourceRangeStart && id <= end;
  }
}