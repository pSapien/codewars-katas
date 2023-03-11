/**
 * @url https://www.codewars.com/kata/587731fda577b3d1b0001196/train/javascript
 */

String.prototype.camelCase = function () {
  if (this.length === 0) return "";

  let res = this[0].toUpperCase();

  for (let i = 1; i < this.length; i++) {
    const char = this[i];

    if (char === " ") {
      res += this[i + 1].toUpperCase();
      i++;
    } else {
      res += char;
    }
  }

  return res;
};

console.log("test case".camelCase(), "TestCase");
console.log("camel Case method".camelCase(), "CamelCaseMethod");
console.log("say hello".camelCase(), "SayHello");
console.log("camel case word".camelCase(), "CamelCaseWord");
console.log("".camelCase(), "");
