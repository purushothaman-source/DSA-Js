class Queue {
  constructor() {
    this.items = [];
  }

  // Add an element to the end of the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Remove the element from the front of the queue and return it
  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.shift();
  }

  // Return the front element of the queue without removing it
  front() {
    if (this.isEmpty()) {
      return "No elements in Queue";
    }
    return this.items[0];
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Return the size of the queue
  size() {
    return this.items.length;
  }

  // Print the elements of the queue
  printQueue() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    console.log(str.trim());
  }
}

// Example usage:
// const queue = new Queue();
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.printQueue(); // prints "10 20 30"
// console.log(queue.dequeue()); // prints 10
// console.log(queue.front()); // prints 20
// console.log(queue.isEmpty()); // prints false
// console.log(queue.size()); // prints 2

module.exports = {
  QueueUsingArray: Queue
};
