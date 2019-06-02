'''
This time no story, no theory. 
The examples below show you how to write function accum:

Examples:

  accum("abcd") -> "A-Bb-Ccc-Dddd"
  accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
  accum("cwAt") -> "C-Ww-Aaa-Tttt"
'''


def accum(s):
    return '-'.join([char.upper() + char.lower() * count for count,
                     char in enumerate(s)])


accum('abcd')
