// https://edabit.com/challenge/kr6rM8pvePADHG9Ez

class Node {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(element) {
    const node = new Node(element);
    if (!this.root) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }
  insertNode(node, newNode) {
    if (node.data > newNode.data) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
  // Start
  minimum() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  maximum() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
  // End
}

// Tests

const b = new BST();
b.insert(100);
b.insert(200);
b.insert(70);
b.insert(34);
b.insert(80);
b.insert(85);
b.insert(85);
b.insert(111);
console.log(b.minimum(), 34);
console.log(b.maximum(), 200);

const b1 = new BST();
b1.insert(1);
console.log(b1.maximum(), 1);
console.log(b1.minimum(), 1);

const b2 = new BST();
b2.insert(100);
b2.insert(25);
b2.insert(22);
b2.insert(75);
b2.insert(122);
b2.insert(111);
b2.insert(112);
b2.insert(55);
console.log(b2.maximum(), 122);
console.log(b2.minimum(), 22);
