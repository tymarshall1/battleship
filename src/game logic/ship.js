class Ship {
  #shipLength;
  #name;
  #location;
  #alignment;

  constructor(shipLen, location, name, alignment) {
    this.#shipLength = shipLen;
    this.#location = location;
    this.#name = name;
    this.#alignment = alignment;
  }

  get totalLength() {
    return this.#shipLength;
  }

  get shipName() {
    return this.#name;
  }

  // ['x', y]
  get location() {
    return this.#location;
  }

  get alignment() {
    return this.#alignment;
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
