import { Ship, createShip } from "./shipObject";

interface Player {
  name: string;
  ships: Ship[];
  score: number;
  selectedShip: number;
  direction: string; //false:x true:y
}

function createPlayer(name: string): Player {
  const player: Player = {
    name,
    ships: [],
    score: 0,
    selectedShip: -1,
    direction: "y",
  };
  getShips(player);

  return player;
}

function getShips(player: Player) {
  player.ships.push(createShip(5, 0));
  player.ships.push(createShip(4, 1));
  player.ships.push(createShip(3, 2));
  player.ships.push(createShip(3, 3));
  player.ships.push(createShip(2, 4));
}

export { createPlayer, Player };
