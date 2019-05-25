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
  if (num === 1 || num === -1) {
    return false;
  }

  const multipliers = [2, 3, 5, 7];

  let isPrime = true;
  for (let multiplier of multipliers) {
    if (num === multiplier) {
      return isPrime;
    }

    if (num % multiplier === 0) {
      isPrime = false;

      return isPrime;
    }
  }

  return isPrime;
}
