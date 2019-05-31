/*** ===================================================================== ***\
 ** - PROBLEM ------------------------------------------------------ **
 * ========================================================================= *
  Given two array of integers(arr1,arr2). 
  Your task is going to find a pair of numbers(an element in arr1, and another element in arr2), 
  their difference is as big as possible(absolute value); 
  Again, you should to find a pair of numbers, their difference is as small as possible. 
  Return the maximum and minimum difference values by an array: [ max difference, min difference ]

  For example:

  Given arr1 = [3,10,5], arr2 = [20,7,15,8] should return [17,2] because 20 - 3 = 17, 10 - 8 = 2

  Note:

    arr1 and arr2 contains only integers(positive, negative or 0);
    arr1 and arr2 may have different lengths, they always has at least one element;
    All inputs are valid.
    This is a simple version, if you want some challenges, try the challenge version.
    Some Examples
    maxAndMin([3,10,5],[20,7,15,8]) === [17,2]
    maxAndMin([3],[20]) === [17,17]
    maxAndMin([3,10,5],[3,10,5]) === [7,0]
    maxAndMin([1,2,3,4,5],[6,7,8,9,10]) === [9,1]

\*** ===================================================================== ***/

function maxAndMin(arr1, arr2) {
  let max = 0,
    min = undefined;

  for (let first of arr1) {
    for (let second of arr2) {
      const secondMinusFirst = second - first;
      const firstMinusSecond = first - second;

      maxWithinDiff = Math.max(secondMinusFirst, firstMinusSecond);
      max = Math.max(max, maxWithinDiff);

      if (
        greaterOrEqualToZero(secondMinusFirst) ||
        greaterOrEqualToZero(firstMinusSecond)
      ) {
        const currentMin = getLeastPositiveInteger(
          firstMinusSecond,
          secondMinusFirst
        );

        if (min === undefined) min = currentMin;
        min = Math.min(min, currentMin);
      }
    }
  }

  return [max, min];
}

const greaterOrEqualToZero = num => num >= 0;

const getLeastPositiveInteger = (num1, num2) =>
  greaterOrEqualToZero(num1) ? num1 : num2;

console.log(
  maxAndMin(
    [-70295, 52443, -96099, -46388, -80838],
    [-89278, -48368, -97633, 37383, 17781, 51253]
  ),
  [150076, 1190]
);
// console.log(maxAndMin([3, 10, 5], [20, 7, 15, 8]), [17, 2]);
// console.log(maxAndMin([3], [20]), [17, 17]);
// console.log(maxAndMin([3, 10, 5], [3, 10, 5]), [7, 0]);
// console.log(maxAndMin([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]), [9, 1]);
