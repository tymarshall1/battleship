import "./style.css";
import startScreen from "./ui/startScreen";
import Player from "./game logic/player.js";
import placeShipScreen from "./ui/placeShipScreen";

const gameLoop = async () => {
  //shows start screen and initilizes players
  // const { playerOne, computer } = await initPlayers();

  // clearGameScreen();

  // shows place ship screen and initilizes ships
  initShips();
};

const initPlayers = async () => {
  const playerPromise = startScreen();

  const playerOne = await playerPromise;
  const computer = new Player("Computer", false);

  return { playerOne, computer };
};

const initShips = () => {
  placeShipScreen();
};

const clearGameScreen = () => {
  document.querySelector("content").innerHTML = "";
};

gameLoop();
