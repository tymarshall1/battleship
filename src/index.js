import "./style.css";
import startScreen from "./ui/startScreen";
import Player from "./game logic/player.js";
import { placeShipScreen } from "./ui/placeShipScreen";
import GameBoard from "./game logic/gameboard";
import Ship from "./game logic/ship";
import {
  attackScreen,
  playersAtkChoice,
  renderComputersAttack,
  addDirectionMsg,
  clearDirectionMsg,
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
    3500
  );

  //while the computer and player both have ships still
  while (!playerGameBoard.allShipsSunk() && !computerGameBoard.allShipsSunk()) {
    try {
      //player attacks
      clearDirectionMsg();
      await addDirectionMsg(
        `Waiting on your target, Captain ${player.displayName}! `,
        2000
      );
      const playersAtk = await playersAtkChoice(computerGameBoard.board);
      const pHitOrMiss = computerGameBoard.receiveAttack(
        playersAtk[0],
        playersAtk[1]
      );
      clearDirectionMsg();
      await addDirectionMsg(
        `You fire a shot into enemy waters and its a ${pHitOrMiss}.`,
        3600
      );

      //computer attacks

      computer.smartMove(playerGameBoard.board);
      const cHitOrMiss = playerGameBoard.receiveAttack(
        computer.attack[0],
        computer.attack[1]
      );
      clearDirectionMsg();
      await addDirectionMsg(
        `The enemy fires a shot back and its a ${cHitOrMiss}.`,
        3600
      );
      renderComputersAttack(computer.attack[0], computer.attack[1]);
    } catch (error) {
      console.error(error);
    }
  }
  console.log("game ended");
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
    console.log(playerGameBoard.placeShip(ship));
  }
};

const setComputerShipsOnGameboard = (computerGameBoard) => {
  const shipArray = [
    new Ship(5, [0, 0], "Carrier", "vertical"),
    new Ship(4, [1, 0], "Battleship", "vertical"),
    new Ship(3, [2, 0], "Destroyer", "vertical"),
    new Ship(3, [3, 0], "Submarine", "vertical"),
    new Ship(2, [4, 0], "Patrol Boat", "vertical"),
  ];

  for (let ship of shipArray) {
    computerGameBoard.placeShip(ship);
  }
};

const clearGameScreen = () => {
  document.querySelector("content").innerHTML = "";
};
gameLoop();
