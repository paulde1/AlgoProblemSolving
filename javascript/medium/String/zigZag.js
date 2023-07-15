/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function (s, numRows) {
  let box = [];
  let count = 0;
  let goUp = true;

  for (let i = 0; i < s.length; i++) {
    if (!box[count]) box[count] = [];
    box[count].push(s[i]);

    count = goUp ? count + 1 : count - 1;

    if (count + 1 === numRows) goUp = false;
    else if (count === 0) goUp = true;
  }
  let result = "";
  for (let letters of box) {
    result += letters.join("");
  }
  return result;
};
