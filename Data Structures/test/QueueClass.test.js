import Queue from "../QueueClass";
const que = new Queue();

test("The enqueue method push an element to the tail queue", () => {
  for (let i = 1; i <= 5; i++) {
    que.enqueue(i);
  }
  expect(que.print()).toEqual([1, 2, 3, 4, 5]);
});

test("The dequeue method should remove and return the front element of the queue", () => {
  expect(que.dequeue()).toEqual(1);
});

test("The front method should return value of the front element of the queue", () => {
  expect(que.front()).toEqual(2);
});

test("The isEmpty method should return false if there are elements in the queue", () => {
  expect(que.isEmpty()).not.toBeNull();
});

test("The size method should return the length of the queue", () => {
  expect(que.size()).toEqual(4);
});
