/*** ===================================================================== ***\
 ** - PROBLEM ------------------------------------------------------ **
 * ========================================================================= *

  Complete the function scramble(str1, str2) that
  returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.


  http://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript

  Notes:

  Only lower case letters will be used (a-z). No punctuation or digits will be included.
  Performance needs to be considered


\*** ===================================================================== ***/

function scramble(str1, str2) {
  let letterCounts = {};

  for (let letter of str1) {
    letterCounts[letter] = letterCounts[letter] || 0;
    letterCounts[letter]++;
  }

  let str2ExistsInStr1 = true;
  for (let letter of str2) {
    const letterOfStr2IsInStr1 = letterCounts[letter] > 0;

    if (!letterOfStr2IsInStr1) {
      str2ExistsInStr1 = false;
      break;
    }

    letterCounts[letter]--;
  }

  return str2ExistsInStr1;
}

console.log(scramble('rkqodlw', 'world'), true);
console.log(scramble('cedewaraaossoqqyt', 'codewars'), true);
console.log(scramble('katas', 'steak'), false);
console.log(scramble('scriptjava', 'javascript'), true);
console.log(scramble('scriptingjava', 'javascript'), true);
console.log(scramble('scriptsjava', 'javascripts'), true);
console.log(scramble('jscripts', 'javascript'), false);
console.log(scramble('aabbcamaomsccdd', 'commas'), true);
