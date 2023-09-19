import { Field, createField, generateField } from "./fieldObject";
import { Player } from "./playerObject";

interface GameBoard {
  fields: Field[][];
  miss: number;
  hit: number;
  shipPlaceing: boolean;
  player: Player;
}

function createGameBoard(
  container: Element,
  shipPlaceing: boolean,
  PlayerObj: Player
): GameBoard {
  const Board: GameBoard = {
    fields: new Array(10).fill(0).map(() => new Array(10).fill(0)),
    miss: 0,
    hit: 0,
    shipPlaceing,
    player: PlayerObj,
  };

  createFields(Board, container);

  return Board;
}

function createFields(Board: GameBoard, container: Element) {
  console.log(Board.fields);

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const div = generateField();
      const fieldObj = createField([i, j], div);

      fieldMoveListner(fieldObj, Board);
      setShipListner(fieldObj, Board);

      Board.fields[i][j] = fieldObj;
      container.appendChild(div);
    }
  }
  console.log(Board.fields);
}

function fieldMoveListner(fieldOb: Field, board: GameBoard) {
  //place x
  fieldOb.field.addEventListener("mouseover", () => {
    if (board.shipPlaceing) {
      switch (board.player.direction) {
        case "x":
          let id = fieldOb.id[0];
          let col = fieldOb.id[1];
          if (col + board.player.selectedShip <= 10) {
            for (let i = col; i < col + board.player.selectedShip; i++) {
              board.fields[id][i].field.className = `grey field`;
            }
          }
          break;
        case "y":
          break;
      }
    }
  });
  //clear x
  fieldOb.field.addEventListener("mouseout", () => {
    switch (board.player.direction) {
      case "x":
        if (board.shipPlaceing) {
          board.fields[fieldOb.id[0]].forEach((e) => {
            e.field.className = `field`;
          });
        }
        break;
      case "y":
        break;
    }
  });
}

function setShipListner(fieldObj: Field, Board: GameBoard) {
  fieldObj.field.addEventListener("click", () => {
    const radio = document.getElementById(
      `${Board.player.selectedShip}`
    ) as HTMLInputElement;
    if (radio) {
      radio.checked = false;
      radio.className = `disable`;
      Board.player.selectedShip = 0;
    }
  });
}

export { createGameBoard };
