class CircularQueue {
  constructor(size) {
    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.count = 0;
    this.max = size;

    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }

  print() {
    return this.queue;
  }

  enqueue(item) {
    //Queue is full
    if (this.count == this.max) return null;

    this.queue[this.write] = item;
    this.write = (this.write + 1) % this.max; //circular movement
    this.count++;
    return item;
  }

  dequeue() {
    //Queue is empty
    if (this.count == 0) return null;

    let item = this.queue[this.read];
    this.queue[this.read] = null;
    this.read = (this.read + 1) % this.max;
    this.count--;
    return item;
  }
}

module.exports = CircularQueue;
// NB:In this challenge we will implement a circular queue.
//The circular queue should provide enqueue and dequeue methods which allow you to read from and write to the queue.
//The class itself should also accept an integer argument which you can use to specify the size of the queue when created.
//We've written the starting version of this class for you in the code editor.
//When you enqueue items to the queue, the write pointer should advance forward and loop back to the beginning once it reaches the end of the queue. Likewise, the read pointer should advance forward as you dequeue items. The write pointer should not be allowed to move past the read pointer (our class won't let you overwrite data you haven't read yet) and the read pointer should not be able to advance past data you have written. In addition, the enqueue method should return the item you enqueued if it is successful; otherwise it will return null. Similarly,
//when you dequeue an item, that item should be returned and if you cannot dequeue an item you should return null.

// The enqueue method adds items to the circular queue.
// You cannot enqueue items past the read pointer.
// The dequeue method dequeues items from the queue.
// After an item is dequeued its position in the queue should be reset to null.
// Trying to dequeue past the write pointer returns null and does not advance the write pointer.
