/*** ===================================================================== ***\
 ** - PROBLEM ------------------------------------------------------ **
 * ========================================================================= *
 *
 * https://www.codewars.com/kata/54c27ef1fb7da0118600046a/train/javascript
 * 

  In this kata, we will implement a function that allows us to perform this by applying a fluid style:

  c.sum(4, 5).sum(5).minus(4).sum(7).addOne().double().double().execute(); // 72
  Your job is implement the chain function:

  function chain(fns) {
  }

  var c = chain({sum: sum, minus: minus, double: double, addOne: addOne});
  As you can see, this function receives the methods to be chained and returns an object that allows you to call the chained methods. The result is obtained by calling the execute method.

  Chained functions receive an arbitrary number of arguments. The first function in the chain receives all its arguments. In the other functions, the first argument is the result of the previous function and then it only receives the remainder arguments (second, third, etc.). The tests always pass the appropriate arguments and you do not have to worry about checking this.

  Note that the chain can be reused (the internal state is not stored):

  c.sum(3, 4).execute(); //7
  c.sum(1, 2).execute(); //3
  Other examples:

  var c1 = c.sum(1, 2);
  c1.execute(); // == fns.sum(1, 2) == 3
  c1.double().execute(); // == fns.double(fns.sum(1, 2)) == 6
  c1.addOne().execute(); // == fns.addOne(fns.sum(1, 2)) == 4
  c1.execute(); // == fns.sum(1, 2) == 3

  var c2 = c1.sum(5);
  c2.addOne().execute(); // == fns.addOne(fns.sum(fns.sum(1, 2) 5)) == 9
  c2.sum(3).execute(); // == fns.sum(c1.sum(fns.sum(1, 2), 5), 3) == 11
  c2.execute(); // == fns.sum(fns.sum(1, 2), 5) == 8

  c1.execute(); // == fns.sum(1, 2) == 3

\*** ======================================================================================== ***/

function chain(fns) {}
