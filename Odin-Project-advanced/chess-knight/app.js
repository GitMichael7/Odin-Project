class Chess {
  constructor() {
    this.square = [];
    this.edges = [];
  }

  createNodes() {
    // Create the squares of the chess field
    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        this.square.push([x, y]);
      }
    }
  }

  createEdges() {
    // Create the connections of a knight
    this.edges = this.square.map((number) => {
      const potentialMoves = [
        [number[0] + 2, number[1] + 1],
        [number[0] + 2, number[1] - 1],
        [number[0] - 2, number[1] + 1],
        [number[0] - 2, number[1] - 1],
        [number[0] + 1, number[1] + 2],
        [number[0] + 1, number[1] - 2],
        [number[0] - 1, number[1] + 2],
        [number[0] - 1, number[1] - 2],
      ];

      return potentialMoves.filter((edge) => {
        return edge[0] >= 0 && edge[0] <= 7 && edge[1] >= 0 && edge[1] <= 7;
      });
    });
  }

  createAdjacencyList() {
    const adjacencyList = new Map();

    // Add all nodes to the adjacency list
    this.square.forEach((square) => {
      adjacencyList.set(square.toString(), []);
    });

    // Add edges to the adjacency list
    this.square.forEach((square, index) => {
      const edges = this.edges[index];
      edges.forEach((edge) => {
        adjacencyList.get(square.toString()).push(edge.toString());
      });
    });
    return adjacencyList;
  }
}

const board = new Chess();
board.createNodes();
board.createEdges();
const adjacencyList = board.createAdjacencyList();
console.log(adjacencyList);
