import "./placeShipScreen.css";
import Ship from "../game logic/ship";

const placeShipScreen = async () => {
  const content = document.querySelector("content");
  content.appendChild(drawlGrid());
  content.style.alignItems = "center";

  addControlsOnScreen();

  const ships = [
    new Ship(5, undefined, "Carrier", undefined),
    new Ship(4, undefined, "Battleship", undefined),
    new Ship(3, undefined, "Destroyer", undefined),
    new Ship(3, undefined, "Submarine", undefined),
    new Ship(2, undefined, "Partrol Boat", undefined),
  ];

  for (const ship of ships) {
    const hoverEventRef = addHoverEffect(ship.totalLength);
    //placeShipOnClick will modify the current ships alignment and location fields
    await placeShipOnClick(ship);
    removeHoverEffect(hoverEventRef);
  }

  for (const ship of ships) {
    console.log(ship);
  }

  return ships;
};

const drawlGrid = () => {
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

  h1.textContent = `Place your {blah blach lachh}`;

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
    handleHover(e, shipLength);
  };

  squares.forEach((gridSquare) => {
    gridSquare.addEventListener("mouseover", hoverHandler);
    gridSquare.addEventListener("mouseleave", hoverHandler);
  });

  return hoverHandler;
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
  return new Promise((resolve) => {
    const squares = document.querySelectorAll(".grid-square");

    const clickHandler = (e) => {
      placeShipOnClickHelper(e, ship);
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

//this function will modifiy the passed in ship value
const placeShipOnClickHelper = (e, ship) => {
  const btnVal = document.querySelector(".change-direction-btn").textContent;
  let xval = e.target.id[2];
  let yval = e.target.id[0];
  ship.location = e.target.id;

  if (btnVal === "Horizontal") {
    ship.alignment = "Vertical";

    for (let i = 0; i < ship.totalLength; i++) {
      let startOfHighlight = i + Number(yval);

      if (e.target.classList.contains("ship-highlight-error")) {
        console.log("error");
        return;
      }
      document
        .getElementById(`${[startOfHighlight, xval]}`)
        .classList.toggle("ship-placed");
    }
  } else {
    ship.alignment = "Horizontal";

    for (let i = 0; i < ship.totalLength; i++) {
      let startOfHighlight = i + Number(xval);

      if (e.target.classList.contains("ship-highlight-error")) {
        return;
      }

      document
        .getElementById(`${[yval, startOfHighlight]}`)
        .classList.toggle("ship-placed");
    }
  }
};

const handleHover = (event, shipLength) => {
  const btnVal = document.querySelector(".change-direction-btn").textContent;
  let xval = event.target.id[2];
  let yval = event.target.id[0];

  //highlight the squares vertically
  if (btnVal === "Horizontal") {
    for (let i = 0; i < shipLength; i++) {
      let startOfHighlight = i + Number(yval);

      //highlight will overflow grid so color it red
      if (startOfHighlight > 9) {
        event.target.classList.toggle("ship-highlight-error");
        //need to disable the div from being able to be clicked
        return;
      }

      document
        .getElementById(`${[startOfHighlight, xval]}`)
        .classList.toggle("ship-highlight");
    }
    //highlight the squares horizontally
  } else {
    for (let i = 0; i < shipLength; i++) {
      let startOfHighlight = i + Number(xval);

      //highlight will overflow grid so color it red
      if (startOfHighlight > 9) {
        event.target.classList.toggle("ship-highlight-error");

        return;
      }

      document
        .getElementById(`${[yval, startOfHighlight]}`)
        .classList.toggle("ship-highlight");
    }
  }
};

export default placeShipScreen;
