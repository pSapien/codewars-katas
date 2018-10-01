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
  str1 = str1.split('');
  str2 = str2.split('');

  let isMatch = false;

  for (let i = 0; i < str2.length; i++) {
    if (str1.includes(str2[i])) {
      isMatch = true;
    } else {
      isMatch = false;
      break;
    }
  }

  // if (str1.length === str2.length && isMatch) isMatch = false;

  return isMatch;
}

// const answer = scramble('rkqodlw', 'world');
// const answer = scramble('katas', 'steak');
// const answer = scramble('scriptjava', 'javascript');
// const answer = scramble('scriptingjava', 'javascript');
// const answer = scramble('scriptsjava', 'javascripts');

const answer = scramble('scriptjavx', 'javascript');
answer;
