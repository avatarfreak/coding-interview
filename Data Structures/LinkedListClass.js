function LinkedList() {
  let length = 0;
  let head = null;

  const Node = function(element) {
    this.element = element;
    this.next = null;
  };

  this.head = function() {
    return head;
  };

  this.size = function() {
    return length;
  };

  this.add = function(element) {
    const node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      let currentNode = head;
      //traverse through the list
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }

    length++;
  };
}
module.exports = LinkedList;
// Your LinkedList class should have a add method.
// Your LinkedList class should assign head to the first node added.
// The previous node in your LinkedList class should have reference to the newest node created.
// The size of your LinkedList class should equal the amount of nodes in the linked list.
