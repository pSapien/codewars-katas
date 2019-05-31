/*** ===================================================================== ***\
 ** - PROBLEM ------------------------------------------------------ **
 * ========================================================================= *
  Given an array, find the int that appears an odd number of times.

  There will always be only one integer that appears an odd number of times.
\*** ===================================================================== ***/

function findOdd(arr) {
  const intWithCount = new Map();

  for (let int of arr) {
    if (intWithCount.has(int)) {
      const prevCount = intWithCount.get(int);
      intWithCount.set(int, prevCount + 1);
    } else {
      intWithCount.set(int, 1);
    }
  }

  for (let [int, intCount] of intWithCount) {
    const isOddCount = intCount % 2 > 0;

    if (isOddCount) return int;
  }

  return 0;
}

findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]); // 5
