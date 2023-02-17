class Stack {
  constructor() {
    this.items = [];
  }

  // Add an element to the top of the stack
  push(element) {
    this.items.push(element);
  }

  // Remove the top element from the stack and return it
  pop() {
    if (this.items.length === 0) {
      return "Underflow";
    }
    return this.items.pop();
  }

  // Return the top element of the stack without removing it
  peek() {
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Return the size of the stack
  size() {
    return this.items.length;
  }

  // Print the elements of the stack
  printStack() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    console.log(str.trim());
  }
}

// Example usage:
// const stack = new Stack();
// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.printStack(); // prints "10 20 30"
// console.log(stack.pop()); // prints 30
// console.log(stack.peek()); // prints 20
// console.log(stack.isEmpty()); // prints false
// console.log(stack.size()); // prints 2

module.exports = { StackUsingArray: Stack };
