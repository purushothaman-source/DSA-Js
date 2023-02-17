class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  // Add an element to the top of the stack
  push(element) {
    const newNode = new Node(element);
    newNode.next = this.top;
    this.top = newNode;
    this.size++;
  }

  // Remove the top element from the stack and return it
  pop() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    const removedNode = this.top;
    this.top = removedNode.next;
    this.size--;
    return removedNode.data;
  }

  // Return the top element of the stack without removing it
  peek() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.top.data;
  }

  // Check if the stack is empty
  isEmpty() {
    return this.size === 0;
  }

  // Return the size of the stack
  getSize() {
    return this.size;
  }

  // Print the elements of the stack
  printStack() {
    let currentNode = this.top;
    let str = "";
    while (currentNode) {
      str += currentNode.data + " ";
      currentNode = currentNode.next;
    }
    console.log(str.trim());
  }
}

// Example usage:
// const stack = new Stack();
// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.printStack(); // prints "30 20 10"
// console.log(stack.pop()); // prints 30
// console.log(stack.peek()); // prints 20
// console.log(stack.isEmpty()); // prints false
// console.log(stack.getSize()); // prints 2

module.exports = { StackUsingLL: Stack };
