function Queue() {
  var collection = [];
  this.print = function() {
    console.log(collection);
    return collection;
  };
  this.enqueue = function(val) {
    return collection.push(val);
  };
  this.dequeue = function() {
    return collection.shift();
  };
  this.front = function() {
    return collection[0];
  };
  this.size = function() {
    return collection.length;
  };
  this.isEmpty = function() {
    return !collection.length;
  };
}

module.exports = Queue;

// Your Queue class should have a enqueue method.
// Your Queue class should have a dequeue method.
// Your Queue class should have a front method.
// Your Queue class should have a size method.
// Your Queue class should have an isEmpty method.
// The enqueue method push an element to the tail queue
// The dequeue method should remove and return the front element of the queue
// The front method should return value of the front element of the queue
// The size method should return the length of the queue
// The isEmpty method should return false if there are elements in the queue
