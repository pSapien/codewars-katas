/*** ===================================================================== ***\
 ** - PROBLEM ------------------------------------------------------ **
 * ========================================================================= *

  For a given chemical formula represented by a string, count the number of atoms of each element contained in the molecule
  and return an object (associative array in PHP, Dictionary<string, int> in C#, Map in Java).

  https://www.codewars.com/kata/52f831fa9d332c6591000511/train/javascript

  For example:

        var water = 'H2O';
        parseMolecule(water); // return {H: 2, O: 1}

        var magnesiumHydroxide = 'Mg(OH)2';
        parseMolecule(magnesiumHydroxide); // return {Mg: 1, O: 2, H: 2}

        var fremySalt = 'K4[ON(SO3)2]2';
        parseMolecule(fremySalt); // return {K: 4, O: 14, N: 2, S: 4}
        As you can see, some formulas have brackets in them.
        The index outside the brackets tells you that you have to multiply count of each atom inside the bracket on this index.
        For example, in Fe(NO3)2 you have one iron atom, two nitrogen atoms and six oxygen atoms.

  Note that brackets may be round, square or curly and can also be nested. Index after the braces is optional.

\*** ===================================================================== ***/

function parseMolecule(formula) {
  const seperatedAtoms = seperateAtoms(formula);

  const atomsArr = seperatedAtoms.split('');
  const obj = {};

  // for (let i = 0; i < atomsArr.length; i++) {
  //   const current = atomsArr[i];
  //   const next = atomsArr[i + 1];

  //   if (isNumber(next)) obj[current] = Number(next);
  //   if (typeof next === 'undefined') obj[current] = 1;
  // }

  return obj;
}

const isNumber = str => !isNaN(Number(str));

function seperateAtoms(formula) {
  if (!containsBrackets(formula)) return formula;

  const rgx = /\[(.*)\]/;

  formula;

  console.log(formula.match(rgx).pop());

  console.log(splitBrackets(formula));
}

const splitBrackets = str => {
  const rgc = /^[A-Z][a-z]?[0-9]/;
  let strArr = [];
  if (str.includes('[')) {
    const init = formula.indexOf('[');
    const fin = formula.indexOf(']');
    const betweenBracketsString = formula.substr(init, fin);
    const beforeBracketString = formula.split(betweenBracketsString)[0];

    console.log(beforeBracketString.match(rgc));

    const rgx = /\[(.*)\]/;
    console.log(beforeBracketString);

    strArr = [...strArr, beforeBracketString, betweenBracketsString];
  }

  return strArr;
};

const containsBrackets = formula =>
  formula.includes('(') || formula.includes('[') || formula.includes('{');

const formula = 'K4[ON(SO3)2]2';
const answer = parseMolecule(formula);
answer;
