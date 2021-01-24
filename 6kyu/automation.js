/**
 * url https://www.codewars.com/kata/5268acac0d3f019add000203/train/javascript
 */


class Automaton {
  constructor() {
    this.initStartState();
    this.transitions = {
      q1: ['q1', 'q2'],
      q2: ['q3', 'q2'],
      q3: ['q2', 'q2'],
    }
  }

  initStartState() {
    this.currentState = 'q1';
  }

  setNextState(state) {
    this.currentState = this.transitions[this.currentState][state];
  }

  readCommands(states) {
    for (const state of states)  
      this.setNextState(state)

    const temp = this.currentState;
    this.initStartState();
    return temp === 'q2';
  }
}

const myAutomaton = new Automaton();

// console.log(myAutomaton.readCommands(["1"]))
console.log(myAutomaton.readCommands(["1", "0", "0", "1"]))
console.log(myAutomaton.readCommands([ '1', '0', '0', '1', '0' ]))