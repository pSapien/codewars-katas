/*** ===================================================================== ***\
 ** - PROBLEM ------------------------------------------------------ **
 * ========================================================================= *
 * Return the number (count) of vowels in the given string.

  We will consider a, e, i, o, and u as vowels for this Kata.

  The input string will only consist of lower case letters and/or spaces.
\*** ===================================================================== ***/

function getCount(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelsCount = 0;

  for (let char of str) {
    if (vowels.includes(char.toLowerCase())) vowelsCount++;
  }

  return vowelsCount;
}
