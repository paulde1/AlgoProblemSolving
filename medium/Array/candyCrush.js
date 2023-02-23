/**
 * @param {number[][]} board
 * @return {number[][]}
 */
const candyCrush = function (board) {
  //if the board is indefined , return the board
  //set a results boolean to true to start
  if (!board) return board;
  let crushed = true;

  //to check the rows
  //nested loop with second loop going upto board[0].length -2
  //set three num variables,all  Math.abs(board[i][j], ...board[i][j+1], j+2 )

  //check if num1 = num2 & num 2 = num 3 & num1 != 0
  //if so board[i][j] = -num, board[i][j+1] = -num2, board[i][j+2] = -num3
  //boolean = false

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length - 2; j++) {
      const num1 = Math.abs(board[i][j]);
      const num2 = Math.abs(board[i][j + 1]);
      const num3 = Math.abs(board[i][j + 2]);
      if (num1 === num2 && num2 === num3 && num1 !== 0) {
        board[i][j] = -num1;
        board[i][j + 1] = -num2;
        board[i][j + 2] = -num3;
        crushed = false;
      }
    }
  }
  //to check columns
  //nested loop with i < board[0].length and j < board.lenght -2
  //set three nums opposite of rows so boards[j][i], boards[j +1][i], [j+2][i]
  //perform same check using as rows using nums these positions and set bool to false
  for (let i = 0; i < board[0].length; i++) {
    for (let j = 0; j < board.length - 2; j++) {
      const num1 = Math.abs(board[j][i]);
      const num2 = Math.abs(board[j + 1][i]);
      const num3 = Math.abs(board[j + 2][i]);
      if (num1 === num2 && num2 === num3 && num1 !== 0) {
        board[j][i] = -num1;
        board[j + 1][i] = -num2;
        board[j + 2][i] = -num3;
        crushed = false;
      }
    }
  }

  //to perform drop
  //check if bool is false
  // if so, perform a loop two seperarte loops inside
  //first loop and i < board[0].length then declare variable as board.length -1
  // second loop set j = board.length - 1; j >= 0; j--
  //check if board[j][i] > 0
  // if so set board[variable][i] = board[j][i]
  //decrement variable
  //third loop j starts at variable, j>= 0, j --
  //board[j][i] = 0
  if (!crushed) {
    for (let i = 0; i < board[0].length; i++) {
      let length = board.length - 1;
      for (let j = board.length - 1; j >= 0; j--) {
        if (board[j][i] > 0) {
          board[length][i] = board[j][i];
          length--;
        }
      }
      for (let j = length; j >= 0; j--) {
        board[j][i] = 0;
      }
    }
  }

  // check if bool is true, if so return board
  //otherwise return call of candycrush on board
  if (crushed) return board;
  return candyCrush(board);
};
