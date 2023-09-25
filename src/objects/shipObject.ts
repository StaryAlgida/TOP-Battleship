interface Ship {
  id: number;
  cords: number[][];
  len: number;
  hits: number;
  sunk: boolean;
  isShipsSet: boolean;
  isSunk(): void;
  setHit(): void;
  getHits(): number;
  getLen(): number;
}

function createShip(len: number, id: number): Ship {
  const ship: Ship = {
    id,
    cords: [[], []],
    len,
    hits: 0,
    sunk: false,
    isShipsSet: false,
    isSunk() {
      if (this.hits === this.len) this.sunk = true;
    },
    setHit() {
      this.hits += 1;
    },
    getHits() {
      return this.hits;
    },
    getLen() {
      return this.len;
    },
  };
  return ship;
}

export { createShip, Ship };
