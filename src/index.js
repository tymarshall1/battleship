import "./style.css";
import startScreen from "./ui/startScreen";
import Player from "./game logic/player.js";
const gameLoop = async () => {
  const content = document.querySelector("content");

  //init players
  const { startScreenContainer, createPlayerPromise } = startScreen();
  content.appendChild(startScreenContainer);
  const playerOne = await createPlayerPromise;
  const computer = new Player("Computer", false);

  console.log(playerOne);
};

gameLoop();
