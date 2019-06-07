/*** ===================================================================== ***\
 ** - PROBLEM ------------------------------------------------------ **
 * ========================================================================= *
 *
 * https://www.codewars.com/kata/is-a-number-prime/train/javascript


Define a function that takes one integer argument and returns true or false depending on if the integer is a prime.

Define a function that takes one integer argument and returns logical value true or false depending on if the integer is a prime.

Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

Assumptions
You can assume you will be given an integer input.
You can not assume that the integer will be only positive. You may be given negative numbers as well (or 0).
Per wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
\*** ===================================================================== ***/

function isPrime(num) {
  if (num < 2) return false;

  const squareRoot = Math.sqrt(num);
  for (let i = 2; i <= squareRoot; i++) {
    if (num % i === 0) return false;
  }

  return true;
}
