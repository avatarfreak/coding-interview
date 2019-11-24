const Node = function(data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};

const DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
  this.length = 0;
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
    this.length++;
  };

  //Remove
  this.remove = function(element) {
    let currentNode = this.head;
    let previousNode;
    // Empty list.
    if (!this.head) {
      return null;
    }
    // Removing the head.
    if (element === currentNode.data) {
      this.head = currentNode.next;
      this.head.prev = null;
    } else {
      while (currentNode) {
        if (currentNode.data === element) {
          previousNode.next = currentNode.next;
          if (currentNode.next) {
            currentNode.next.prev = previousNode;
          }
        }
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
    }
  };
};

module.exports = DoublyLinkedList;
let linked = new DoublyLinkedList();
linked.add(1);
linked.add(3);
linked.add(2);
linked.add(3);
linked.add(4);
linked.add(3);
linked.remove(3);
console.log(linked.head);

// The DoublyLinkedList data structure should exist.
// The DoublyLinkedList should have a method called add.
// The DoublyLinkedList should have a method called remove.
// Removing an item from an empty list should return null.
// The add method should add items to the list.
// Each node should keep track of the previous node.
// The first item should be removable from the list.
// The last item should be removable from the list.
