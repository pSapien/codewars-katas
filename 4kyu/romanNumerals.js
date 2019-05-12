/*** ===================================================================== ***\
 ** - PROBLEM ------------------------------------------------------ **
 * ========================================================================= *
 *
 * https://www.codewars.com/kata/roman-numerals-helper/train/javascript
 
   Create a RomanNumerals class that can convert a roman numeral to and from an integer value. 
   Multiple roman numeral values will be tested for each helper method.
   Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. 
   In Roman numerals,
    1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 
    2008 is written as 2000=MM, 8=VIII; or MMVIII. 
    1666 uses each Roman symbol in descending order: MDCLXVI.

   I => 1  
   V => 5  
   X => 10 
   L => 50 
   C => 100 
   D => 500 
   M => 1000 

\*** ===================================================================== ***/

const RomanNumeralsToNumbersHash = new Map([
  [1000, 'M'],
  [900, 'CM'],
  [400, 'CD'],
  [500, 'D'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I'],
]);

function swap(input) {
  const output = new Map();

  for (const [key, value] of input) {
    output.set(value, key);
  }

  return output;
}

const NumbersToRomanNumeralsHash = swap(RomanNumeralsToNumbersHash);

const RomanNumerals = {
  toRoman(numbers) {
    let roman = '';

    for (const [inNumbers, inRoman] of RomanNumeralsToNumbersHash) {
      while (numbers >= inNumbers) {
        roman += inRoman;
        numbers -= inNumbers;
      }
    }

    return roman;
  },

  fromRoman(roman) {
    let numbers = 0;
    let visited = '';

    const earlyMatch = NumbersToRomanNumeralsHash.get(roman);
    if (earlyMatch) {
      return earlyMatch;
    }

    for (let i = 0; i < roman.length; i++) {
      const romanChar = roman[i];

      numbers += NumbersToRomanNumeralsHash.get(romanChar);
      visited += romanChar;

      const nonVisited = roman.replace(visited, '');
      const nonVisitedMatch = NumbersToRomanNumeralsHash.get(nonVisited);
      if (nonVisitedMatch) {
        numbers += nonVisitedMatch;

        break;
      }
    }

    return numbers;
  },
};

console.log(RomanNumerals.toRoman(1991)); //'MCMXCI'
console.log(RomanNumerals.toRoman(999)); //"CMXCIX"
console.log(RomanNumerals.toRoman(1000)); // 'M'
console.log(RomanNumerals.toRoman(4)); //'IV'
console.log(RomanNumerals.toRoman(1)); //'I'
console.log(RomanNumerals.toRoman(2006)); //'MMVI'
console.log(RomanNumerals.toRoman(2020)); //'MMXX'

console.log(RomanNumerals.fromRoman('XXI')); //21
console.log(RomanNumerals.fromRoman('I')); //1
console.log(RomanNumerals.fromRoman('III')); //3
console.log(RomanNumerals.fromRoman('IV')); //4
console.log(RomanNumerals.fromRoman('MMVII')); //2007
console.log(RomanNumerals.fromRoman('MDCLXIX')); //1669
