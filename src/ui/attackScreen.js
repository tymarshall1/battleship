import { drawGrid } from "./placeShipScreen";
import "./attackScreen.css";

const attackScreen = (playerGameBoard, computerGameBoard) => {
  const content = document.querySelector("content");

  content.classList.add("grid-gap");
  content.classList.remove("align-items-center");

  addDirectionMsg("Directions will be going in here ");

  const { playerGridContainer, computerGridContainer } = setupGrids(
    playerGameBoard,
    computerGameBoard
  );

  content.appendChild(playerGridContainer);
  content.appendChild(computerGridContainer);
};

const setupGrids = (playerGameBoard, computerGameBoard) => {
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

  const computerCols = computersGrid.childNodes;
  computerCols.forEach((col, i) => {
    col.childNodes.forEach((gridSquare, j) => {
      gridSquare.addEventListener("click", (e) =>
        handlePlayerAttack(e, computerGameBoard.board)
      );
      if (computerGameBoard.board[j][i] !== "") {
        // gridSquare.classList.add("");
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

const handlePlayerAttack = (e, computerGameBoard) => {
  if (e.target.classList.contains("hit-circle")) return;
  else if (e.target.classList.contains("miss-circle")) return;
  else if (e.target.classList.contains("flex-centered")) return;

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
  } else {
    circle.classList.add("hit-circle");
    e.target.appendChild(circle);
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

export default attackScreen;
