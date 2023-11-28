const Player = require("../game logic/player");
const GameBoard = require("../game logic/gameboard");
const Ship = require("../game logic/ship");

describe("Player functions", () => {
  test("Players name is returned correctly", () => {
    const playerOne = new Player("Tyler", true);
    expect(playerOne.displayName).toBe("Tyler");
  });

  test("player ones turn is true then computers turn is false", () => {
    const player = new Player("Tyler", true);
    const computer = new Player("Computer", false);
    expect(player.isTurn).toBeTruthy();
    expect(computer.isTurn).toBeFalsy();
  });

  test("player one and computer switch turns after a play has been made", () => {
    const player = new Player("Tyler", true);
    const computer = new Player("Computer", false);

    expect(player.isTurn).toBeTruthy();
    expect(computer.isTurn).toBeFalsy();

    //play is made

    player.changeTurn();
    computer.changeTurn();

    expect(player.isTurn).toBeFalsy();
    expect(computer.isTurn).toBeTruthy();
  });

  test("player spot to attack is set correctly", () => {
    const player = new Player("Tyler", true);

    player.attack = [4, 7];
    expect(player.attack[0]).toBe(4);
    expect(player.attack[1]).toBe(7);
  });

  test("player spot to attack cant be over 9", () => {
    const player = new Player("Tyler", true);

    expect(() => {
      player.attack = [4, 10];
    }).toThrow("Incorrect attack coordinates");
  });

  test("computer can fire a random shot", () => {
    const computer = new Player("Computer", false);
    const gameboard = new GameBoard();

    computer.smartMove(gameboard.board);

    const yval = computer.attack[0];
    const xval = computer.attack[1];

    expect(gameboard.board[yval][xval]).toBe("");
    gameboard.receiveAttack(yval, xval);
    expect(gameboard.board[yval][xval]).toBe("m");
  });

  test("computer will reroll a shot if its already being used on the board", () => {
    const computer = new Player("Computer", false);
    const gameboard = new GameBoard();

    //fill up the entire board except for the very last space
    for (let i = 0; i < gameboard.board.length; i++) {
      for (let j = 0; j < gameboard.board[i].length; j++) {
        if (i === 9 && j === 9) continue;
        gameboard.board[i][j] = "m";
      }
    }

    computer.smartMove(gameboard.board);

    const yval = computer.attack[0];
    const xval = computer.attack[1];

    expect(yval).toBe(9);
    expect(xval).toBe(9);
    expect(gameboard.board[yval][xval]).toBe("");
    gameboard.receiveAttack(yval, xval);
    expect(gameboard.board[yval][xval]).toBe("m");
  });
});
