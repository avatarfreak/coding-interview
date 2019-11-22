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

  this.remove = function(element) {
    let currentNode = head;
    let previousNode;

    //Does First node contain given element?
    if (currentNode.element === element) {
      head = currentNode.next;
    } else {
      while (currentNode.element !== element) {
        if (currentNode.next.element !== element)
          return `${element} not found.`;

        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    length--;
  };
}

module.exports = LinkedList;

const link = new LinkedList();
link.add("apple");
link.add("mango");
link.add("pineapple");

// console.log(link.head());
console.log(link.remove("mangos"));
console.log(link.head());

// Your LinkedList class should have a remove method.
// Your remove method should reassign head to the second node when the first node is removed.
// Your remove method should decrease the length of the linked list by one for every node removed.
// Your remove method should reassign the reference of the previous node of the removed node to the removed node's next reference.
// Your remove method should not change the linked list if the element does not exist in the linked list.
