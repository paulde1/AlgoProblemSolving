function isValidSubsequence1(array, sequence) {
  let index1 = 0;
  let index2 = 0;
  while (index1 < array.length && index2 < sequence.length) {
    if (array[index1] === sequence[index2]) index2++;
    index1++;
  }
  return index2 === sequence.length;
}
exports.isValidSubsequence = isValidSubsequence1;
