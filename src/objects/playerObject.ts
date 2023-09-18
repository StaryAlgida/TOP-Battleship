import { Ship, createShip } from "./shipObject";

interface Player {
  name: string;
  ships: Ship[];
  score: number;
  selectedShip: number;
}

function createPlayer(name: string): Player {
  const player: Player = {
    name,
    ships: [],
    score: 0,
    selectedShip: 0,
  };
  getShips(player);

  return player;
}

function getShips(player: Player) {
  player.ships.push(createShip(5));
  player.ships.push(createShip(4));
  player.ships.push(createShip(3));
  player.ships.push(createShip(3));
  player.ships.push(createShip(2));
}

export { createPlayer, Player };
