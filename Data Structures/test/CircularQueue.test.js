import CircularQueue from "../CircularQueue";
const cir = new CircularQueue(3);
test("The enqueue method adds items to the circular queue.", () => {
  expect(cir.enqueue(1)).toEqual(1);
  expect(cir.enqueue(3)).toEqual(3);
  expect(cir.enqueue(9)).toEqual(9);
});

test("The enqueue method should return null as enqueue items past the read pointer", () => {
  expect(cir.enqueue(9)).toEqual(null);
});

test("The deque method should remove items from queue ", () => {
  expect(cir.dequeue()).toEqual(1);
  expect(cir.dequeue()).toEqual(3);
});

test("After an item is dequeued its position in the queue should be reset to null.", () => {
  expect(cir.print()).toEqual([null, null, 9]);
});

test("The deque method should return null as dequeue past the write pointer and does not advance the write pointer.", () => {
  expect(cir.dequeue()).toEqual(9);
});

test("The deque method should return null when trying to dequeue past the write pointer", () => {
  expect(cir.dequeue()).toEqual(null);
});

test("The queue should return null,  if queue is empty", () => {
  expect(cir.print()).toEqual([null, null, null]);
});
