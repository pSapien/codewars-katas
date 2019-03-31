/*** ===================================================================== ***\
 ** - PROBLEM ------------------------------------------------------ **
 * ========================================================================= *

  Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.


  https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

\*** ===================================================================== ***/

const ZEROS = ['0', 0];

function moveZeros(arr) {
  const withZeros = arr.filter(v => ZEROS.includes(v));
  const withoutZeros = arr.filter(v => !ZEROS.includes(v));

  return [...withoutZeros, ...withZeros];
}
