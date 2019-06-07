'''
  Write a function that takes a string of braces, and determines if the order of the braces is valid.
  It should return true if the string is valid, and false if it's invalid.
  This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets[], and curly braces {}.
  Thanks to @arnedag for the idea!

  All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

  What is considered Valid?
  A string of braces is considered valid if all braces are matched with the correct brace.

  Exampls
  "(){}[]" = >  True
  "([{}])" = >  True
  "(}" = >  False
  "[(])" = >  False
'''


def valid_braces(brackets):
    opening_brackets = '({['
    closing_brackets = ')}]'
    closing_to_opening = {']': '[', '}': '{', ')': '('}

    stack = []

    for bracket in brackets:
        if(bracket in opening_brackets):
            stack.append(bracket)
        else:
            if len(stack) == 0 or stack[-1] != closing_to_opening.get(bracket):
                return False

            stack.pop()

    return len(stack) == 0
