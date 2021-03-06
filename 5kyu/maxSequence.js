/*** ===================================================================== ***\
 ** - PROBLEM ------------------------------------------------------ **
 * ========================================================================= *
 *
 * https://www.codewars.com/kata/maximum-subarray-sum/train/javascript

    The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

    maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
     // should be 6: [4, -1, 2, 1]
   Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array.
    If the list is made up of only negative numbers, return 0 instead.

   Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

\*** ======================================================================================== ***/

// RESEARCH :- https://en.wikipedia.org/wiki/Maximum_subarray_problem

// const getSum = arr => arr.reduce((acc, curr) => acc + curr, 0);

function maxSequence(arr) {
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    let curr = 0;

    for (let j = i; j < arr.length; j++) {
      curr += arr[j];
      max = Math.max(curr, max);
    }
  }

  return max;
}

function maxSequence(arr) {
  let max = 0;
  let cur = 0;

  for (let value of arr) {
    cur = Math.max(0, cur + value);
    max = Math.max(max, cur);
  }

  return max;
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
