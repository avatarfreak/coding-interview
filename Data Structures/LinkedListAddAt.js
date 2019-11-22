function LinkedList() {
  let length = 0;
  let head = null;

  const Node = function(element) {
    this.element = element;
    this.next = null;
  };

  this.size = function() {
    return length;
  };

  this.head = function() {
    return head;
  };

  this.add = function(element) {
    const node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      let currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }
    length++;
  };

  // Only change code below this line
  this.addAt = function(index, element) {
    const node = new Node(element);

    let count = 0;
    let previousNode;
    let currentNode = head;

    if (index < 0 || index >= length) return false;
    if (index === 0) {
      head.next = currentNode;
      head = node;
    } else {
      while (count < index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        count++;
      }
      node.next = currentNode;
      previousNode.next = node;
    }

    length++;
    return currentNode.element;
  };
  // Only change code above this line
}

const link = new LinkedList();
link.add("apple");
link.add("mango");
link.add("mango");
link.add("pineapple");
console.log(link.addAt(4, "orange"));
console.log(link.head());

// Your addAt method should reassign head to the new node when the given index is 0.
// Your addAt method should increase the length of the linked list by one for each new node added to the linked list.
// Your addAt method should return false if a node was unable to be added.
