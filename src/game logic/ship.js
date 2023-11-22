class Ship {
  #shipLength;

  constructor(shipLen) {
    this.#shipLength = shipLen;
  }

  get totalLength() {
    return this.#shipLength;
  }

  hit() {
    if (this.#shipLength === 0) {
      return;
    }
    this.#shipLength--;
  }

  isSunk() {
    return this.#shipLength === 0 ? true : false;
  }
}

module.exports = Ship;
