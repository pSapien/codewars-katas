/**
 * https://www.codewars.com/kata/587136ba2eefcb92a9000027/train/javascript
 */

const SnakeAndLaddersPosition = {
  16: 6,
  49: 11,
  46: 25,
  64: 60,
  62: 19,
  74: 53,
  89: 68,
  92: 88,
  95: 75,
  99: 80,
  2: 38,
  7: 14,
  8: 31,
  15: 26,
  21: 42,
  28: 84,
  36: 44,
  51: 67,
  78: 98,
  71: 91,
  87: 94,
}

const WINNING_SQUARE = 100;

function goTo(pos) {
  if (SnakeAndLaddersPosition[pos]) return SnakeAndLaddersPosition[pos];
  return pos;
}

function flip(turn) {
  return turn ? 0 : 1;
}

class SnakesLadders {
  constructor() {
    this.players = [0, 0];
    this.turn = 0;
    this.isGameOver = false;
  }

  play(die1, die2) {
    if (this.isGameOver) return `Game over!`

    let nextDiePos = this.players[this.turn] + (die1 + die2);
    if (nextDiePos > WINNING_SQUARE) { 
      const excess = nextDiePos - WINNING_SQUARE;
      nextDiePos = WINNING_SQUARE - excess;
    }
    this.players[this.turn] = goTo(nextDiePos);

    if (nextDiePos === WINNING_SQUARE) {
      this.isGameOver = true;
      return `Player ${this.turn + 1} Wins!`
    }

    let lastTurn = this.turn;
    if (die1 !== die2) this.turn = flip(this.turn);
    return `Player ${lastTurn + 1} is on square ${this.players[lastTurn]}`;
  }
}