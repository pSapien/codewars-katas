/**
 * @url https://www.codewars.com/kata/56a1c074f87bc2201200002e/train/javascript
 * @param {array<number>} nums
 * @returns array of number
 */

function smaller(nums) {
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    let lessCount = 0;

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[i]) lessCount++;
    }

    res.push(lessCount);
  }

  return res;
}

console.log(smaller([5, 4, 3, 2, 1]));
