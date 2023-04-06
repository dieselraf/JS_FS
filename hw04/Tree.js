class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
 
class Tree {
  constructor() {
    this.root = null;
  }
 
  insert(value) {
    const newNode = new Node(value);
 
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
 
  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
 
  search(value) {
    return this.searchNode(this.root, value);
  }
 
  searchNode(node, value) {
    if (node === null) {
      return false;
    }
 
    if (value < node.value) {
      return this.searchNode(node.left, value);
    } else if (value > node.value) {
      return this.searchNode(node.right, value);
    } else {
      return true;
    }
  }
 
  getHeight() {
    return this.calculateHeight(this.root);
  }
 
  calculateHeight(node) {
    if (node === null) {
      return -1;
    }
 
    const leftHeight = this.calculateHeight(node.left);
    const rightHeight = this.calculateHeight(node.right);
 
    return Math.max(leftHeight, rightHeight) + 1;
  }
}
 
const tree = new Tree();
 
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(2);
tree.insert(7);
tree.insert(12);
tree.insert(20);
 
console.log(tree.search(7)); // true
console.log(tree.search(11)); // false
 
console.log(tree.getHeight()); // 2