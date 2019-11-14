function PriorityQueue() {
  this.collection = [];
  this.printCollection = function() {
    console.log(this.collection);
    return this.collection;
  };

  this.enqueue = function(val) {
    if (this.isEmpty()) {
      this.collection.push(val);
    } else {
      for (let idx = 0; idx < this.collection.length; idx++) {
        if (this.collection[idx][1] > val[1]) {
          this.collection.splice(idx, 0, val);
          return;
        }
      }
      this.collection.push(val);
    }
  };

  this.dequeue = function() {
    return this.collection.shift()[0];
  };
  this.front = function() {
    return this.collection[0];
  };
  this.size = function() {
    return this.collection.length;
  };
  this.isEmpty = function() {
    return this.collection.length === 0;
  };
}

module.exports = PriorityQueue;

// Your Queue class should have a enqueue method.
// Your Queue class should have a dequeue method.
// Your Queue class should have a size method.
// Your Queue class should have an isEmpty method.
// Your PriorityQueue should correctly keep track of the current number of items using the size method as items are enqueued and dequeued.
// The isEmpty method should return true when the queue is empty.
// The priority queue should return items with a higher priority before items with a lower priority and return items in first-in-first-out order otherwise.
