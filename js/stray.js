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

//MY SOLUTION

function stray(nums) {
  const maxNum = Math.max(...nums);
  const minNum = Math.min(...nums);

  if (maxNum === nums[0] && maxNum === nums[1]) return minNum;

  return maxNum;
}

//ELEGANT SOLUTION

const nums = () => nums.reduce((a, b) => a ^ b);
