/*** ===================================================================== ***\
 ** - PROBLEM ------------------------------------------------------ **
 * ========================================================================= *
 
Write Number in Expanded Form - Part 2
This is version 2 of my 'Write Number in Exanded Form' Kata.

You will be given a number and you will need to return it as a string in Expanded Form. 

For example:
    expandedForm(1.24); // should return '1 + 2/10 + 4/100'
    expandedForm(7.304); // should return '7 + 3/10 + 4/1000'
    expandedForm(0.04); // should return '4/100'

\*** ===================================================================== ***/

const numberOfZero = (len, id) => len - id - 1;
const concatZeros = (n, nz) => `${n}${'0'.repeat(nz)}`;
const concatSlashZero = (n, idx) => `${n}/${1}${'0'.repeat(idx)}`;

const expandForm = (str, isBeforeDec) =>
  [...str]
    .map(
      (n, idx, arr) =>
        n != 0
          ? isBeforeDec
            ? concatZeros(n, numberOfZero(arr.length, idx))
            : concatSlashZero(n, idx + 1)
          : null
    )
    .filter(x => !!x)
    .join(' + ');

const expandedForm = nums => {
  const arr = nums.toString().split('.');
  const befDec = expandForm(arr[0], true);
  const aftDec = expandForm(arr[1], false);

  return befDec ? `${befDec} + ${aftDec}` : `${aftDec}`;
};
