/*** ===================================================================== ***\
 ** - PROBLEM ------------------------------------------------------ **
 * ========================================================================= *
This time no story, no theory. The examples below show you how to write function accum:

Examples:

  accum("abcd") -> "A-Bb-Ccc-Dddd"
  accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
  accum("cwAt") -> "C-Ww-Aaa-Tttt"

\*** ===================================================================== ***/

const accum = s =>
  s
    .toLowerCase()
    .split('')
    .map((char, count) => `${char.toUpperCase()}${char.repeat(count)}`)
    .join('-');
