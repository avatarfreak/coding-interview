function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
}
function isBinarySearchTree(tree) {
  // change code below this line

  let flag = true;
  const isValidTree = function(node) {
    //left node
    if (node.left !== null) {
      if (node.left.value > node.value) {
        flag = false;
      } else {
        isValidTree(node.left);
      }
    }
    //Right node
    if (node.right !== null) {
      if (node.right.value < node.value) {
        flag = false;
      } else {
        isValidTree(node.right);
      }
    }
  };
  isValidTree(tree.root);
  return flag;

  // change code above this line
}

module.exports = BinarySearchTree;
