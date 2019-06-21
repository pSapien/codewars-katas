'''
https://www.codewars.com/kata/5426d7a2c2c7784365000783/train/python

  Write a function which makes a list of strings representing all of the ways you can balance n pairs of parentheses

  Examples
    balancedParens(0) => [""]
    balancedParens(1) => ["()"]
    balancedParens(2) => ["()()","(())"]
    balancedParens(3) => ["()()()","(())()","()(())","(()())","((()))"]
    '''

def balanced_parens(brackets_num):
  parens = []

  def generate_parens(curr, num_opening, num_closing):
    if (num_opening == 0 and num_closing == 0):
      parens.append(curr)
    
    if (num_opening > 0):
      generate_parens(curr + '(', num_opening - 1, num_closing + 1)

    if (num_closing > 0):
      generate_parens(curr + ')', num_opening, num_closing - 1)

  generate_parens('', brackets_num, 0)

  return parens
 