/*** ===================================================================== ***\
 ** - PROBLEM ------------------------------------------------------ **
 * ========================================================================= *
 The input is a string str of digits. 
 Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).
If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk. 
Otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

If sz is <= 0 or if str is empty return ""
   sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".

Examples:
  revrot("123456987654", 6) --> "234561876549"
  revrot("123456987653", 6) --> "234561356789"
  revrot("66443875", 4) --> "44668753"
  revrot("66443875", 8) --> "64438756"
  revrot("664438769", 8) --> "67834466"
  revrot("123456779", 8) --> "23456771"
  revrot("", 8) --> ""
  revrot("123456779", 0) --> "" 
  revrot("563000655734469485", 4) --> "0365065073456944"

\*** ===================================================================== ***/

function revrot(str, sz) {
  if (sz <= 0 || str.length === 0) return '';

  let strArr = [];

  for (let i = 0; i < str.length; i = i + sz) {
    const slicedString = str.slice(i, sz + i);

    if (slicedString.length === sz) {
      const sumStr = checkSum(slicedString);

      if (sumStr % 2 === 0) {
        const revStr = reverse(slicedString);
        strArr = [...strArr, revStr];
      } else {
        const rotStr = rotate(slicedString);
        strArr = [...strArr, rotStr];
      }
    }
  }

  return strArr.join('');
}
const checkSum = s => [...str].reduce((acc, cv) => acc + Math.pow(cv, 3), 0);
const rotate = s => s.slice(1) + slice(0, 1);
const reverse = s =>
  s
    .split('')
    .reverse()
    .join('');

// REFACTORED
const revrot = (str, sz) =>
  sz < 1 || sz > str.length
    ? ''
    : str
        .match(new RegExp('.{' + sz + '}', 'g'))
        .map(c => (sum_cubes(c) % 2 ? rotate(c) : reverse(c)))
        .join('');
