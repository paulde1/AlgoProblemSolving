/**
 * @param {number} n
 */
const OrderedStream = function (n) {
  this.array = new Array(n);
  this.pointer = 0;
};

/**
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function (idKey, value) {
  this.array[idKey - 1] = value;
  let tempArray = [];

  for (let i = this.pointer; i < this.array.length; i++) {
    if (this.array[i]) {
      tempArray.push(this.array[i]);
      this.pointer++;
    } else {
      break;
    }
  }
  return tempArray;
};
