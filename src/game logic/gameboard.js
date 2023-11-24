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

  /**
    shipPlacementDetails should be an object with the fields:
    xvalue
    yvalue
    allignment
    shipLength
    **/
  placeShip(shipPlacementDetails) {
    if (this.#incorrectAllignmentSpecified(shipPlacementDetails)) {
      return "Incorrect allignment";
    }

    if (this.#shipWillOverflowBoard(shipPlacementDetails)) {
      return "Ship will overflow board";
    }

    if (this.#positionFilled(shipPlacementDetails)) {
      return "ships are overlapping";
    }

    if (shipPlacementDetails.allignment === "vertical") {
      for (let i = 0; i < shipPlacementDetails.shipLength; i++) {
        this.#board[shipPlacementDetails.yvalue][shipPlacementDetails.xvalue] =
          "s";
        shipPlacementDetails.yvalue++;
      }
    } else if (shipPlacementDetails.allignment === "horizontal") {
      for (let i = 0; i < shipPlacementDetails.shipLength; i++) {
        this.#board[shipPlacementDetails.yvalue][shipPlacementDetails.xvalue] =
          "s";
        shipPlacementDetails.xvalue++;
      }
    }
    return "Ship placed";
  }

  #positionFilled(shipPlacementDetails) {
    let yval = shipPlacementDetails.yvalue;
    let xval = shipPlacementDetails.xvalue;

    if (shipPlacementDetails.allignment === "vertical") {
      for (let i = 0; i < shipPlacementDetails.shipLength; i++) {
        if (this.#board[yval][xval] === "s") return true;
        yval++;
      }
    } else {
      for (let i = 0; i < shipPlacementDetails.shipLength; i++) {
        if (this.#board[yval][xval] === "s") return true;
        xval++;
      }
    }
    return false;
  }

  #incorrectAllignmentSpecified(shipPlacementDetails) {
    switch (shipPlacementDetails.allignment) {
      case "vertical":
        return false;
      case "horizontal":
        return false;
      default:
        return true;
    }
  }

  #shipWillOverflowBoard(shipPlacementDetails) {
    let yval = shipPlacementDetails.yvalue;
    let xval = shipPlacementDetails.xvalue;
    let shiplen = shipPlacementDetails.shipLength;

    if (shipPlacementDetails.allignment === "vertical") {
      if (yval + shiplen > 10) return true;
    } else {
      if (xval + shiplen > 10) return true;
    }
    return false;
  }
}
module.exports = GameBoard;
