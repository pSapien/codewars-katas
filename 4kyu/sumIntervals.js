/*** ===================================================================== ***\
 ** - PROBLEM ------------------------------------------------------ **
 * ========================================================================= *
 *
 
  Write a function called sumIntervals/sum_intervals() that accepts an array of intervals, and returns the sum of all the interval lengths.
  Overlapping intervals should only be counted once. 
  Intervals are represented by a pair of integers in the form of an array.
  The first value of the interval will always be less than the second value. 
  Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.
 

 * https://www.codewars.com/kata/sum-of-intervals/train/javascript

 EXAMPLES

 sumIntervals( [ [1,2], [6, 10], [11, 15] ] ); // => 9
 sumIntervals( [ [1,4], [7, 10], [3, 5] ] ); // => 7
 sumIntervals( [ [1,5], [10, 20], [1, 6], [16, 19], [5, 11] ] ); // => 19

 
\*** ===================================================================== ***/

const getRangeOf = arr => {
  const head = arr[0];
  const tail = arr[1];
  const limit = tail - head;

  const range = [];
  for (let i = 1; i <= limit; i++) {
    range.push(head + i);
  }

  return range;
};

const sumIntervals = intervals => {
  const rangeOfIntervals = new Set();

  for (const interval of intervals) {
    for (const rangeOfInterval of getRangeOf(interval)) {
      rangeOfIntervals.add(rangeOfInterval);
    }
  }

  return rangeOfIntervals.size;
};

// console.log(sumIntervals([[1, 5], [10, 20], [1, 6], [16, 19], [5, 11]])); //19
console.log(sumIntervals([[1, 2], [6, 10], [11, 15]])); //9
