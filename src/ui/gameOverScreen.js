import "./gameOverScreen.css";

const gameOverModal = (msg) => {
  const root = document.querySelector("#root");

  const dialog = document.createElement("dialog");
  dialog.classList.add("modal");
  dialog.id = "modal";

  const header = document.createElement("h2");
  header.textContent = msg;

  const playAgainBtn = document.createElement("button");
  playAgainBtn.textContent = "Play Again";
  playAgainBtn.classList.add("play-again-btn");
  playAgainBtn.id = "playAgain";
  playAgainBtn.addEventListener("click", () => {
    location.reload();
  });

  dialog.appendChild(header);
  dialog.appendChild(playAgainBtn);

  root.appendChild(dialog);
};

export default gameOverModal;
