/*** ===================================================================== ***\
 ** - PROBLEM ------------------------------------------------------ **
 * ========================================================================= *
 *
 * 
 * @url https://www.codewars.com/kata/5659c6d896bc135c4c00021e/train/javascript

  Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits.

  For example:

    nextSmaller(21) == 12
    nextSmaller(531) == 513
    nextSmaller(2071) == 2017
    Return -1 (for Haskell: return Nothing), when there is no smaller number that contains the same digits. Also return -1 when the next smaller number with the same digits would require the leading digit to be zero.

    nextSmaller(9) == -1
    nextSmaller(111) == -1
    nextSmaller(135) == -1
    nextSmaller(1027) == -1 // 0721 is out since we don't write numbers with leading zeros
    some tests will include very large numbers.
    test data only employs positive integers.

\*** ===================================================================== ***/

const removeAndReturnTheRest = (arr, toBeRemoved) => { 
  const a = [...arr];
  const removableIndex = a.findIndex(n => n === toBeRemoved);
  a.splice(removableIndex, 1);
  return a;
}

function nextSmaller(n) {
  const numArr = String(n).split('');
  const firstDigit = numArr[0];
  let res = [];

  numArr.forEach(num => {
    if (num > firstDigit || res[num] || num == 0) return;

    console.log(num);
    const other = removeAndReturnTheRest(numArr, num);

    let r = 0;
    if (num === firstDigit) {
      const lowest = sortBy(other, (a, b) => a > b);
      r = num + (lowest.join(''));
    } else { 
      const highest = sortBy(other, (a, b) => b > a);
      r = num + (highest.join(''));
    }

    if (r < n) res.push(r);
  });

  if (res.length === 0) return -1;
  return Math.max(...res);
}

// console.log(nextSmaller(21), 12);
// console.log(nextSmaller(907), 790);
// console.log(nextSmaller(531), 513);
// console.log(nextSmaller(2071), 2017)
// console.log(nextSmaller(1072), 1027);
// console.log(nextSmaller(28292), 28229);
// console.log(nextSmaller(6960), 6906);