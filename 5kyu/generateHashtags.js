/*** ===================================================================== ***\
 ** - PROBLEM ------------------------------------------------------ **
 * ========================================================================= *

  The marketing team is spending way too much time typing in hashtags.
  Let's help them with out own Hashtag Generator!

Here's the deal:

  * It must start with a hashtag (#).
  * All words must have their first letter capitalized.
  * If the final result is longer than 140 chars it must return false.
  * If the input or the result is an empty string it must return false.


  https://www.codewars.com/kata/the-hashtag-generator/train/javascript

  Example : - 
  " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                    =>  "#HelloWorld"
""                                          =>  false

\*** ===================================================================== ***/

const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

const flushOutSpacesAndCapitalize = str =>
  str
    .split(' ')
    .filter(x => x)
    .map(capitalizeFirstLetter)
    .join('');

const getIsStrAllowedWithin = range => str =>
  str.length > range[0] && str.length <= range[1];

const ALLOWED_RANGE = [0, 140];

function generateHashtag(str) {
  const isStrLenBetween0To140 = getIsStrAllowedWithin(ALLOWED_RANGE);
  const noSpacesAndCapitalize = flushOutSpacesAndCapitalize(str);

  if (isStrLenBetween0To140(noSpacesAndCapitalize)) {
    const res = `#${noSpacesAndCapitalize}`;

    if (isStrLenBetween0To140(res)) {
      return res;
    }
  }

  return false;
}
