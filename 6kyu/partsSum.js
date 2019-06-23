/*
  Let us consider this example(array written in general format):

  ls = [0, 1, 3, 6, 10]

  Its following parts:

  ls = [0, 1, 3, 6, 10]
  ls = [1, 3, 6, 10]
  ls = [3, 6, 10]
  ls = [6, 10]
  ls = [10]
  ls = []
  The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]
*/

const getSum = arr => arr.reduce((curr, acc) => curr + acc, 0);

function partsSums(ls) {
  const sum = getSum(ls);
  const res = [sum];

  let prev = 0;
  ls.forEach(num => {
    prev += num;
    res.push(sum - prev);
  });

  return res;
}

// 20, 20, 19, 16, 10, 0]
console.log(partsSums([0, 1, 3, 6, 10]));
