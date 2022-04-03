/**
 * @param {Array<number>} input
 * @returns Array<number>
 * @url https://www.codewars.com/kata/58fecb82f3dff0a347000018/train/javascript
 */

// prettier-ignore
removeZeros=a=>eval('['+/[1-9].*[1-9]/.exec(a)+']')
