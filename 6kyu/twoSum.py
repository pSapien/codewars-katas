
'''
https: // www.codewars.com/kata/two-sum/train/python

Write a function that takes an array of numbers(integers for the tests) and a target number.
It should find two different items in the array that, when added together, give the target value.
The indices of these items should then be returned in an array like so: [index1, index2].

For the purposes of this kata, some tests may have multiple answers any valid solutions will be accepted.

The input will always be valid(numbers will be an array of length 2 or greater, and all of the items will be numbers
                               target will always be the sum of two different items from that array).

'''


def two_sum(numbers, target):
    cache = {}

    for i, num in enumerate(numbers):
        res = target - num

        if num in cache:
            return [cache[num], i]

        cache[res] = i
