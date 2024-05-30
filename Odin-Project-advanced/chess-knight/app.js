class Chess {
  constructor() {
    this.square = [];
  }

  createNodes() {
    //create the squares of the chess field

    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        this.square.push([x, y]);
      }
    }
    console.log(this.square);
  }

  createEdges() {
    //create the connections of a knight
    this.square.forEach((number) => console.log(number));
  }
}

const board = new Chess();
board.createNodes();
board.createEdges();
