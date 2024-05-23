class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
    this.sunk = false;
  }

  hit() {
    this.hits += 1;
  }

  isSunk() {
    if (this.hits === this.length) {
      this.sunk = true;
    }
  }
}

class Gameboard {
  constructor() {
    this.board = [];
    this.missedAttacks = [];
    this.ships = [];
  }

  placeShip(length, coordinates) {
    const newShip = new Ship(length);
    this.board.push({ ship: newShip, coordinates });
    this.ships.push(newShip);
    console.log(newShip);
    console.log(this.board);
    return newShip;
  }
}

const gameboard = new Gameboard();

const placedShip = gameboard.placeShip(1, [3, 5]);
console.log(placedShip);
console.log(gameboard.board);
