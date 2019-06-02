
'''
    #  Return the number (count) of vowels in the given string.
    # We will consider a, e, i, o, and u as vowels for this Kata.
    # The input string will only consist of lower case letters and/or spaces.
    '''


def getCount(str):
    vowels = ['a', 'e', 'i', 'o', 'u']
    vowelsCount = 0

    for char in str:
        if char in vowels:
            vowelsCount += 1

    return vowelsCount
