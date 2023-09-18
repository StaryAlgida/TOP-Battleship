interface Ship {
  len: number;
  hits: number;
  sunk: boolean;
  setSunk(): void;
  isSunk(): void;
  setHit(): void;
  getHits(): number;
  getLen(): number;
}

function createShip(len: number): Ship {
  const ship: Ship = {
    len,
    hits: 0,
    sunk: false,
    setSunk() {
      this.sunk = true;
    },
    isSunk() {
      if (this.hits === this.len) this.setSunk();
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
