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

function validParentheses(brackets) {
  const stack = [];

  for (let bracket of brackets) {
    if (bracket === '(') {
      stack.push(bracket);
    } else {
      if (stack.length === 0) return false;

      stack.pop();
    }
  }

  return stack.length === 0;
}

console.log(validParentheses('()')); //  true
console.log(validParentheses('()()((()'));
console.log(validParentheses(')(()))')); //  false
console.log(validParentheses('(')); //  false
console.log(validParentheses('(())((()())())')); //  true
