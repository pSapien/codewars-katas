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

// WORKING ON IT
const OPENING_BRACKETS = ['[', '{', '('];

const moleculeMap = new Map();

function parseMolecule(formula) {
  console.log(formula);
  const rgc = /^[A-Z](?:[a-z]|[0-9])/;

  return rgc.exec(formula);
}

console.log(parseMolecule('H20'));
console.log(parseMolecule('Mg(OH)2'));
console.log(parseMolecule('K4[ON(SO3)2]2'));
