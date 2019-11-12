function Stack() {
  var collection = [];
  this.print = function() {
    console.log(collection);
    return collection;
  };
  this.push = function(val) {
    return collection.push(val);
  };
  this.pop = function() {
    return collection.pop();
  };
  this.peek = function() {
    return collection[collection.length - 1];
  };
  this.isEmpty = function() {
    return collection.length === 0;
  };
  this.clear = function() {
    collection.length = 0;
  };
}
module.exports = Stack;

// Your Stack class should have a push method.
// Your Stack class should have a pop method.
// Your Stack class should have a peek method.
// Your Stack class should have a isEmpty method.
// Your Stack class should have a clear method.
// The peek method should return the top element of the stack
// The pop method should remove and return the top element of the stack
// The isEmpty method should return true if a stack does not contain any elements
// The clear method should remove all element from the stack
