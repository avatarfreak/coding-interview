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
        } else if (currNode !== null) {
          return addNode(currNode.left);
        }
      } else if (value > currNode.value) {
        //check if right node is empty
        if (currNode.right === null) {
          currNode.right = new Node(value);
          return;
        } else if (currNode !== null) {
          return addNode(currNode.right);
        }
      } else {
        return null;
      }
    };
    return addNode(currNode);
  };
  // change code above this line
}
