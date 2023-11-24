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
    const ship = new Ship(4);

    const shipPlacementDetails = {
      xvalue: 0,
      yvalue: 0,
      allignment: "vertical",
      shipLength: ship.totalLength,
    };

    gameboard.placeShip(shipPlacementDetails);
    expect(gameboard.board[0][0]).toBe("s");
    expect(gameboard.board[1][0]).toBe("s");
    expect(gameboard.board[2][0]).toBe("s");
    expect(gameboard.board[3][0]).toBe("s");
    expect(gameboard.board[4][0]).toBe("");
  });

  test("Single ship placed on board at correct length vertically", () => {
    const gameboard = new GameBoard();
    const ship = new Ship(3);

    const shipPlacementDetails = {
      xvalue: 5,
      yvalue: 5,
      allignment: "vertical",
      shipLength: ship.totalLength,
    };

    gameboard.placeShip(shipPlacementDetails);
    expect(gameboard.board[4][5]).toBe("");
    expect(gameboard.board[5][5]).toBe("s");
    expect(gameboard.board[6][5]).toBe("s");
    expect(gameboard.board[7][5]).toBe("s");
    expect(gameboard.board[8][5]).toBe("");
  });

  test("Single ship placed on board at correct length vertically", () => {
    const gameboard = new GameBoard();
    const ship = new Ship(3);

    const shipPlacementDetails = {
      xvalue: 5,
      yvalue: 7,
      allignment: "vertical",
      shipLength: ship.totalLength,
    };

    gameboard.placeShip(shipPlacementDetails);
    expect(gameboard.board[4][5]).toBe("");
    expect(gameboard.board[5][5]).toBe("");
    expect(gameboard.board[6][5]).toBe("");
    expect(gameboard.board[7][5]).toBe("s");
    expect(gameboard.board[8][5]).toBe("s");
    expect(gameboard.board[9][5]).toBe("s");
  });

  test("Single ship placed on board vertically where it would overflow the array", () => {
    const gameboard = new GameBoard();
    const ship = new Ship(3);

    const shipPlacementDetails = {
      xvalue: 5,
      yvalue: 8,
      allignment: "vertical",
      shipLength: ship.totalLength,
    };

    console.log(gameboard.board);
    expect(gameboard.placeShip(shipPlacementDetails)).toBe(
      "Ship will overflow board"
    );
  });

  test("Single ship placed on board vertically where it would overflow the array", () => {
    const gameboard = new GameBoard();
    const ship = new Ship(5);

    const shipPlacementDetails = {
      xvalue: 2,
      yvalue: 6,
      allignment: "vertical",
      shipLength: ship.totalLength,
    };

    expect(gameboard.placeShip(shipPlacementDetails)).toBe(
      "Ship will overflow board"
    );
  });

  test("Single ship placed on board at correct length horizontally", () => {
    const gameboard = new GameBoard();
    const ship = new Ship(3);

    const shipPlacementDetails = {
      xvalue: 5,
      yvalue: 7,
      allignment: "horizontal",
      shipLength: ship.totalLength,
    };

    gameboard.placeShip(shipPlacementDetails);
    expect(gameboard.board[7][4]).toBe("");
    expect(gameboard.board[7][5]).toBe("s");
    expect(gameboard.board[7][6]).toBe("s");
    expect(gameboard.board[7][7]).toBe("s");
    expect(gameboard.board[7][8]).toBe("");
    expect(gameboard.board[7][9]).toBe("");
  });

  test("Single ship placed on board at correct length horizontally", () => {
    const gameboard = new GameBoard();
    const ship = new Ship(4);

    const shipPlacementDetails = {
      xvalue: 6,
      yvalue: 9,
      allignment: "horizontal",
      shipLength: ship.totalLength,
    };

    gameboard.placeShip(shipPlacementDetails);
    expect(gameboard.board[9][4]).toBe("");
    expect(gameboard.board[9][5]).toBe("");
    expect(gameboard.board[9][6]).toBe("s");
    expect(gameboard.board[9][7]).toBe("s");
    expect(gameboard.board[9][8]).toBe("s");
    expect(gameboard.board[9][9]).toBe("s");
  });

  test("Single ship placed on board horizontally where it would overflow the array", () => {
    const gameboard = new GameBoard();
    const ship = new Ship(5);

    const shipPlacementDetails = {
      xvalue: 6,
      yvalue: 6,
      allignment: "horizontal",
      shipLength: ship.totalLength,
    };

    expect(gameboard.placeShip(shipPlacementDetails)).toBe(
      "Ship will overflow board"
    );
  });

  test("Incorrect allignment specified", () => {
    const gameboard = new GameBoard();
    const ship = new Ship(5);

    const shipPlacementDetails = {
      xvalue: 6,
      yvalue: 6,
      allignment: "wrong setting",
      shipLength: ship.totalLength,
    };

    expect(gameboard.placeShip(shipPlacementDetails)).toBe(
      "Incorrect allignment"
    );
  });

  test("Multiple ships placed on same board", () => {
    const gameboard = new GameBoard();
    const shipOne = new Ship(4);
    const shipTwo = new Ship(6);
    const shipThree = new Ship(3);

    const shipOnePlacementDetails = {
      xvalue: 6,
      yvalue: 6,
      allignment: "vertical",
      shipLength: shipOne.totalLength,
    };

    const shipTwoPlacementDetails = {
      xvalue: 5,
      yvalue: 3,
      allignment: "vertical",
      shipLength: shipTwo.totalLength,
    };

    const shipThreePlacementDetails = {
      xvalue: 4,
      yvalue: 4,
      allignment: "vertical",
      shipLength: shipThree.totalLength,
    };

    expect(gameboard.placeShip(shipOnePlacementDetails)).toBe("Ship placed");
    expect(gameboard.placeShip(shipTwoPlacementDetails)).toBe("Ship placed");
    expect(gameboard.placeShip(shipThreePlacementDetails)).toBe("Ship placed");
  });

  test("Multiple ships placed on same board", () => {
    const gameboard = new GameBoard();
    const shipOne = new Ship(4);
    const shipTwo = new Ship(6);
    const shipThree = new Ship(3);

    const shipOnePlacementDetails = {
      xvalue: 6,
      yvalue: 6,
      allignment: "horizontal",
      shipLength: shipOne.totalLength,
    };

    const shipTwoPlacementDetails = {
      xvalue: 5,
      yvalue: 3,
      allignment: "vertical",
      shipLength: shipTwo.totalLength,
    };

    const shipThreePlacementDetails = {
      xvalue: 4,
      yvalue: 4,
      allignment: "vertical",
      shipLength: shipThree.totalLength,
    };

    expect(gameboard.placeShip(shipOnePlacementDetails)).toBe("Ship placed");
    expect(gameboard.placeShip(shipTwoPlacementDetails)).toBe("Ship placed");
    expect(gameboard.placeShip(shipThreePlacementDetails)).toBe("Ship placed");
  });

  test("ships will not place overtop of another", () => {
    const gameboard = new GameBoard();
    const ship = new Ship(4);

    const shipOnePlacementDetails = {
      xvalue: 6,
      yvalue: 6,
      allignment: "vertical",
      shipLength: ship.totalLength,
    };

    const shipTwoPlacementDetails = {
      xvalue: 6,
      yvalue: 6,
      allignment: "vertical",
      shipLength: ship.totalLength,
    };

    gameboard.placeShip(shipOnePlacementDetails);

    expect(gameboard.placeShip(shipTwoPlacementDetails)).toBe(
      "ships are overlapping"
    );
  });

  test("ship will not place overtop of another one horizontal one vertical", () => {
    const gameboard = new GameBoard();
    const ship = new Ship(4);

    const shipOnePlacementDetails = {
      xvalue: 6,
      yvalue: 6,
      allignment: "vertical",
      shipLength: ship.totalLength,
    };

    const shipTwoPlacementDetails = {
      xvalue: 4,
      yvalue: 6,
      allignment: "horizontal",
      shipLength: ship.totalLength,
    };

    gameboard.placeShip(shipOnePlacementDetails);

    expect(gameboard.placeShip(shipTwoPlacementDetails)).toBe(
      "ships are overlapping"
    );
  });
});
