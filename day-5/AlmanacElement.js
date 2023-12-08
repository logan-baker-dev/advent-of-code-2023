export default class AlmanacElement {
  constructor(destRangeStart = 0, sourceRangeStart = 0, rangeLength = 0) {
    this.sourceRangeStart = sourceRangeStart;
    this.destRangeStart = destRangeStart;
    this.rangeLength = rangeLength;
  }
}