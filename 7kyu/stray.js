/*** ===================================================================== ***\
 ** - PROBLEM ------------------------------------------------------ **
 * ========================================================================= *
 * You are given an odd-length array of integers, in which all of them are the same, except for one single number.
 * Complete the method which accepts such an array, and returns that single different number.
 * The input array will always be valid! (odd-length >= 3).
 
* Examples
* [1, 1, 2] ==> 2
* [17, 17, 3, 17, 17, 17, 17] ==> 3

\*** ===================================================================== ***/

const isNumInArr = (num, numsArr) => num === numsArr[0] && num === numsArr[1];

const stray = nums => {
  const max = Math.max(...nums);
  const min = Math.min(...nums);

  return isNumInArr(max, nums) ? min : max;
};

//ELEGANT SOLUTION

const nums = () => nums.reduce((a, b) => a ^ b);
