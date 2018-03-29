/*** ===================================================================== ***\
 ** - PROBLEM ------------------------------------------------------ **
 * ========================================================================= *
 
    This time we want to write calculations using functions and get the results. Let's have a look at some examples:
    `    seven(times(five())); // must return 35
        four(plus(nine())); // must return 13
        eight(minus(three())); // must return 5
        six(dividedBy(two())); // must return 3`

    Requirements:
        There must be a function for each number from 0 ("zero") to 9 ("nine")
        There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby)
        Each calculation consist of exactly one operation and two numbers
        The most outer function represents the left operand, the most inner function represents the right operand

\*** ===================================================================== ***/


const calculate = (n, fn) => fn ? fn(n) : n;

const zero = fn => calculate(0, fn);
const one = fn => calculate(1, fn);
const two = fn => calculate(2, fn);
const three = fn => calculate(3, fn);
const four = fn => calculate(4, fn);
const five = fn => calculate(5, fn);
const six = fn => calculate(6, fn);
const seven = fn => calculate(7, fn);
const eight = fn => calculate(8, fn);
const nine = fn => calculate(9, fn);

const plus = b => a => a + b;
const minus = b => a => a - b;
const times = b => a => a * b;
const dividedBy = b => a => a / b;

// refactored but hurts readability.
// I should be killed for this.
// less lines of code doesn`t always mean the best solution.

['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    .forEach((name, n) => this[name] = fn => fn ? fn(n) : n);

const plus = b => a => a + b;
const minus = b => a => a - b;
const times = b => a => a * b;
const dividedBy = b => a => a / b;
