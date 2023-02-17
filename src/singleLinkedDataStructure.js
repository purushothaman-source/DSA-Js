class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Add an element to the end of the linked list
  add(data) {
    const node = new Node(data);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  // Insert an element at the given position in the linked list
  insertAt(data, position) {
    if (position < 0 || position > this.size) {
      return false;
    }
    const node = new Node(data);
    if (position === 0) {
      node.next = this.head;
      this.head = node;
      if (this.size === 0) {
        this.tail = node;
      }
    } else if (position === this.size) {
      this.tail.next = node;
      this.tail = node;
    } else {
      let current = this.head;
      let previous = null;
      let index = 0;
      while (index < position) {
        previous = current;
        current = current.next;
        index++;
      }
      node.next = current;
      previous.next = node;
    }
    this.size++;
    return true;
  }

  // Remove an element from the linked list at the given position
  removeAt(position) {
    if (position < 0 || position >= this.size) {
      return false;
    }
    if (position === 0) {
      this.head = this.head.next;
      if (this.size === 1) {
        this.tail = null;
      }
    } else {
      let current = this.head;
      let previous = null;
      let index = 0;
      while (index < position) {
        previous = current;
        current = current.next;
        index++;
      }
      previous.next = current.next;
      if (position === this.size - 1) {
        this.tail = previous;
      }
    }
    this.size--;
    return true;
  }

  // Remove the first occurrence of the given element from the linked list
  remove(data) {
    let current = this.head;
    let previous = null;
    while (current !== null) {
      if (current.data === data) {
        if (previous === null) {
          this.head = current.next;
          if (this.size === 1) {
            this.tail = null;
          }
        } else {
          previous.next = current.next;
          if (current.next === null) {
            this.tail = previous;
          }
        }
        this.size--;
        return true;
      }
      previous = current;
      current = current.next;
    }
    return false;
  }

  // Find the position of the first occurrence of the given element in the linked list
  indexOf(data) {
    let current = this.head;
    let index = 0;
    while (current !== null) {
      if (current.data === data) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }

  // Check if the linked list is empty
  isEmpty() {
    return this.size === 0;
  }

  // Return the size of the linked list
  getSize() {
    return this.size;
  }

  // Print the elements of the linked list
  printList() {
    let current = this.head;
    let str = "";
    while (current) {
      str += current.data + " ";
      current = current.next;
    }
    console.log(str.trim());
  }
}

// Example usage:
// const list = new LinkedList();
// list.add(10);
// list.add(20);
// list.add(30);
// list.printList(); // prints "10 20 30"
// console.log(list.getSize()); // prints 3
// list.insertAt(15, 1);
// list.printList(); // prints "10

module.exports = LinkedList;
