interface Ship {
  cords: number[];
  len: number;
  hits: number;
  sunk: boolean;
  isShipsSet: boolean;
  isSunk(): void;
  setHit(): void;
  getHits(): number;
  getLen(): number;
}

function createShip(len: number): Ship {
  const ship: Ship = {
    cords: [],
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
