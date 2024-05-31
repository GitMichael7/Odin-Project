class Chess {
  constructor() {
    this.square = [];
    this.edges = [];
    this.adjacencyList = new Map(); // Initialize the adjacency list as a class property
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
    // Add all nodes to the adjacency list
    this.square.forEach((square) => {
      this.adjacencyList.set(square.toString(), []);
    });

    // Add edges to the adjacency list
    this.square.forEach((square, index) => {
      const edges = this.edges[index];
      edges.forEach((edge) => {
        this.adjacencyList.get(square.toString()).push(edge.toString());
      });
    });

    console.log("Adjacency List:");
    console.log(this.adjacencyList);
  }

  breadthFirstSearch(start, end) {
    // Convert start and end to strings for consistency
    const startString = start.toString();
    const endString = end.toString();

    const visited = new Set();
    const queue = [startString];
    const predecessors = new Map();

    visited.add(startString);
    predecessors.set(startString, null);

    while (queue.length > 0) {
      const square = queue.shift();

      if (square === endString) {
        console.log("found it");
        // Reconstruct the path from end to start
        const path = [];
        let current = endString;
        while (current !== null) {
          path.unshift(current.split(",").map(Number)); // Convert string back to array of numbers
          current = predecessors.get(current);
        }
        console.log("Fastest Path:", path);
        return;
      }

      const edges = this.adjacencyList.get(square) || [];
      for (const edge of edges) {
        if (!visited.has(edge)) {
          visited.add(edge);
          queue.push(edge);
          predecessors.set(edge, square);
        }
      }
    }

    console.log("not found");
  }
}

const board = new Chess();
board.createNodes();
board.createEdges();
board.createAdjacencyList();
board.breadthFirstSearch([0, 0], [7, 7]);
