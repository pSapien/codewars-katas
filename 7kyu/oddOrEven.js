/*** ===================================================================== ***\
 ** - PROBLEM ------------------------------------------------------ **
 * ========================================================================= *
Given an array of numbers, determine whether the sum of all of the numbers is odd or even.

Give your answer in string format as 'odd' or 'even'.

If the input array is empty consider it as: [0] (array with a zero).

Example:

oddOrEven([0]) returns "even"
oddOrEven([2, 5, 34, 6]) returns "odd"
oddOrEven([0, -1, -5]) returns "even"

\*** ===================================================================== ***/

const oddOrEven = array => (sum(array) % 2 === 0 ? 'even' : 'odd');
const sum = arr => arr.reduce((acc, cv) => acc + cv, 0);
