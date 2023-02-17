class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Add an element to the end of the queue
  enqueue(element) {
    const node = new Node(element);
    if (this.tail === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  // Remove the element from the front of the queue and return it
  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    const node = this.head;
    this.head = node.next;
    if (this.head === null) {
      this.tail = null;
    }
    this.size--;
    return node.value;
  }

  // Return the front element of the queue without removing it
  front() {
    if (this.isEmpty()) {
      return "No elements in Queue";
    }
    return this.head.value;
  }

  // Check if the queue is empty
  isEmpty() {
    return this.size === 0;
  }

  // Return the size of the queue
  size() {
    return this.size;
  }

  // Print the elements of the queue
  printQueue() {
    if (this.isEmpty()) {
      console.log("No elements in Queue");
      return;
    }
    let current = this.head;
    let str = "";
    while (current) {
      str += current.value + " ";
      current = current.next;
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
  QueueUsingLinkedList: Queue
};
