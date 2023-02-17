// Define a Node class for the BST
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Define the BST class
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Insert a new node into the BST
  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this._insertNode(this.root, newNode);
    }
  }

  // Helper method to insert a new node recursively
  _insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, newNode);
      }
    }
  }

  // Search for a node with a specific value in the BST
  search(value) {
    return this._searchNode(this.root, value);
  }

  // Helper method to search for a node recursively
  _searchNode(node, value) {
    if (node === null) {
      return false;
    } else if (value === node.value) {
      return true;
    } else if (value < node.value) {
      return this._searchNode(node.left, value);
    } else {
      return this._searchNode(node.right, value);
    }
  }

  // Traverse the BST in-order and return an array of values
  inorder() {
    const result = [];
    this._inorderNode(this.root, result);
    return result;
  }

  // Helper method to traverse the BST in-order recursively
  _inorderNode(node, result) {
    if (node !== null) {
      this._inorderNode(node.left, result);
      result.push(node.value);
      this._inorderNode(node.right, result);
    }
  }

  levelOrder() {
    if (this.root === null) {
      return [];
    }

    const queue = [this.root];
    const result = [];

    while (queue.length > 0) {
      const node = queue.shift();
      result.push(node.value);

      if (node.left !== null) {
        queue.push(node.left);
      }

      if (node.right !== null) {
        queue.push(node.right);
      }
    }

    return result;
  }
}

module.exports = BinarySearchTree;
