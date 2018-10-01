/*** ===================================================================== ***\
 ** - PROBLEM ------------------------------------------------------ **
 * ========================================================================= *
 *
 * http://www.codewars.com/kata/5324945e2ece5e1f32000370/train/javascript

  Given the string representations of two integers, return the string representation of the sum of those integers.

  For example:

    sumStrings('1','2') // => '3'
    A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

\*** ===================================================================== ***/

function sumStrings(a, b) {
  let total = '',
    currentSum = 0,
    carriedOver = 0;

  a = a.split('');
  b = b.split('');

  while (a.length || b.length || Boolean(carriedOver)) {
    currentSum = carriedOver + ~~a.pop() + ~~b.pop();
    total = (currentSum % 10) + total;
    carriedOver = currentSum > 9 ? 1 : 0;
  }

  while (total.startsWith(0)) {
    total = removeStartingZero(total);
  }

  return total;
}

const removeStartingZero = str => str.slice(1, str.length);
