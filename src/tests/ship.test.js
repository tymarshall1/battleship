const Ship = require("../game logic/ship");

describe("Ship functions", () => {
  test("ship registers hit 2 times", () => {
    const ship = new Ship(5);
    ship.hit();
    ship.hit();
    expect(ship.totalLength).toBe(3);
  });

  test("ship registers hit 5 times", () => {
    const ship = new Ship(5);
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.totalLength).toBe(0);
  });

  test("ship length from hits doesn't go negative", () => {
    const ship = new Ship(1);
    ship.hit();
    ship.hit();
    expect(ship.totalLength).toBe(0);
  });

  test("isSunk returns true if ships length is 0", () => {
    const ship = new Ship(3);
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBeTruthy();
  });

  test("isSunk returns false if ships length is greater than 0", () => {
    const ship = new Ship(4);
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBeFalsy();
  });
});
