var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // change code below this line

  //Add Method
  this.add = function(value) {
    let currNode = this.root;

    if (this.root === null) {
      this.root = new Node(value);
      return;
    }

    const addNode = function(currNode) {
      if (value < currNode.value) {
        //check if leftnode is empty
        if (currNode.left === null) {
          currNode.left = new Node(value);
          return;
        }
        return addNode(currNode.left);
      }
      //check if right node is empty
      if (currNode.right === null) {
        currNode.right = new Node(value);
        return;
      }
      return addNode(currNode.right);
    };
    return addNode(currNode);
  };
  // change code above this line
}

module.exports = BinarySearchTree;
// The BinarySearchTree data structure should exist.
// The binary search tree should have a method called add.
// The add method should add elements according to the binary search tree rules.
// Adding an element that already exists should return null.
