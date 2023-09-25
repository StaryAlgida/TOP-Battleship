import { Field, createField, generateField } from "./fieldObject";
import { Player } from "./playerObject";
import { Ship } from "./shipObject";

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
let cords: number[][] = [[], []];

function fieldMoveListner(fieldOb: Field, board: GameBoard) {
  //place
  fieldOb.field.addEventListener("mouseover", () => {
    let shipLen: number = 0;

    if (board.player.selectedShip >= 0)
      shipLen = board.player.ships[board.player.selectedShip].getLen();

    if (board.shipPlaceing) {
      switch (board.player.direction) {
        case "x":
          for (let i = fieldOb.id[1]; i < fieldOb.id[1] + shipLen; i++) {
            cords[0].push(fieldOb.id[0]);
            cords[1].push(i);
          }
          break;
        case "y":
          for (let i = fieldOb.id[0]; i < fieldOb.id[0] + shipLen; i++) {
            cords[0].push(i);
            cords[1].push(fieldOb.id[1]);
          }
          break;
      }
      let noBorder: boolean = checkIfNoBorder(cords, board);
      if (noBorder) {
        let noShip: boolean = checkIfNoShip(cords, board);

        if (noShip && noBorder) setStyleAllowed(true, cords, board);
        else setStyleAllowed(false, cords, board);
      } else setStyleAllowed(false, cords, board);
    }
  });
  //clear
  fieldOb.field.addEventListener("mouseout", () => {
    if (board.shipPlaceing) {
      clearStyle(cords, board);
      cords = [[], []];
    }
  });
}

function setShipListner(fieldObj: Field, Board: GameBoard) {
  fieldObj.field.addEventListener("click", () => {
    let noBorder: boolean = checkIfNoBorder(cords, Board);
    if (noBorder) {
      let noShip: boolean = checkIfNoShip(cords, Board);
      if (noBorder && noShip) {
        const radio = document.getElementById(
          `${Board.player.selectedShip}`
        ) as HTMLInputElement;
        if (radio) {
          radio.checked = false;
          radio.className = `disable`;
          saveShipPos(fieldObj, Board);
          Board.player.selectedShip = -1;
        }
      }
    }
  });
}

function saveShipPos(fieldObj: Field, Board: GameBoard) {
  let idRow = fieldObj.id[0];
  let idCol = fieldObj.id[1];

  let shipChoosen!: Ship;
  Board.player.ships.forEach((ship) => {
    if (ship.id === Board.player.selectedShip) {
      shipChoosen = ship;
    }
  });

  switch (Board.player.direction) {
    case "x":
      for (let i = idCol; i < idCol + shipChoosen.getLen(); i++) {
        shipChoosen.cords[0].push(idRow);
        shipChoosen.cords[1].push(i);
        Board.fields[idRow][i].ship = true;
        Board.fields[idRow][i].field.className = `field grey not-allowed`;
      }

      break;
    case "y":
      for (let i = idRow; i < idRow + shipChoosen.getLen(); i++) {
        shipChoosen.cords[0].push(i);
        shipChoosen.cords[1].push(idCol);
        Board.fields[i][idCol].ship = true;
        Board.fields[i][idCol].field.className = `field grey not-allowed`;
      }
      break;
  }
}

function setStyleAllowed(
  isAllowed: boolean,
  cords: number[][],
  Board: GameBoard
) {
  let style = isAllowed ? `field grey` : `field not-allowed`;

  for (let i = 0; i < cords[0].length; i++) {
    let row = cords[0][i];
    let col = cords[1][i];
    if (row >= 10 || col >= 10) break;
    else if (Board.fields[row][col].ship) {
      Board.fields[row][col].field.className = `field grey not-allowed`;
      break;
    } else Board.fields[row][col].field.className = style;
  }
}

function checkIfNoShip(cords: number[][], Board: GameBoard): boolean {
  for (let i = 0; i < cords[0].length; i++) {
    let row = cords[0][i];
    let col = cords[1][i];
    if (Board.fields[row][col].ship) {
      return false;
    }
  }
  return true;
}

function checkIfNoBorder(cords: number[][], Board: GameBoard): boolean {
  let last: number | undefined;
  switch (Board.player.direction) {
    case "x":
      last = cords[1].at(-1);
      break;
    case "y":
      last = cords[0].at(-1);
      break;
  }
  console.log(last);

  if (last && last >= 10) return false;
  else return true;
}

function clearStyle(cords: number[][], Board: GameBoard) {
  for (let i = 0; i < cords[0].length; i++) {
    let row = cords[0][i];
    let col = cords[1][i];
    if (row >= 10 || col >= 10) break;
    if (Board.fields[row][col].ship)
      Board.fields[row][col].field.className = `field not-allowed grey`;
    else Board.fields[row][col].field.className = `field`;
  }
}

export { createGameBoard, GameBoard };
