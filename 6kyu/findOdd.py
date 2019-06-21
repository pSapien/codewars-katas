'''
  Given an array, find the int that appears an odd number of times.

  There will always be only one integer that appears an odd number of times.
'''


def find_it(arr):
  for int in arr:
    if arr.count(int) % 2 > 0:
      return int
    