const GameBoard = require("../game logic/gameboard");
const Ship = require("../game logic/ship");

describe("GameBoard Functions", () => {
  test("Game board has 10 rows", () => {
    const gameboard = new GameBoard();
    expect(gameboard.board.length).toBe(10);
  });

  test("Each row has 10 cols", () => {
    const gameboard = new GameBoard();
    for (let i = 0; i < gameboard.board.length; i++) {
      expect(gameboard.board[i].length).toBe(10);
    }
  });

  test("board starts with all spots filled with empty strings ", () => {
    const gameboard = new GameBoard();
    for (let i = 0; i < gameboard.board.length; i++) {
      for (let j = 0; j < gameboard.board[i].length; j++) {
        expect(gameboard.board[i][j]).toBe("");
      }
    }
  });

  test("Single ship placed on board at correct length vertically", () => {
    const gameboard = new GameBoard();
    const ship = new Ship(4, [0, 0], "Destroyer", "vertical");

    gameboard.placeShip(ship);
    expect(gameboard.board[0][0]).toBe("Destroyer");
    expect(gameboard.board[1][0]).toBe("Destroyer");
    expect(gameboard.board[2][0]).toBe("Destroyer");
    expect(gameboard.board[3][0]).toBe("Destroyer");
    expect(gameboard.board[4][0]).toBe("");
  });

  test("Single ship placed on board at correct length vertically", () => {
    const gameboard = new GameBoard();
    const ship = new Ship(3, [5, 5], "Destroyer", "vertical");

    gameboard.placeShip(ship);
    expect(gameboard.board[4][5]).toBe("");
    expect(gameboard.board[5][5]).toBe("Destroyer");
    expect(gameboard.board[6][5]).toBe("Destroyer");
    expect(gameboard.board[7][5]).toBe("Destroyer");
    expect(gameboard.board[8][5]).toBe("");
  });

  test("Single ship placed on board at correct length vertically", () => {
    const gameboard = new GameBoard();
    const ship = new Ship(3, [5, 7], "Destroyer", "vertical");

    gameboard.placeShip(ship);
    expect(gameboard.board[4][5]).toBe("");
    expect(gameboard.board[5][5]).toBe("");
    expect(gameboard.board[6][5]).toBe("");
    expect(gameboard.board[7][5]).toBe("Destroyer");
    expect(gameboard.board[8][5]).toBe("Destroyer");
    expect(gameboard.board[9][5]).toBe("Destroyer");
  });

  test("Single ship placed on board vertically where it would overflow the array", () => {
    const gameboard = new GameBoard();
    const ship = new Ship(3, [5, 8], "test", "vertical");

    expect(gameboard.placeShip(ship)).toBe("Ship will overflow board");
  });

  test("Single ship placed on board vertically where it would overflow the array", () => {
    const gameboard = new GameBoard();
    const ship = new Ship(5, [2, 6], "test", "vertical");

    expect(gameboard.placeShip(ship)).toBe("Ship will overflow board");
  });

  test("Single ship placed on board at correct length horizontally", () => {
    const gameboard = new GameBoard();
    const ship = new Ship(3, [5, 7], "Destroyer", "horizontal");

    gameboard.placeShip(ship);
    expect(gameboard.board[7][4]).toBe("");
    expect(gameboard.board[7][5]).toBe("Destroyer");
    expect(gameboard.board[7][6]).toBe("Destroyer");
    expect(gameboard.board[7][7]).toBe("Destroyer");
    expect(gameboard.board[7][8]).toBe("");
    expect(gameboard.board[7][9]).toBe("");
  });

  test("Single ship placed on board at correct length horizontally", () => {
    const gameboard = new GameBoard();
    const ship = new Ship(4, [6, 9], "Destroyer", "horizontal");

    gameboard.placeShip(ship);
    expect(gameboard.board[9][4]).toBe("");
    expect(gameboard.board[9][5]).toBe("");
    expect(gameboard.board[9][6]).toBe("Destroyer");
    expect(gameboard.board[9][7]).toBe("Destroyer");
    expect(gameboard.board[9][8]).toBe("Destroyer");
    expect(gameboard.board[9][9]).toBe("Destroyer");
  });

  test("Single ship placed on board horizontally where it would overflow the array", () => {
    const gameboard = new GameBoard();
    const ship = new Ship(5, [6, 6], "Destroyer", "horizontal");

    expect(gameboard.placeShip(ship)).toBe("Ship will overflow board");
  });

  test("Incorrect allignment specified", () => {
    const gameboard = new GameBoard();
    const ship = new Ship(5, [6, 6], "test ship", "wrong setting");

    expect(gameboard.placeShip(ship)).toBe("Incorrect alignment");
  });

  test("Multiple ships placed on same board", () => {
    const gameboard = new GameBoard();
    const shipOne = new Ship(4, [6, 6], "test name", "vertical");
    const shipTwo = new Ship(6, [5, 3], "test name", "vertical");
    const shipThree = new Ship(3, [4, 4], "test name", "vertical");

    expect(gameboard.placeShip(shipOne)).toBe("Ship placed");
    expect(gameboard.placeShip(shipTwo)).toBe("Ship placed");
    expect(gameboard.placeShip(shipThree)).toBe("Ship placed");
  });

  test("Multiple ships placed on same board", () => {
    const gameboard = new GameBoard();
    const shipOne = new Ship(4, [6, 6], "test name", "horizontal");
    const shipTwo = new Ship(6, [5, 3], "test name", "vertical");
    const shipThree = new Ship(3, [4, 4], "test name", "vertical");

    expect(gameboard.placeShip(shipOne)).toBe("Ship placed");
    expect(gameboard.placeShip(shipTwo)).toBe("Ship placed");
    expect(gameboard.placeShip(shipThree)).toBe("Ship placed");
  });

  test("ships will not place overtop of another", () => {
    const gameboard = new GameBoard();
    const shipOne = new Ship(4, [6, 6], "test name", "vertical");
    const shipTwo = new Ship(4, [6, 6], "test name", "vertical");

    gameboard.placeShip(shipOne);

    expect(gameboard.placeShip(shipTwo)).toBe("ships are overlapping");
  });

  test("ship will not place overtop of another one horizontal one vertical", () => {
    const gameboard = new GameBoard();
    const shipOne = new Ship(4, [6, 6], "test name", "vertical");
    const shipTwo = new Ship(4, [4, 6], "test name", "horizontal");

    gameboard.placeShip(shipOne);

    expect(gameboard.placeShip(shipTwo)).toBe("ships are overlapping");
  });

  test("recieveAttack function will not allow invalid coordinates", () => {
    const gameboard = new GameBoard();
    expect(gameboard.receiveAttack(11, 10)).toBe("invalid coordinates");
  });

  test("recieveAttack function will not allow invalid coordinates", () => {
    const gameboard = new GameBoard();
    expect(gameboard.receiveAttack(4, 13)).toBe("invalid coordinates");
  });

  test("recieveAttack function marks the board with an 'm' on a miss", () => {
    const gameboard = new GameBoard();
    const ship = new Ship(4, [6, 6], "test name", "vertical");
    gameboard.placeShip(ship);
    expect(gameboard.receiveAttack(5, 6)).toBe("miss");
    expect(gameboard.board[5][6]).toBe("m");
  });

  test("recieveAttack function returns hit when a ship is hit", () => {
    const gameboard = new GameBoard();
    const ship = new Ship(4, [4, 4], "test name", "vertical");
    gameboard.placeShip(ship);
    expect(gameboard.receiveAttack(4, 4)).toBe("hit");
    expect(gameboard.receiveAttack(6, 4)).toBe("hit");
  });

  test("recieveAttack function marks the board with an 'h' on a hit", () => {
    const gameboard = new GameBoard();
    const ship = new Ship(4, [2, 2], "Destroyer", "horizontal");
    gameboard.placeShip(ship);
    expect(gameboard.receiveAttack(2, 2)).toBe("hit");
    expect(gameboard.receiveAttack(2, 4)).toBe("hit");
    expect(gameboard.board[2][2]).toBe("h");
    expect(gameboard.board[2][3]).toBe("Destroyer");
    expect(gameboard.board[2][4]).toBe("h");
    expect(gameboard.board[2][5]).toBe("Destroyer");
    expect(gameboard.board[2][6]).toBe("");
  });

  test("recieveAttack function returns 'cant attack here' if spot is already marked as hit or miss", () => {
    const gameboard = new GameBoard();
    const ship = new Ship(4, [2, 2], "test name", "horizontal");
    gameboard.placeShip(ship);
    gameboard.receiveAttack(2, 2);
    gameboard.receiveAttack(3, 2);
    expect(gameboard.receiveAttack(2, 2)).toBe("cant attack here");
    expect(gameboard.receiveAttack(3, 2)).toBe("cant attack here");
  });
});
