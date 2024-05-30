class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(array) {
    this.root = this.buildTree(array);
  }

  buildTree(array) {
    if (array.length === 0) {
      return null;
    }

    // Remove duplicates and sort the array
    array = [...new Set(array)].sort((a, b) => a - b);

    return this.buildBST(array, 0, array.length - 1);
  }

  buildBST(array, start, end) {
    if (start > end) {
      return null;
    }

    const mid = Math.floor((start + end) / 2);
    const node = new Node(array[mid]);

    node.left = this.buildBST(array, start, mid - 1);
    node.right = this.buildBST(array, mid + 1, end);

    return node;
  }
}

// Example usage:
const arr = [10, 20, 30, 40, 50, 60, 70];
const tree = new Tree(arr);

console.log(tree.root); // Outputs the root node of the constructed BST
