import "./placeShipScreen.css";
import Ship from "../game logic/ship";

const placeShipScreen = async () => {
  const content = document.querySelector("content");
  content.appendChild(drawGrid());
  content.style.alignItems = "center";

  addControlsOnScreen();

  //initializing ships here with undefined for:
  //location - user needs to select where each ship will go
  //alignment - user will select either horizontal or vertical via a button
  const ships = [
    new Ship(5, undefined, "Carrier", undefined),
    new Ship(4, undefined, "Battleship", undefined),
    new Ship(3, undefined, "Destroyer", undefined),
    new Ship(3, undefined, "Submarine", undefined),
    new Ship(2, undefined, "Patrol Boat", undefined),
  ];

  await placeShipsSequentially(ships);

  return ships;
};

const drawGrid = () => {
  const container = document.createElement("div");

  for (let i = 0; i < 10; i++) {
    const col = document.createElement("div");
    col.classList.add("grid-col");
    for (let j = 0; j < 10; j++) {
      const gridSquare = document.createElement("div");
      gridSquare.classList.add("grid-square");
      gridSquare.id = `${[j, i]}`;
      col.appendChild(gridSquare);
    }
    container.appendChild(col);
  }

  container.classList.add("grid-container");
  return container;
};

const addControlsOnScreen = () => {
  const controls = document.getElementById("controls");
  const changeDirectionBtn = document.createElement("button");
  const h1 = document.createElement("h1");

  h1.id = "directionText";

  changeDirectionBtn.textContent = "Horizontal";
  changeDirectionBtn.classList.add("change-direction-btn");
  changeDirectionBtn.addEventListener("click", () => {
    changeDirectionBtn.textContent === "Horizontal"
      ? (changeDirectionBtn.textContent = "Vertical")
      : (changeDirectionBtn.textContent = "Horizontal");
  });

  controls.appendChild(h1);
  controls.appendChild(changeDirectionBtn);
};

const addHoverEffect = (shipLength) => {
  const squares = document.querySelectorAll(".grid-square");
  const hoverHandler = (e) => {
    addHoverEffectHelper(e, shipLength);
  };

  squares.forEach((gridSquare) => {
    gridSquare.addEventListener("mouseover", hoverHandler);
    gridSquare.addEventListener("mouseleave", hoverHandler);
  });
  return hoverHandler;
};

const addHoverEffectHelper = (event, shipLength) => {
  const oppositeAlignment = document.querySelector(
    ".change-direction-btn"
  ).textContent;
  const xval = event.target.id[2];
  const yval = event.target.id[0];
  resetUnwantedStyling();
  //highlight the squares vertically
  if (oppositeAlignment === "Horizontal") {
    for (let i = 0; i < shipLength; i++) {
      const startOfHighlight = i + Number(yval);
      if (!isValidSquare(event, shipLength, oppositeAlignment)) {
        event.target.classList.toggle("ship-highlight-error");
        return;
      }
      document
        .getElementById(`${[startOfHighlight, xval]}`)
        .classList.toggle("ship-highlight");
    }
    return;
  }
  //highlight the squares horizontally
  for (let i = 0; i < shipLength; i++) {
    const startOfHighlight = i + Number(xval);
    if (!isValidSquare(event, shipLength, oppositeAlignment)) {
      event.target.classList.toggle("ship-highlight-error");
      return;
    }
    document
      .getElementById(`${[yval, startOfHighlight]}`)
      .classList.toggle("ship-highlight");
  }
};

const removeHoverEffect = (hoverHandler) => {
  const squares = document.querySelectorAll(".grid-square");

  squares.forEach((gridSquare) => {
    gridSquare.removeEventListener("mouseover", hoverHandler);
    gridSquare.removeEventListener("mouseleave", hoverHandler);
  });
};

//this function calls placeShipOnClickHelper
//which will modify the ship objects fields
const placeShipOnClick = (ship) => {
  return new Promise((resolve, reject) => {
    const squares = document.querySelectorAll(".grid-square");

    const clickHandler = (e) => {
      let shipPlaced = placeShipOnClickHelper(e, ship);
      if (!shipPlaced) {
        reject();
      }
      squares.forEach((gridSquare) => {
        gridSquare.removeEventListener("click", clickHandler);
      });
      resolve();
    };

    squares.forEach((gridSquare) => {
      gridSquare.addEventListener("click", clickHandler);
    });
  });
};

//this function will modifiy the passed in ships fields
const placeShipOnClickHelper = (e, ship) => {
  const oppositeAlignment = document.querySelector(
    ".change-direction-btn"
  ).textContent;

  if (!isValidSquare(e, ship.totalLength, oppositeAlignment)) return false;

  const xval = e.target.id[2];
  const yval = e.target.id[0];
  ship.location = [xval, yval];

  if (oppositeAlignment === "Horizontal") {
    ship.alignment = "vertical";
    for (let i = 0; i < ship.totalLength; i++) {
      const startOfHighlight = i + Number(yval);
      document
        .getElementById(`${[startOfHighlight, xval]}`)
        .classList.add("ship-placed");
    }
    return true;
  }

  ship.alignment = "horizontal";
  for (let i = 0; i < ship.totalLength; i++) {
    const startOfHighlight = i + Number(xval);
    document
      .getElementById(`${[yval, startOfHighlight]}`)
      .classList.add("ship-placed");
  }
  return true;
};

const isValidSquare = (e, shipLength, oppositeAlignment) => {
  const xval = e.target.id[2];
  const yval = e.target.id[0];

  if (oppositeAlignment === "Horizontal") {
    for (let i = 0; i < shipLength; i++) {
      const startOfHighlight = i + Number(yval);
      const square = document.getElementById(`${[startOfHighlight, xval]}`);
      if (startOfHighlight > 9 || square.classList.contains("ship-placed"))
        return false;
    }
    return true;
  }

  for (let i = 0; i < shipLength; i++) {
    const startOfHighlight = i + Number(xval);
    const square = document.getElementById(`${[yval, startOfHighlight]}`);
    if (startOfHighlight > 9 || square.classList.contains("ship-placed"))
      return false;
  }
  return true;
};

const resetUnwantedStyling = () => {
  const squares = document.querySelectorAll(".grid-square");

  squares.forEach((gridSquare) => {
    gridSquare.classList.remove("ship-highlight-error");
    gridSquare.classList.remove("ship-highlight");
  });
};

const placeShipsSequentially = async (shipArray) => {
  let i = 0;
  let allShipsPlaced = false;

  while (!allShipsPlaced) {
    const hoverEventRef = addHoverEffect(shipArray[i].totalLength);
    try {
      //placeShipOnClick will modify the current ships alignment and location fields
      document.getElementById(
        "directionText"
      ).textContent = `Place Down Your ${shipArray[i].shipName}!`;
      await placeShipOnClick(shipArray[i]);
      i++;
      if (i === 5) {
        allShipsPlaced = true;
      }
    } catch (error) {
      console.log("rejected trying again...");
    } finally {
      removeHoverEffect(hoverEventRef);
    }
  }
};

export default placeShipScreen;
