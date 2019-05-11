/*** ===================================================================== ***\
 ** - PROBLEM ------------------------------------------------------ **
 * ========================================================================= *

  Given an array arr of strings complete the function landPerimeter by calculating the total perimeter of all the islands. 
  Each piece of land will be marked with 'X' while the water fields are represented as 'O'. 
  Consider each tile being a perfect 1 x 1piece of land. Some examples for better visualization:

  https://www.codewars.com/kata/land-perimeter/train/javascript

\*** ===================================================================== ***/

const len = arr => arr.length;

function landPerimeter(arr) {
  const islands = arr;
  const row = len(islands);

  let totalPerimeter = 0;

  for (let i = 0; i < row; i++) {
    const column = len(islands[i]);

    for (let j = 0; j < column; j++) {
      if (islands[i][j] === 'X') {
        totalPerimeter += getPerimeter(islands, i, j);
      }
    }
  }

  return `Total land perimeter: ${totalPerimeter}`;
}

function getPerimeter(arr, i, j) {
  let perimeter = 4;

  const checkAdjacentGridHasLand = (() => {
    const decPerimeter = () => (perimeter -= 1);

    const left = j != 0 && arr[i][j - 1] === 'X';
    if (left) decPerimeter();

    const right = j != len(arr[0]) - 1 && arr[i][j + 1] === 'X';
    if (right) decPerimeter();

    const top = i != len(arr) - 1 && arr[i + 1][j] === 'X';
    if (top) decPerimeter();

    const bottom = i != 0 && arr[i - 1][j] === 'X';
    if (bottom) decPerimeter();
  })();

  return perimeter;
}

console.log(landPerimeter(['XOOXO', 'XOOXO', 'OOOXO', 'XXOXO', 'OXOOO'])); //24

console.log(
  landPerimeter([
    'OXOOOX',
    'OXOXOO',
    'XXOOOX',
    'OXXXOO',
    'OOXOOX',
    'OXOOOO',
    'OOXOOX',
    'OOXOOO',
    'OXOOOO',
    'OXOOXX',
  ])
); // 60
console.log(
  landPerimeter([
    'OXOOO',
    'OOXXX',
    'OXXOO',
    'XOOOO',
    'XOOOO',
    'XXXOO',
    'XOXOO',
    'OOOXO',
    'OXOOX',
    'XOOOO',
    'OOOXO',
  ])
); // 52
console.log(
  landPerimeter(['XXXXXOOO', 'OOXOOOOO', 'OOOOOOXO', 'XXXOOOXO', 'OXOXXOOX'])
); // 40
console.log(
  landPerimeter([
    'XOOOXOO',
    'OXOOOOO',
    'XOXOXOO',
    'OXOXXOO',
    'OOOOOXX',
    'OOOXOXX',
    'XXXXOXO',
  ])
); //54
console.log(
  landPerimeter([
    'OOOOXO',
    'XOXOOX',
    'XXOXOX',
    'XOXOOO',
    'OOOOOO',
    'OOOXOO',
    'OOXXOO',
  ])
); //40
