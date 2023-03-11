/**
 * @param {string} str
 * @url https://www.codewars.com/kata/57f8ff867a28db569e000c4a/train/javascript
 */
function kebabize(str) {
  let res = "";

  for (const char of str) {
    if (isNumber(char)) continue;

    if (isUpperCase(char)) {
      if (res.length > 0) res += "-";
      res += char.toLowerCase();
    } else {
      res += char;
    }
  }

  return res;
}

function isUpperCase(char) {
  return char.toUpperCase() === char;
}

function isNumber(str) {
  return !Number.isNaN(Number(str));
}

console.log(kebabize("myCamelCasedString"), "my-camel-cased-string");
console.log(kebabize("myCamelHas3Humps"), "my-camel-has-humps");
console.log(kebabize("-dxstp"), "dxstp");
console.log(kebabize("Slo1"), "slo");
