const Node = function(data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};

const DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
  // change code below this line
  //Add method
  this.add = function(element) {
    const node = new Node(element, null);

    if (this.head == null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
  };

  //Reverse method
  this.reverse = function() {
    let currentNode = this.head;

    if (!currentNode == null) {
      return null;
    }
    while (currentNode !== null) {
      let nextNode = currentNode.next;
      currentNode.next = currentNode.prev;
      currentNode.prev = nextNode;
      currentNode = nextNode;
    }
    currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;
  };
  // change code above this line
};

module.exports = DoublyLinkedList;
// The DoublyLinkedList data structure should exist.
// The DoublyLinkedList should have a method called add.
// The DoublyLinkedList should have a method called reverse.
// Reversing an empty list should return null.
// The reverse method should reverse the list.
// The next and previous references should be correctly maintained when a list is reversed.
