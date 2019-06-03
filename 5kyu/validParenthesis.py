'''
 Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

  Examples
    "()"              =>  true
    ")(()))"          =>  false
    "("               =>  false
    "(())((()())())"  =>  true

    Constraints
      0 <= input.length <= 100
'''


def valid_parentheses(string):
    count = 0

    for char in string:
        if char == '(':
            count += 1

        if char == ')':
            if count > 0:
                count -= 1
            else:
                return False

    return count == 0
