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

function stray(numbers) {
  numbers.sort();

  const first = numbers[0];
  const second = numbers[1];
  const last = numbers[numbers.length - 1];

  return first === second ? last : first;
}

//ELEGANT SOLUTION

const nums = () => nums.reduce((a, b) => a ^ b);

console.log(stray([8, 1, 1, 1, 1, 1, 1]));
// console.log(stray([17, 17, 3, 17, 17, 17, 17]));
