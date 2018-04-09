/*** ===================================================================== ***\
 ** - PROBLEM ------------------------------------------------------ **
 * ========================================================================= *
 
You will be given a number and you will need to return it as a string in Expanded Form.

For example:
    expandedForm(12); // Should return '10 + 2'
    expandedForm(42); // Should return '40 + 2'
    expandedForm(70304); // Should return '70000 + 300 + 4'

\*** ===================================================================== ***/

const expandedForm = nums =>
  nums
    .toString()
    .split('')
    .map((n, idx, arr) => (n != 0 ? concatZeros(n, numberOfZero(arr.length, idx)) : null))
    .filter(x => !!x)
    .join(' + ');

const numberOfZero = (len, id) => len - id - 1;
const concatZeros = (n, nz) => `${n}${'0'.repeat(nz)}`;
