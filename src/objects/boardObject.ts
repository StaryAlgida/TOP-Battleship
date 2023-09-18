import { Field, createField, generateField } from "./fieldObject";

interface GameBoard {
  fields: Field[];
  miss: number;
  hit: number;
  shipPlaceing: boolean;
}

function createGameBoard(container: Element): GameBoard {
  const Board: GameBoard = {
    fields: [],
    miss: 0,
    hit: 0,
    shipPlaceing: false,
  };

  createFields(Board, container);

  return Board;
}

function createFields(Board: GameBoard, container: Element) {
  for (let index = 0; index < 100; index++) {
    const div = generateField();

    Board.fields.push(createField(index, div));
    container.appendChild(div);
  }
}

export { createGameBoard };
