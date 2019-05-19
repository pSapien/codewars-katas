/*** ===================================================================== ***\
 ** - PROBLEM ------------------------------------------------------ **
 * ========================================================================= *
 * https://www.codewars.com/kata/two-sum/train/javascript
 * 
 * 
 
 Write a function that takes an array of numbers (integers for the tests) and a target number.
 It should find two different items in the array that, when added together, give the target value. 
 The indices of these items should then be returned in an array like so: [index1, index2].

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

\*** ===================================================================== ***/

const twoSum = (nums, target) => {
  const cache = new Map();

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    const res = target - value;

    if (cache.has(value)) {
      return [cache.get(value), i];
    }

    cache.set(res, i);
  }
};
