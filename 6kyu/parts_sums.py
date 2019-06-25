'''
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
'''
from functools import reduce

def get_sum(arr):
  if (len(arr) == 0):
    return 0
  return reduce(lambda x, y: x + y, arr)

def parts_sums(ls):
  sum = get_sum(ls)
  res = [sum]

  prev = 0
  for num in ls:
    prev += num
    res.append(sum - prev)

  return res