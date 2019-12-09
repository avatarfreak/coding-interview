const displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;

  this.isPresent = function(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) {
        return true;
      }

      current = current.value < value ? current.right : current.left;
    }
    return false;
  };
}

// The BinarySearchTree data structure should exist.
// The binary search tree should have a method called isPresent.
// The isPresent method should correctly check for the presence or absence of elements added to the tree.
// isPresent should handle cases where the tree is empty.
