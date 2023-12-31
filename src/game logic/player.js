class Player {
  #isTurn;
  #name;
  #attack;
  #nextMoves = [];
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
    if (this.#attack !== undefined) {
      const prevY = this.#attack[0];
      const prevX = this.attack[1];

      if (gameboard[prevY][prevX] === "h") {
        if (
          prevY + 1 <= 9 &&
          gameboard[prevY + 1][prevX] !== "h" &&
          gameboard[prevY + 1][prevX] !== "m" &&
          gameboard[prevY + 1][prevX] !== ""
        )
          this.#nextMoves.push([prevY + 1, prevX]);
        if (
          prevY - 1 >= 0 &&
          gameboard[prevY - 1][prevX] !== "h" &&
          gameboard[prevY - 1][prevX] !== "m" &&
          gameboard[prevY - 1][prevX] !== ""
        )
          this.#nextMoves.push([prevY - 1, prevX]);
        if (
          prevX + 1 <= 9 &&
          gameboard[prevY][prevX + 1] !== "h" &&
          gameboard[prevY][prevX + 1] !== "m" &&
          gameboard[prevY][prevX + 1] !== ""
        )
          this.#nextMoves.push([prevY, prevX + 1]);
        if (
          prevX - 1 >= 0 &&
          gameboard[prevY][prevX - 1] !== "h" &&
          gameboard[prevY][prevX - 1] !== "m" &&
          gameboard[prevY][prevX - 1] !== ""
        )
          this.#nextMoves.push([prevY, prevX - 1]);

        if (this.#nextMoves.length !== 0) {
          const aimedAttack = this.#nextMoves.pop();

          if (
            gameboard[aimedAttack[0]][aimedAttack[1]] !== "h" &&
            gameboard[aimedAttack[0]][aimedAttack[1]] !== "m"
          ) {
            this.#attack = aimedAttack;
            return;
          }
        }
      }

      if (gameboard[prevY][prevX] === "m" && this.#nextMoves.length !== 0) {
        const aimedAttack = this.#nextMoves.pop();

        if (
          gameboard[aimedAttack[0]][aimedAttack[1]] !== "h" &&
          gameboard[aimedAttack[0]][aimedAttack[1]] !== "m"
        ) {
          this.#attack = aimedAttack;
          return;
        }
      }
    }

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
