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

function balancedParens(n) {
  let parens = [];

  function generateParens(curr, numOpening, numClosing) {
    if (numOpening === 0 && numClosing === 0) {
      parens.push(curr);
    }

    if (numOpening > 0) {
      generateParens(curr + '(', numOpening - 1, numClosing + 1);
    }

    if (numClosing > 0) {
      generateParens(curr + ')', numOpening, numClosing - 1);
    }
  }

  generateParens('', n, 0);

  return parens;
}

// console.log(balancedParens(0));
console.log(balancedParens(1));
console.log(balancedParens(2));
// console.log(balancedParens(3));
