function revrot(str, sz) {
  let strArr = [];
  if (sz <= 0 && str.length === 0) return '';

  for (let i = 0; i < str.length; i = i + sz) {
    const slicedString = str.slice(i, sz + i);
    if (slicedString.length === sz) {
      const sumStr = checkSum(slicedString);

      if (sumStr % 2 === 0) {
        const revStr = reverseStr(slicedString);
        strArr = [...strArr, revStr];
      } else {
        const rotStr = rotateString(slicedString);
        strArr = [...strArr, rotStr];
      }
    }
  }

  return strArr.join('');
}

const rotateString = str => {
  const strArr = str.split('');
  const firstElement = strArr.shift();
  strArr.push(firstElement);

  return strArr.join('');
};

const reverseStr = str =>
  str
    .split('')
    .reverse()
    .join('');

const checkSum = str => {
  let totalSumOfStr = 0;
  for (let i = 0; i <= str.length; i++) {
    let n = Number(str[i]);

    if (n) {
      totalSumOfStr = totalSumOfStr + Math.pow(n, 3);
    }
  }

  return totalSumOfStr;
};
