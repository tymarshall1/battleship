import "./startScreen.css";
import Player from "../game logic/player.js";

const startScreen = () => {
  const startScreenContainer = document.createElement("div");
  const label = document.createElement("label");
  const textInput = document.createElement("input");
  const startGameBtn = document.createElement("button");
  const errorMsg = document.createElement("p");

  label.htmlFor = "playerName";
  label.textContent = "Enter Player Name:";

  textInput.id = "playerName";
  textInput.type = "text";
  textInput.placeholder = "Name";
  textInput.required = true;
  textInput.type = "text";

  startGameBtn.textContent = "Start Game";

  const createPlayerPromise = new Promise((resolve) => {
    startGameBtn.addEventListener("click", () => {
      if (!textInput.checkValidity()) {
        textInput.classList.add("error");
        errorMsg.textContent = textInput.validationMessage;
        return;
      }
      resolve(new Player(textInput.value, true));
    });
  });

  errorMsg.classList.add("error-msg");
  startScreenContainer.classList.add("start-screen-container");
  startScreenContainer.appendChild(label);
  startScreenContainer.appendChild(errorMsg);
  startScreenContainer.appendChild(textInput);
  startScreenContainer.appendChild(startGameBtn);
  return { startScreenContainer, createPlayerPromise };
};

export default startScreen;
