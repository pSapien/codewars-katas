
'''
    #  Return the number (count) of vowels in the given string.
    # We will consider a, e, i, o, and u as vowels for this Kata.
    # The input string will only consist of lower case letters and/or spaces.
    '''


def get_count(str):
    return sum(char in 'aeiou' for lower(char) in str)
