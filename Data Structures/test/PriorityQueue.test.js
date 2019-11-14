import PriorityQueue from "../PriorityQueue";
const que = new PriorityQueue();

test("The enqueue method push an element to the tail queue", () => {
  que.enqueue(["human", 1]);
  que.enqueue(["kitten", 4]);
  que.enqueue(["dog", 2]);
  que.enqueue(["horse", 3]);
  que.enqueue(["rabbit", 2]);
  expect(que.size()).toBe(5);
});

test("The priority queue should return items with a higher priority before items with a lower priority and return items in first-in-first-out order otherwise.", () => {
  expect(que.printCollection()).toEqual([
    ["human", 1],
    ["dog", 2],
    ["rabbit", 2],
    ["horse", 3],
    ["kitten", 4]
  ]);
});

test("The dequeue method should remove and return the front element of the queue", () =>
  expect(que.dequeue()).toEqual("human"));

test("The size method should return the length of the queue", () => {
  expect(que.size()).toBe(4);
});

test("The isEmpty method should return false if there are elements in the queue", () => {
  expect(que.isEmpty()).not.toBeNull();
});
