class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
    this.sunk = false;
  }

  hit() {
    this.hits += 1;
    this.isSunk();
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
    return newShip;
  }

  receiveAttack(x, y) {
    let hitShip = null;

    for (let entry of this.board) {
      const { ship, coordinates } = entry;
      for (let coord of coordinates) {
        if (coord[0] === x && coord[1] === y) {
          ship.hit();
          hitShip = ship;
          break;
        }
      }
    }

    if (!hitShip) {
      this.missedAttacks.push([x, y]);
    }

    return hitShip ? "hit" : "miss";
  }

  allShipsSunk() {
    return this.ships.every((ship) => ship.sunk);
  }
}
class Player {
  constructor(name) {
    this.name = name;
    this.gameboard = new Gameboard();
  }

  placeShip(length, coordinates) {
    this.gameboard.placeShip(length, coordinates);
  }

  attack(opponent, x, y) {
    return opponent.gameboard.receiveAttack(x, y);
  }
}
class Game {
  constructor(player1Name, player2Name) {
    this.player1 = new Player(player1Name);
    this.player2 = new Player(player2Name);
    this.currentPlayer = this.player1;
    this.opponent = this.player2;
  }

  switchTurn() {
    [this.currentPlayer, this.opponent] = [this.opponent, this.currentPlayer];
  }

  playTurn(x, y) {
    const result = this.currentPlayer.attack(this.opponent, x, y);
    if (this.opponent.gameboard.allShipsSunk()) {
      console.log(`${this.currentPlayer.name} wins!`);
      return "game over";
    }
    this.switchTurn();
    return result;
  }

  setupPlayerShips(player, ships) {
    ships.forEach((ship) => {
      player.placeShip(ship.length, ship.coordinates);
    });
  }

  startGame() {
    console.log("The game has started!");
  }
}
const game = new Game("Player 1", "Player 2");

// Example ship placements for Player 1 and Player 2
game.setupPlayerShips(game.player1, [
  {
    length: 3,
    coordinates: [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
  },
  {
    length: 2,
    coordinates: [
      [2, 2],
      [2, 3],
    ],
  },
]);

game.setupPlayerShips(game.player2, [
  {
    length: 3,
    coordinates: [
      [1, 0],
      [1, 1],
      [1, 2],
    ],
  },
  {
    length: 2,
    coordinates: [
      [3, 2],
      [3, 3],
    ],
  },
]);

game.startGame();

// Example turns
console.log(game.playTurn(0, 0)); // Player 1 attacks (0, 0)
console.log(game.playTurn(1, 0)); // Player 2 attacks (1, 0)
console.log(game.playTurn(0, 1)); // Player 1 attacks (0, 1)
console.log(game.playTurn(1, 1)); // Player 2 attacks (1, 1)
console.log(game.playTurn(0, 2)); // Player 1 attacks (0, 2)
// Continue playing until all ships of one player are sunk
