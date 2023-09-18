import { webInit } from "./webInit";
import "./style.css";
import { Player, createPlayer } from "./objects/playerObject";
import { createGameBoard } from "./objects/boardObject";

let Board1;
let Board2;
let Player1: Player;
let Player2;

window.onload = () => {
  webInit();
  // fieldRender("player1");
  // fieldRender("player2");

  const name = document.getElementById("player-name") as HTMLInputElement;
  const startButton = document.getElementById("strat");
  if (startButton && name) {
    startButtonListner(startButton, name);
  }
};

function startButtonListner(button: Element, input: HTMLInputElement) {
  const error = document.getElementById("error");
  if (error) {
    button.addEventListener("click", () => {
      if (input.value) {
        setUpSection(input.value);
        makePlayerAndBoard(input.value);
        radioListner();
      } else {
        error.innerHTML = `Invalid name`;
      }
    });
  }
}

function setUpSection(name: string) {
  const section = document.querySelector("section");
  if (section) {
    section.innerHTML = `
    <div id="menu"><h2>Place yours ships</h2></div>
    <div id="boards">
      <span id="player1-name">${name}</span>
      <span id="player2-name">Ships</span>
      <div class="players-boards" id="player1"></div>
      <div id="ships">
        <div>
          <input type="radio" name="ship" class="ships-choose" value="5">5
        </div>
        <div>
          <input type="radio" name="ship" class="ships-choose" value="4">4
        </div>
        <div>
          <input type="radio" name="ship" class="ships-choose"" value="3">3
        </div>
        <div>
          <input type="radio" name="ship" class="ships-choose" value="2">2
        </div>
      </div>
    </div>`;
  }
}

function radioListner() {
  const radio = document.querySelectorAll(
    ".ships-choose"
  ) as NodeListOf<HTMLInputElement>;
  radio.forEach((e) => {
    e.addEventListener("click", () => {
      Player1.selectedShip = parseInt(e.value);
    });
  });
}

function makePlayerAndBoard(name: string) {
  Player1 = createPlayer(name);

  const container = document.getElementById("player1");
  if (container) Board1 = createGameBoard(container);
}
