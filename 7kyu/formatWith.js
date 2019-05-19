/*** ===================================================================== ***\
 ** - PROBLEM ------------------------------------------------------ **
 * ========================================================================= *
 *
 * https://www.codewars.com/kata/format-with/train/javascript

  Write

  String.prototype.formatWith = function () {}
  that takes in a list of arguments and formats the string based off these arguments and indices.

  For example:

    'Hello {0}'.formatWith('Codewars') ===  'Hello Codewars'
    '{0} + {0} = {1}'.formatWith('1','2') ===  '1 + 1 = 2'
    'Testing {1}'.formatWith('kata') === 'Testing {1}' // there is no arguments at position 1
\*** ===================================================================== ***/
String.prototype.formatWith = function(...args) {
  let str = this.toString();

  for (let i = 0; i < args.length; i++) {
    const toBeReplaced = `{${i}}`;
    const toBeAdded = args[i];

    str = str.split(toBeReplaced).join(toBeAdded);
  }

  return str;
};

console.log(
  'Hello {0}. This {1} is bring a {2} to work day'.formatWith(
    'World',
    'Monday',
    'dog'
  )
);

console.log('{0} + {0} = {1}'.formatWith('1', '2'));
// 'Hello World. This Monday is bring a dog to work day'
