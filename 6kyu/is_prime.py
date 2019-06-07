import math


def is_prime(num):
    if num < 2:
        return False

    square_root = int(math.sqrt(num))

    for multiplier in range(2, square_root + 1):
        if(num % multiplier == 0):
            return False

    return True
