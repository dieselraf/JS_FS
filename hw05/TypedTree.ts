class Node {
  value: number;
  left: Node | null;
  right: Node | null;
  
  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
 
class Tree {
  root: Node | null;
  
  constructor() {
    this.root = null;
  }
 
  insert(value: number): void {
    const newNode = new Node(value);
 
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
 
  insertNode(node: Node, newNode: Node): void {
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
 
  search(value: number): boolean {
    return this.searchNode(this.root, value);
  }
 
  searchNode(node: Node | null, value: number): boolean {
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
 
  getHeight(): number {
    return this.calculateHeight(this.root);
  }
 
  calculateHeight(node: Node | null): number {
    if (node === null) {
      return -1;
    }
 
    const leftHeight = this.calculateHeight(node.left);
    const rightHeight = this.calculateHeight(node.right);
 
    return Math.max(leftHeight, rightHeight) + 1;
  }
}
 