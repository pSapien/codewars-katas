/**
 * 
 * @url https://www.codewars.com/kata/54c9fcad28ec4c6e680011aa/train/javascript

  At a job interview, you are challenged to write an algorithm to check if a given string, s, can be formed from two  other strings, part1 and part2.

    The restriction is that the characters in part1 and part2 should be in the same order as in s.

    The interviewer gives you the following example and tells you to figure out the rest from the given test cases.

    For example:

    'codewars' is a merge from 'cdw' and 'oears':

        s:  c o d e w a r s   = codewars
    part1:  c   d   w         = cdw
    part2:    o   e   a r s   = oears
 */

/**
 * @url https://www.codewars.com/kata/54c9fcad28ec4c6e680011aa/train/javascript
 * @param {string} whole
 * @param {string} part1
 * @param {string} part2
 * @returns boolean
 */
function isMerge(whole, part1, part2) {
  return (
    isLenValid(whole, part1, part2) &&
    checkStringPartMatchWithOrdering(whole, part1) &&
    checkStringPartMatchWithOrdering(whole, part2) &&
    checkWholeStringMatch(whole, part1 + part2)
  );
}

/**
 *
 * @param {string} whole
 * @param {string} part
 * @returns boolean
 */
function checkStringPartMatchWithOrdering(whole, part) {
  let pointer = 0;
  let visited = "";

  for (const char of part) {
    for (let i = pointer; i < whole.length; i++) {
      if (whole[i] === char) {
        pointer = i;
        visited += char;
        break;
      }
    }
  }

  return visited === part;
}

function findCharOccuranceIndexes(list, char) {
  return list.map((listChar, idx) => (listChar === char ? idx : -1)).filter((v) => v > -1);
}

function checkWholeStringMatch(whole, part) {
  let remaining = whole;

  for (let i = 0; i < part.length; i++) {
    const partChar = part[i];

    const currentCharPointer = remaining.indexOf(partChar);
    if (currentCharPointer > -1) {
      remaining = remaining.replace(partChar, "");
      continue;
    }

    return false;
  }

  return remaining.length === 0;
}

function isLenValid(whole, part1, part2) {
  if (whole.length !== part1.length + part2.length) return false;
  if (whole.length > part1.length + part2.length) return false;
  if (whole.length < part1.length + part2.length) return false;
  return true;
}

console.log(isMerge("xcyc", "xc", "cy"), true);
console.log(isMerge("codewars", "code", "ears"), false);
console.log(isMerge("codewars", "code", "wasr"), false);
console.log(isMerge("Bananas from Bahamas", "Bahas", "Bananas from am"), true);
console.log(isMerge("a$UlvQr5tNyMa*h9u2p5wlv#Zkj", "aQNyM*h9u2p5lv#kj", "$Ulvr5tawZ"), true);
console.log(isMerge("y/F7_8=v1y/F7_?P^IMW?kn", "y/F7_?P^I", "y/F7_8=v1MW?kn"), true);
