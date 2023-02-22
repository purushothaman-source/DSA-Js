const { QueueUsingLinkedList } = require("./queueUsingLinkedList");

class TrieNode {
  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
    this.childCount = 0;
  }
}

class QueueHelper {
  constructor(word, node) {
    this.word = word;
    this.node = node;
  }
}

class Trie {
  #root;
  constructor() {
    this.#root = new TrieNode();
    this.wordCount = 0;
  }

  insert(word) {
    let currentNode = this.#root;
    for (let i = 0; i < word.length; i++) {
      const char = word.charAt(i);
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new TrieNode());
        currentNode.childCount++;
      }
      currentNode = currentNode.children.get(char);
    }
    currentNode.isEndOfWord = true;
    this.wordCount++;
  }

  search(word) {
    let currentNode = this.#root;
    for (let i = 0; i < word.length; i++) {
      const char = word.charAt(i);
      if (!currentNode.children.has(char)) {
        return false;
      }
      currentNode = currentNode.children.get(char);
    }
    return currentNode.isEndOfWord;
  }

  startsWith(prefix) {
    let currentNode = this.#root;
    for (let i = 0; i < prefix.length; i++) {
      const char = prefix.charAt(i);
      if (!currentNode.children.has(char)) {
        return false;
      }
      currentNode = currentNode.children.get(char);
    }
    return true;
  }
  #removeHelper(root, word) {
    if (word.length == 0) {
      this.wordCount--;
      if (root.childCount == 0) {
        return true;
      } else {
        root.isEndOfWord = false;
        return false;
      }
    }
    if (!root.children.has(word.charAt(0))) {
      return false;
    } else {
      let flag = this.#removeHelper(
        root.children.get(word.charAt(0)),
        word.substring(1)
      );
      if (flag) {
        root.children.delete(word.charAt(0));
        root.childCount--;
        return !root.isEndOfWord;
      } else {
        return false;
      }
    }
  }
  remove(word) {
    this.#removeHelper(this.#root, word);
  }

  #getAllWords(root, oWord) {
    const words = [];
    const queue = new QueueUsingLinkedList();
    let frontNode = new QueueHelper(oWord, root);
    queue.enqueue(frontNode);

    while (!queue.isEmpty()) {
      frontNode = queue.dequeue();
      const node = frontNode.node;
      if (node.isEndOfWord) {
        words.push(frontNode.word);
      }

      node.children.forEach((value, key) => {
        let newWord = frontNode.word + key;
        frontNode = new QueueHelper(newWord, value);
        queue.enqueue(frontNode);
      });
    }
    return words;
  }

  #autoSuggestionHelper(root, word = "", oWord = "") {
    if (word.length == 0) {
      return this.#getAllWords(root, oWord);
    }
    if (!root.children.has(word.charAt(0))) {
      return [];
    } else {
      return this.#autoSuggestionHelper(
        root.children.get(word.charAt(0)),
        word.substring(1),
        oWord
      );
    }
  }
  autoSuggestion(word) {
    return this.#autoSuggestionHelper(this.#root, word, word);
  }
}

module.exports = Trie;
