import { GameBoard, createGameBoard } from "../src/objects/boardObject";
import { createField } from "../src/objects/fieldObject";
import { createPlayer } from "../src/objects/playerObject";

test("create Field", () => {
  const div = document.createElement("div");
  expect(createField([1, 2], div)).toStrictEqual({
    id: [1, 2],
    field: expect.any(Element),
    shooted: false,
    ship: false,
  });
});

test("board", () => {
  let board: GameBoard;
  let container = document.createElement("div");
  let player = createPlayer("test");
  beforeEach(() => {
    board = createGameBoard(container, true, player);
  });
});
