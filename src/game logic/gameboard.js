class GameBoard {
  #board = this.#createBoard();
  #shipsOnBoard = [];

  constructor() {}

  get board() {
    return this.#board;
  }

  get shipsOnBoard() {
    return this.#shipsOnBoard;
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

    if (this.#positionFilledWithShip(ship)) {
      return "ships are overlapping";
    }

    if (ship.alignment === "vertical") {
      for (let i = 0; i < ship.totalLength; i++) {
        this.#board[ship.location[1]][ship.location[0]] = ship.shipName;
        ship.location[1]++;
      }
    } else if (ship.alignment === "horizontal") {
      for (let i = 0; i < ship.totalLength; i++) {
        this.#board[ship.location[1]][ship.location[0]] = ship.shipName;
        ship.location[0]++;
      }
    }
    this.#shipsOnBoard.push(ship);
    return "Ship placed";
  }

  receiveAttack(y, x) {
    if (x > 10 || y > 10) return "invalid coordinates";

    if (this.#board[y][x] === "") {
      this.#board[y][x] = "m";
      return "miss";
    }

    for (let i = 0; i < this.#shipsOnBoard.length; i++) {
      if (this.#board[y][x] === this.#shipsOnBoard[i].shipName) {
        this.#shipsOnBoard[i].hit();
        this.#board[y][x] = "h";
        return "hit";
      }
    }

    return "cant attack here";
  }

  allShipsSunk() {
    for (let i = 0; i < this.#shipsOnBoard.length; i++) {
      if (!this.#shipsOnBoard[i].isSunk()) {
        return false;
      }
    }
    return true;
  }

  #positionFilledWithShip(ship) {
    let yval = ship.location[1];
    let xval = ship.location[0];

    if (ship.alignment === "vertical") {
      for (let i = 0; i < ship.totalLength; i++) {
        if (this.#board[yval][xval] !== "") return true;
        yval++;
      }
    } else {
      for (let i = 0; i < ship.totalLength; i++) {
        if (this.#board[yval][xval] !== "") return true;
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
