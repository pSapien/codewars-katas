'''

  Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.


  https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/python

'''



def move_zeros(arr):
  without_zeros = []
  with_zeros = []

  for num in arr:
    isZero = num == 0
    isInt = type(num) == int
    isFloat = type(num) == float

    with_zeros.append(num) if isZero and isInt or isFloat else without_zeros.append(num) 
    
  return without_zeros + with_zeros