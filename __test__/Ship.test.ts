import { createShip, Ship } from "../src/objects/shipObject";

describe("Ship object", () => {
  let shipObject: Ship;
  beforeAll(() => {
    shipObject = createShip(3);
  });

  it("len", () => {
    expect(shipObject.len).toBe(3);
  });
  it("hits", () => {
    expect(shipObject.hits).toBe(0);
  });
  it("sunk", () => {
    expect(shipObject.sunk).toBe(false);
  });
});

describe("Ship object finctions", () => {
  let shipObject: Ship;
  beforeEach(() => {
    shipObject = createShip(2);
  });

  it("setHit 2", () => {
    shipObject.setHit();
    shipObject.setHit();
    expect(shipObject.hits).toBe(2);
  });

  it("isSunk", () => {
    shipObject.setHit();
    shipObject.setHit();

    shipObject.isSunk();
    expect(shipObject.sunk).toBe(true);
  });

  it("getHits", () => {
    expect(shipObject.getHits()).toBe(0);
  });
  it("getLen", () => {
    expect(shipObject.getLen()).toBe(2);
  });
});
