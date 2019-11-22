function LinkedList() {
  let length = 0;
  let head = null;

  const Node = function(element) {
    // {1}
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

  this.remove = function(element) {
    let currentNode = head;
    let previousNode;
    if (currentNode.element === element) {
      head = currentNode.next;
    } else {
      while (currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
    }

    length--;
  };

  // Only change code below this line
  this.elementAt = function(index) {
    let currentNode = head;
    let count = 0;
    if (index < 1 || index > length) {
      return undefined;
    }
    while (count < index) {
      count++;
      currentNode = currentNode.next;
    }
    return currentNode.element;
  };

  this.indexOf = function(element) {
    let count = 0;
    let currentNode = head;
    if (currentNode.element === element) return count;

    while (currentNode.element !== element) {
      count++;
      if (currentNode.element === null) {
        return -1;
      }
      currentNode = currentNode.next;
    }
    return count;
  };

  this.isEmpty = function() {
    return !length;
  };
  // Only change code above this line
}

const link = new LinkedList();
link.add("apple");
link.add("mango");
link.add("mango");
link.add("pineapple");

//console.log(link.isEmpty());
console.log(link.indexOf("pineapple"));
console.log(link.elementAt(3));
//console.log(link.head());

// Your LinkedList class should have a indexOf method.
// Your LinkedList class should have a elementAt method.
// Your size method should return the length of the linked list
// Your indexOf method should return the index of the given element.
// Your elementAt method should return at element at a given index.
