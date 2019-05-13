/*** ===================================================================== ***\
 ** - PROBLEM ------------------------------------------------------ **
 * ========================================================================= *
 *
 * https://www.codewars.com/kata/valid-parentheses/train/javascript

  Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

  Examples
    "()"              =>  true
    ")(()))"          =>  false
    "("               =>  false
    "(())((()())())"  =>  true
  
    Constraints
      0 <= input.length <= 100



\*** ======================================================================================== ***/

function validParentheses(parens) {
  if (parens.startsWith(')') || parens.endsWith('(')) return false;

  let openingParenCount = 0;
  let closingParenCount = 0;

  for (let paren of parens) {
    if (paren === '(') openingParenCount++;
    if (paren === ')') closingParenCount++;
  }

  return openingParenCount === closingParenCount;
}

const getCount = brackets => bracketShape =>
  brackets.filter(bracket => bracket === bracketShape).length;

function validParentheses(parens) {
  if (parens.startsWith(')') || parens.endsWith('(')) return false;

  const getCountOfShape = getCount(parens.split(''));

  return getCountOfShape('(') === getCountOfShape(')');
}

// console.log(validParentheses('()')); //  true
// console.log(validParentheses('()()((()'));
// console.log(validParentheses(')(()))')); //  false
// console.log(validParentheses('(')); //  false
// console.log(validParentheses('(())((()())())')); //  true
