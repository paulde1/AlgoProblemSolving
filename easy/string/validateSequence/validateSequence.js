function isValidSubsequence(array, sequence) {
  let position = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === sequence[position]) {
      position++;
    }
  }
  return position === sequence.length;
}

exports.isValidSubsequence = isValidSubsequence;
