import { drawGrid } from "./placeShipScreen";
import "./attackScreen.css";

const attackScreen = async (playerGameBoard, computerGameBoard) => {
  const content = document.querySelector("content");

  content.classList.add("grid-gap");
  //   content.classList.remove("align-items-center");

  addDirectionMsg("Directions will be going in here ");

  const { playerGridContainer, computerGridContainer } =
    setupGrids(playerGameBoard);

  content.appendChild(playerGridContainer);
  content.appendChild(computerGridContainer);
};

const setupGrids = (playerGameBoard) => {
  const playersGrid = drawGrid();
  const computersGrid = drawGrid();

  const playerCols = playersGrid.childNodes;
  playerCols.forEach((col, i) => {
    col.childNodes.forEach((gridSquare, j) => {
      if (playerGameBoard.board[j][i] !== "") {
        gridSquare.classList.add("ship");
      }
    });
  });

  const playerGridContainer = document.createElement("div");
  playerGridContainer.classList.add("player-grid");
  const playerWaters = document.createElement("h2");
  playerWaters.textContent = "Player Waters";
  playerGridContainer.appendChild(playerWaters);
  playerGridContainer.appendChild(playersGrid);

  const computerGridContainer = document.createElement("div");
  computerGridContainer.classList.add("computer-grid");
  const computerWaters = document.createElement("h2");
  computerWaters.textContent = "Enemy Waters";
  computerGridContainer.appendChild(computerWaters);
  computerGridContainer.appendChild(computersGrid);

  return { playerGridContainer, computerGridContainer };
};

const playersAtkChoice = (computerGameBoard) => {
  return new Promise((resolve, reject) => {
    const computerCols = document.querySelector(
      ".computer-grid > .grid-container"
    ).childNodes;

    const clickHandler = (e) => {
      const attackPlaced = handlePlayerAttack(e, computerGameBoard);
      computerCols.forEach((col) => {
        col.childNodes.forEach((gridSquare) => {
          gridSquare.removeEventListener("click", clickHandler);
        });
      });
      if (!attackPlaced) reject("incorrect Location");
      else resolve([e.target.id[0], e.target.id[2]]);
    };

    computerCols.forEach((col) => {
      col.childNodes.forEach((gridSquare) => {
        gridSquare.addEventListener("click", clickHandler);
      });
    });
  });
};

const handlePlayerAttack = (e, computerGameBoard) => {
  if (e.target.classList.contains("hit-circle")) return false;
  else if (e.target.classList.contains("miss-circle")) return false;
  else if (e.target.classList.contains("flex-centered")) return false;

  const xval = e.target.id[2];
  const yval = e.target.id[0];

  const circle = document.createElement("div");
  e.target.classList.add("flex-centered");

  if (
    computerGameBoard[yval][xval] === "" ||
    computerGameBoard[yval][xval] === "m"
  ) {
    circle.classList.add("miss-circle");
    e.target.appendChild(circle);
    return true;
  } else {
    circle.classList.add("hit-circle");
    e.target.appendChild(circle);
    return true;
  }
};

const addDirectionMsg = (msg) => {
  const controls = document.getElementById("controls");

  const directionContainer = document.createElement("div");
  directionContainer.classList.add("directions-container");

  const directions = document.createElement("h1");
  directions.textContent = msg;
  directionContainer.appendChild(directions);

  controls.appendChild(directionContainer);
};

export { attackScreen, playersAtkChoice };
