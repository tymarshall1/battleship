class GameBoard {
  #board = this.#createBoard();

  constructor() {}

  get board() {
    return this.#board;
  }

  #createBoard() {
    let board = [];
    for (let i = 0; i < 10; i++) {
      board.push([]);
      for (let j = 0; j < 10; j++) {
        board[i][j] = "";
      }
    }
    return board;
  }

  placeShip(ship) {
    if (this.#incorrectAllignmentSpecified(ship)) {
      return "Incorrect alignment";
    }

    if (this.#shipWillOverflowBoard(ship)) {
      return "Ship will overflow board";
    }

    if (this.#positionFilled(ship)) {
      return "ships are overlapping";
    }

    if (ship.alignment === "vertical") {
      for (let i = 0; i < ship.totalLength; i++) {
        this.#board[ship.location[1]][ship.location[0]] = "s";
        ship.location[1]++;
      }
    } else if (ship.alignment === "horizontal") {
      for (let i = 0; i < ship.totalLength; i++) {
        this.#board[ship.location[1]][ship.location[0]] = "s";
        ship.location[0]++;
      }
    }
    return "Ship placed";
  }

  receiveAttack(x, y) {}

  #positionFilled(ship) {
    let yval = ship.location[1];
    let xval = ship.location[0];

    if (ship.alignment === "vertical") {
      for (let i = 0; i < ship.totalLength; i++) {
        if (this.#board[yval][xval] === "s") return true;
        yval++;
      }
    } else {
      for (let i = 0; i < ship.totalLength; i++) {
        if (this.#board[yval][xval] === "s") return true;
        xval++;
      }
    }
    return false;
  }

  #incorrectAllignmentSpecified(ship) {
    switch (ship.alignment) {
      case "vertical":
        return false;
      case "horizontal":
        return false;
      default:
        return true;
    }
  }

  #shipWillOverflowBoard(ship) {
    let yval = ship.location[1];
    let xval = ship.location[0];
    let shiplen = ship.totalLength;

    if (ship.alignment === "vertical") {
      if (yval + shiplen > 10) return true;
    } else {
      if (xval + shiplen > 10) return true;
    }
    return false;
  }
}
module.exports = GameBoard;
