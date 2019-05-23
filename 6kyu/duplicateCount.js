/*** ===================================================================== ***\
 ** - PROBLEM ------------------------------------------------------ **
 * ========================================================================= *
 *
 * https://www.codewars.com/kata/counting-duplicates/train/javascript

  Count the number of Duplicates
    Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits 
    that occur more than once in the input string.
     The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
  "abcde" -> 0 # no characters repeats more than once
  "aabbcde" -> 2 # 'a' and 'b'
  "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
  "indivisibility" -> 1 # 'i' occurs six times
  "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
  "aA11" -> 2 # 'a' and '1'
  "ABBA" -> 2 # 'A' and 'B' each occur twice
\*** ===================================================================== ***/

function duplicateCount(text) {
  const lowerCased = text.toLowerCase();
  let duplicates = {};
  let duplicatesCount = 0;

  for (let char of lowerCased) {
    if (typeof duplicates[char] !== 'undefined') {
      duplicates[char]++;

      const charRepeated = duplicates[char] === 2;
      if (charRepeated) duplicatesCount++;
    } else {
      duplicates[char] = 1;
    }
  }

  return duplicatesCount;
}

console.log(duplicateCount('abcde'));
console.log(duplicateCount('aabbcde'));
console.log(duplicateCount('aA11'));
console.log(duplicateCount('Indivisibilities'));
