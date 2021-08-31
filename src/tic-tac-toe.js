class TicTacToe {
  constructor() {
    this.field = [
      [, , ,],
      [, , ,],
      [, , ,],
    ];
    this.field.map((a) => a.fill(null));
    this.playerSign = "x";
    this.isEnded = false;
    this.winner = null;
  }
  checkWin() {
    // this.field.reduce((a,c)=> a += c.reduce((a,c,i,arr)=> c === arr[0] ? true : false),0)
    // this.field.reduce((prev, next) => next.map((item, i) =>
    // (prev[i] || []).concat(next[i])
    // ), []);
    if (
      this.field[0].join("") === "xxx" ||
      this.field[1].join("") === "xxx" ||
      this.field[2].join("") === "xxx" ||
      this.field[0][0] + this.field[1][0] + this.field[2][0] === "xxx" ||
      this.field[0][1] + this.field[1][1] + this.field[2][1] === "xxx" ||
      this.field[0][2] + this.field[1][2] + this.field[2][2] === "xxx" ||
      this.field[0][0] + this.field[1][1] + this.field[2][2] === "xxx" ||
      this.field[2][0] + this.field[1][1] + this.field[0][2] === "xxx"
    ) {
      this.winner = "x";
      this.isEnded = true;
      return "x";
    } else if (
      this.field[0].join("") === "ooo" ||
      this.field[1].join("") === "ooo" ||
      this.field[2].join("") === "ooo" ||
      this.field[0][0] + this.field[1][0] + this.field[2][0] === "ooo" ||
      this.field[0][1] + this.field[1][1] + this.field[2][1] === "ooo" ||
      this.field[0][2] + this.field[1][2] + this.field[2][2] === "ooo" ||
      this.field[0][0] + this.field[1][1] + this.field[2][2] === "ooo" ||
      this.field[2][0] + this.field[1][1] + this.field[0][2] === "ooo"
    ) {
      this.winner = "o";
      this.isEnded = true;
      return "o";
    } else return null;
  }
  getCurrentPlayerSymbol() {
    return this.playerSign;
  }
  nextTurn(rowIndex, columnIndex) {
    if (this.field[rowIndex][columnIndex] === null) {
      this.field[rowIndex][columnIndex] = this.playerSign;
      this.playerSign === "o"
        ? (this.playerSign = "x")
        : (this.playerSign = "o");
      this.checkWin();
    }
  }
  isFinished() {
    return this.noMoreTurns() || this.isEnded;
  }
  getWinner() {
    return this.winner;
  }
  noMoreTurns() {
    return this.field.flat().filter((e) => e !== null).length === 9
      ? true
      : false;
  }
  isDraw() {
    if (this.noMoreTurns() && this.getWinner() === null) {
      return true;
    }
    return false;
  }
  getFieldValue(rowIndex, colIndex) {
    return this.field[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;

class TicTacToe1 {
  constructor() {
    this.field = [
      [, , ,],
      [, , ,],
      [, , ,],
    ];
    this.field.map((a) => a.fill(null));
    this.playerSign = "x";
    this.isEnded = false;
    this.winner = null;
  }
  checkWin() {
    // this.field.reduce((a,c)=> a += c.reduce((a,c,i,arr)=> c === arr[0] ? true : false),0)
    // this.field.reduce((prev, next) => next.map((item, i) =>
    // (prev[i] || []).concat(next[i])
    // ), []);
    if (
      this.field[0].join("") === "xxx" ||
      this.field[1].join("") === "xxx" ||
      this.field[2].join("") === "xxx" ||
      this.field[0][0] + this.field[1][0] + this.field[2][0] === "xxx" ||
      this.field[0][1] + this.field[1][1] + this.field[2][1] === "xxx" ||
      this.field[0][2] + this.field[1][2] + this.field[2][2] === "xxx" ||
      this.field[0][0] + this.field[1][1] + this.field[2][2] === "xxx" ||
      this.field[2][0] + this.field[1][1] + this.field[0][2] === "xxx"
    ) {
      this.winner = "x";
      this.isEnded = true;
      return "x";
    } else if (
      this.field[0].join("") === "ooo" ||
      this.field[1].join("") === "ooo" ||
      this.field[2].join("") === "ooo" ||
      this.field[0][0] + this.field[1][0] + this.field[2][0] === "ooo" ||
      this.field[0][1] + this.field[1][1] + this.field[2][1] === "ooo" ||
      this.field[0][2] + this.field[1][2] + this.field[2][2] === "ooo" ||
      this.field[0][0] + this.field[1][1] + this.field[2][2] === "ooo" ||
      this.field[2][0] + this.field[1][1] + this.field[0][2] === "ooo"
    ) {
      this.winner = "o";
      this.isEnded = true;
      return "o";
    } else return null;
  }
  getCurrentPlayerSymbol() {
    return this.playerSign;
  }
  nextTurn(rowIndex, columnIndex) {
    if (this.field[rowIndex][columnIndex] === null) {
      this.field[rowIndex][columnIndex] = this.playerSign;
      this.playerSign === "o"
        ? (this.playerSign = "x")
        : (this.playerSign = "o");
      this.checkWin();
    }
  }
  isFinished() {
    return this.isEnded === true ? true : false;
  }
  getWinner() {
    return this.checkWin();
  }
  noMoreTurns() {
    return this.field.flat().filter((e) => e !== null).length === 9
      ? true
      : false;
  }
  isDraw() {
    if (this.noMoreTurns() && this.getWinner() === null) {
      return true;
    }
    return false;
  }
  getFieldValue(rowIndex, colIndex) {
    return this.field[rowIndex][colIndex];
  }
}

game = new TicTacToe();
// game.nextTurn(1, 0);
console.log("END: ", game.isFinished());
// console.log(game.isFinished());
// console.log(game.getWinner());
// console.log(game.noMoreTurns());
// console.log(game.isDraw());
// console.log(game.getFieldValue(2, 1));
// console.log(game.getCurrentPlayerSymbol());

// expect(game.isFinished()).to.equal(false)
// expect(game.getWinner()).to.equal(null)
// expect(game.noMoreTurns()).to.equal(false);
// expect(game.isDraw()).to.equal(false);
// expect(game.getFieldValue(2, 1)).to.equal('x')
// expect(game.getCurrentPlayerSymbol()).to.equal('o')
