import "./style.css";
import startScreen from "./ui/startScreen";
import Player from "./game logic/player.js";
import { placeShipScreen } from "./ui/placeShipScreen";
import GameBoard from "./game logic/gameboard";
import Ship from "./game logic/ship";
import gameOverModal from "./ui/gameOverScreen";
import {
  attackScreen,
  playersAtkChoice,
  renderComputersAttack,
  addDirectionMsg,
  clearDirectionMsg,
  highlightSunkShips,
} from "./ui/attackScreen";

const gameLoop = async () => {
  //shows start screen and initilizes players
  const { player, computer } = await initPlayers();

  clearGameScreen();

  //shows place ship screen and initilizes the player
  //and computer gameboards with ships
  const { playerGameBoard, computerGameBoard } = await initGameBoards();

  clearGameScreen();
  clearDirectionMsg();

  attackScreen(playerGameBoard, computerGameBoard);
  await addDirectionMsg(
    `Welcome to the battlefield, Captain ${player.displayName}.`,
    1500
  );

  //while the computer and player both have ships still
  while (!playerGameBoard.allShipsSunk() && !computerGameBoard.allShipsSunk()) {
    try {
      // player attacks
      clearDirectionMsg();
      await addDirectionMsg(
        `Waiting on your target, Captain ${player.displayName}! `,
        1000
      );
      const playersAtk = await playersAtkChoice(computerGameBoard.board);
      const pHitOrMiss = computerGameBoard.receiveAttack(
        playersAtk[0],
        playersAtk[1]
      );

      clearDirectionMsg();
      await addDirectionMsg(
        `You fire a shot into enemy waters and its a ${pHitOrMiss}.`,
        1600
      );
      await highlightSunkShips(computerGameBoard.shipsOnBoard);

      if (computerGameBoard.allShipsSunk()) break;
      //computer attacks

      computer.smartMove(playerGameBoard.board);
      const cHitOrMiss = playerGameBoard.receiveAttack(
        computer.attack[0],
        computer.attack[1]
      );

      clearDirectionMsg();
      await addDirectionMsg(
        `The enemy fires a shot back and its a ${cHitOrMiss}.`,
        1600
      );
      renderComputersAttack(computer.attack[0], computer.attack[1]);
    } catch (error) {
      console.error(error);
    }
  }
  const computerHasWon = playerGameBoard.allShipsSunk();

  let winningMsg = "";
  computerHasWon
    ? (winningMsg = "The computer kicked your butt. Better luck next time!")
    : (winningMsg = "You managed to beat the computer. Nicely done!");

  gameOverModal(winningMsg);
  document.querySelector("#modal").showModal();
};

const initPlayers = async () => {
  const playerPromise = startScreen();

  const player = await playerPromise;
  const computer = new Player("Computer", false);

  return { player, computer };
};

const initGameBoards = async () => {
  const playerGameBoard = new GameBoard();
  const computerGameBoard = new GameBoard();

  await setPlayerShipsOnGameboard(playerGameBoard);
  setComputerShipsOnGameboard(computerGameBoard);
  return { playerGameBoard, computerGameBoard };
};

const setPlayerShipsOnGameboard = async (playerGameBoard) => {
  const shipArray = await placeShipScreen();
  for (let ship of shipArray) {
    playerGameBoard.placeShip(ship);
  }
};

const setComputerShipsOnGameboard = (computerGameBoard) => {
  const shipArray = computerShipLocations();

  for (let ship of shipArray) {
    computerGameBoard.placeShip(ship);
  }
};
//static ship spawns for now
const computerShipLocations = () => {
  switch (Math.floor(Math.random() * 5)) {
    case 0:
      return [
        new Ship(5, [0, 0], "Carrier", "vertical"),
        new Ship(4, [6, 0], "Battleship", "vertical"),
        new Ship(3, [2, 5], "Destroyer", "horizontal"),
        new Ship(3, [1, 6], "Submarine", "vertical"),
        new Ship(2, [8, 8], "Patrol Boat", "horizontal"),
      ];
    case 1:
      return [
        new Ship(5, [2, 3], "Carrier", "vertical"),
        new Ship(4, [6, 0], "Battleship", "horizontal"),
        new Ship(3, [5, 6], "Destroyer", "horizontal"),
        new Ship(3, [8, 7], "Submarine", "vertical"),
        new Ship(2, [2, 8], "Patrol Boat", "vertical"),
      ];
    case 2:
      return [
        new Ship(5, [2, 7], "Carrier", "horizontal"),
        new Ship(4, [6, 2], "Battleship", "horizontal"),
        new Ship(3, [3, 2], "Destroyer", "vertical"),
        new Ship(3, [7, 9], "Submarine", "horizontal"),
        new Ship(2, [0, 4], "Patrol Boat", "vertical"),
      ];
    case 3:
      return [
        new Ship(5, [3, 4], "Carrier", "vertical"),
        new Ship(4, [7, 5], "Battleship", "vertical"),
        new Ship(3, [5, 1], "Destroyer", "horizontal"),
        new Ship(3, [0, 1], "Submarine", "horizontal"),
        new Ship(2, [0, 6], "Patrol Boat", "horizontal"),
      ];
    case 4:
      return [
        new Ship(5, [3, 5], "Carrier", "horizontal"),
        new Ship(4, [4, 0], "Battleship", "horizontal"),
        new Ship(3, [2, 1], "Destroyer", "vertical"),
        new Ship(3, [1, 7], "Submarine", "vertical"),
        new Ship(2, [8, 2], "Patrol Boat", "horizontal"),
      ];
  }
};

const clearGameScreen = () => {
  document.querySelector("content").innerHTML = "";
};
gameLoop();
