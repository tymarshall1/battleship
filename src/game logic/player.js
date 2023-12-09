class Player {
  #isTurn;
  #name;
  #attack;

  constructor(name, isTurn) {
    this.#isTurn = isTurn;
    this.#name = name;
    this.#attack;
  }

  set attack(coordinateArray) {
    if (coordinateArray[0] > 9 || coordinateArray[1] > 9) {
      throw new Error("Incorrect attack coordinates");
    }
    this.#attack = coordinateArray;
  }

  get attack() {
    return this.#attack;
  }

  get isTurn() {
    return this.#isTurn;
  }

  get displayName() {
    return this.#name;
  }

  changeTurn() {
    this.#isTurn ? (this.#isTurn = false) : (this.#isTurn = true);
  }

  smartMove(gameboard) {
    while (true) {
      const yval = Math.floor(Math.random() * 10);
      const xval = Math.floor(Math.random() * 10);

      if (yval > 9 || xval > 9) {
        throw new Error("Computer choice was greater than 9");
      }

      if (gameboard[yval][xval] !== "m" && gameboard[yval][xval] !== "h") {
        this.#attack = [yval, xval];
        break;
      }
    }
  }
}

module.exports = Player;
