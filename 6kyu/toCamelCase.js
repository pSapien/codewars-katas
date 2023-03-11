/**
 * Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
 * 
 * @url https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript

    Examples
    "the-stealth-warrior" gets converted to "theStealthWarrior"

    "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

    "The_Stealth-Warrior" gets converted to "TheStealthWarrior"
 */

/**
 * @param {string} str
 */
function toCamelCase(str) {
  if (str.length === 0) return str;

  let res = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "-" || str[i] === "_") {
      res += str[i + 1].toUpperCase();
      i++;
    } else {
      res += str[i];
    }
  }

  return res;
}

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
console.log(toCamelCase("The_Stealth-Warrior"));
