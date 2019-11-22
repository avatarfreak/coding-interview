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
  this.removeAt = function(index) {
    let currentNode = head;
    let count = 0;
    let previousNode;
    if (index < 0 || index >= length) return null;

    if (index === 0) {
      head = currentNode.next;
    } else {
      while (count < index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        count++;
      }
      previousNode.next = currentNode.next;
    }
    length--;
    return currentNode.element;
  };
  // Only change code above this line
}

const link = new LinkedList();
link.add("apple");
link.add("mango");
link.add("mango");
link.add("pineapple");
console.log("size: ", link.size());
console.log(link.removeAt(1));
console.log("size: ", link.size());
// Your LinkedList class should have a removeAt method.
// Your removeAt method should reduce the length of the linked list by one.
// Your removeAt method should remove the element at the specified index from the linked list.
// When only one element is present in the linked list, your removeAt method should remove and return the element at specified index, and reduce the length of the linked list.
// Your removeAt method should return the element of the removed node.
// Your removeAt method should return null and the linked list should not change if the given index is less than 0.
// Your removeAt method should return null and the linked list should not change if the given index is greater than or equal to the length of the list.
