/*** ===================================================================== ***\
 ** - PROBLEM ------------------------------------------------------ **
 * ========================================================================= *
 *
 * https://www.codewars.com/kata/5426d7a2c2c7784365000783/train/javascript

  Write a function which makes a list of strings representing all of the ways you can balance n pairs of parentheses

  Examples
    balancedParens(0) => [""]
    balancedParens(1) => ["()"]
    balancedParens(2) => ["()()","(())"]
    balancedParens(3) => ["()()()","(())()","()(())","(()())","((()))"]
\*** ===================================================================== ***/

const OPENING_BRACKET = '(';
const CLOSING_BRACKET = ')';

function balancedParens(n) {
  if (n === 0) return [];

  return generateParens('', n, 0);
}

function generateParens(curr, numOpening, numClosing) {
  if (numOpening === 0) {
    const closeParens = CLOSING_BRACKET.repeat(numClosing);

    return [curr + closeParens];
  }

  if (numClosing === 0) {
    return generateParens(
      curr + OPENING_BRACKET,
      numOpening - 1,
      numClosing + 1
    );
  }

  return (
    generateParens(curr + OPENING_BRACKET, numOpening - 1, numClosing + 1) +
    generateParens(curr + CLOSING_BRACKET, numOpening, numClosing - 1)
  );
}

console.log(balancedParens(0));
console.log(balancedParens(1));
console.log(balancedParens(2));
// console.log(balancedParens(3));
