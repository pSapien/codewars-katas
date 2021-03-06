'''
This kata is to practice simple string output. Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

###Task:

You need to return a string that displays a diamond shape on the screen using asterisk ("*") characters. Please see provided test cases for exact output format.

The shape that will be returned from print method resembles a diamond, where the number provided as input represents the number of *’s printed on the middle line. The line above and below will be centered and will have 2 less *’s than the middle line. This reduction by 2 *’s for each line continues until a line with a single * is printed at the top and bottom of the figure.

Return null if input is even number or negative (as it is not possible to print diamond with even number or negative number).

Please see provided test case(s) for examples.

Python Note
Since print is a reserved word in Python, Python students must implement the diamond(n) method instead, and return None for invalid input.
'''

def is_negative(n):
  return n <= 0

def is_even(n):
  return n % 2 == 0

def stars_with_spaces(num_stars, num_spaces):
  return num_spaces * ' ' + num_stars * '*' + '\n'

def diamond(n):
  if (is_negative(n) or is_even(n)):
    return None

  res = [None] * n
  mid_point = int((n - 1) / 2)

  num_stars = n
  num_spaces = 0

  for i in range(mid_point + 1)[::-1]:
    stars = stars_with_spaces(num_stars, num_spaces)

    res[mid_point - num_spaces] = stars
    res[mid_point + num_spaces] = stars

    num_spaces += 1 
    num_stars -= 2
  
  return ('').join(res)