/**
 *
 * @param {string} url
 * @returns {string}
 *
 * @url https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript
 */

const matchers = ["http://www.", "https://www.", "http://", "https://", "www."];

function domainName(url) {
  const match = matchers.find((match) => url.includes(match));

  /** remove the match part */
  if (match) url = url.split(match)[1];

  const beforeDot = url.split(".")[0];
  return beforeDot;
}

console.log(domainName("http://google.com"));
console.log(domainName("http://google.co.jp"));
console.log(domainName("www.xakep.ru"));
console.log(domainName("https://youtube.com"));
