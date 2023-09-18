import { createPlayer } from "../src/objects/playerObject";
import { Player } from "../src/objects/playerObject";
describe("Player", () => {
  let player: Player;
  beforeAll(() => {
    player = createPlayer("name");
  });

  it("name", () => {
    expect(player.name).toBe("name");
  });

  it("ships list", () => {
    expect(player.ships.length).toBe(5);
  });

  it("ships 1", () => {
    expect(player.ships[0].len).toBe(5);
  });
});
