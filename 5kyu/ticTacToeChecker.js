/*** ===================================================================== ***\
 ** - PROBLEM ------------------------------------------------------ **
 * ========================================================================= *
 *
 * https://www.codewars.com/kata/tic-tac-toe-checker/train/javascript

   If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? 
   Our goal is to create a function that will check that for us!

  Assume that the board comes in the form of a 3x3 array,
   where the value is 0 if a spot is empty, 
                      1 if it is an "X", 
                      or 2 if it is an "O", like so:

    [[0, 0, 1],
    [0, 1, 2],
    [2, 1, 0]]
  We want our function to return:

  -1 if the board is not yet finished (there are empty spots),
  1 if "X" won,
  2 if "O" won,
  0 if it's a cat's game (i.e. a draw).
  You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.

\*** ======================================================================================== ***/

// 0 => 'empty'
// 1 => 'X'
// 2 => 'O'

// find a better solution
function isSolved(board) {
  let isSolved = 0;

  const isEqual = (a, b, c) => {
    if (a === 0 || b === 0 || c === 0) {
      isSolved++;
    }
    return a === b && b === c && a === c && a !== 0;
  };

  if (isEqual(board[0][0], board[0][1], board[0][2])) return board[0][0];
  if (isEqual(board[0][0], board[1][0], board[2][0])) return board[0][0];
  if (isEqual(board[0][0], board[1][1], board[2][2])) return board[0][0];

  if (isEqual(board[0][1], board[1][1], board[2][1])) return board[0][1];

  if (isEqual(board[0][2], board[1][2], board[2][2])) return board[0][2];

  if (isEqual(board[1][0], board[1][1], board[1][2])) return board[1][0];

  if (isEqual(board[2][0], board[2][1], board[2][2])) return board[2][0];

  return isSolved > 0 ? -1 : 0;
}

// console.log(isSolved([[2, 1, 2], [2, 1, 1], [1, 2, 1]]));
// console.log(isSolved([[2, 1, 2], [2, 1, 1], [1, 2, 1]], 0));
// console.log(isSolved([[1, 2, 1], [1, 1, 2], [2, 1, 2]], 0));
