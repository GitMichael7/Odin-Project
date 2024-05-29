class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Append a node to the end of the list
  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Prepend a node to the start of the list
  prepend(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  // Return the size of the list
  size() {
    let count = 0;
    let current = this.head;
    while (current !== null) {
      count++;
      current = current.next;
    }
    return count;
  }

  // Return the first node in the list
  headNode() {
    return this.head;
  }

  // Return the last node in the list
  tail() {
    if (this.head === null) return null;
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    return current;
  }

  // Return the node at a given index
  at(index) {
    if (index < 0) return null;
    let current = this.head;
    let count = 0;
    while (current !== null) {
      if (count === index) return current;
      count++;
      current = current.next;
    }
    return null; // Index out of bounds
  }

  // Remove the last element from the list
  pop() {
    if (this.head === null) return null;
    if (this.head.next === null) {
      const popped = this.head;
      this.head = null;
      return popped;
    }
    let current = this.head;
    while (current.next.next !== null) {
      current = current.next;
    }
    const popped = current.next;
    current.next = null;
    return popped;
  }

  // Check if the list contains a value
  contains(value) {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) return true;
      current = current.next;
    }
    return false;
  }

  // Find the index of a node containing a value
  find(value) {
    let current = this.head;
    let index = 0;
    while (current !== null) {
      if (current.value === value) return index;
      current = current.next;
      index++;
    }
    return null; // Value not found
  }

  // Represent the linked list as a string
  toString() {
    let current = this.head;
    let result = "";
    while (current !== null) {
      result += `( ${current.value} ) -> `;
      current = current.next;
    }
    result += "null";
    return result;
  }
}

// Example usage
const list = new LinkedList();
list.append(10);
list.append(20);
list.prepend(5);
console.log(list.toString()); // Output: ( 5 ) -> ( 10 ) -> ( 20 ) -> null
console.log(list.size()); // Output: 3
console.log(list.headNode().value); // Output: 5
console.log(list.tail().value); // Output: 20
console.log(list.at(1).value); // Output: 10
list.pop();
console.log(list.toString()); // Output: ( 5 ) -> ( 10 ) -> null
console.log(list.contains(10)); // Output: true
console.log(list.contains(20)); // Output: false
console.log(list.find(10)); // Output: 1
console.log(list.find(20)); // Output: null
