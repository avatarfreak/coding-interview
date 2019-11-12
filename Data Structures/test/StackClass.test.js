import Stack from "../StackClass";
const stack = new Stack();

test("The push method should add the elements to the stack", () => {
  for (let i = 1; i <= 5; i++) {
    stack.push(i);
  }
  expect(stack.print()).toEqual([1, 2, 3, 4, 5]);
});

test("The pop method should remove and return the top element of the stack", () => {
  expect(stack.pop()).toEqual(5);
});

test("The peek method should return the top element of the stack", () => {
  expect(stack.peek()).toEqual(4);
});

test("The isEmpty method should return true if a stack does not contain any elements", () => {
  expect(stack.isEmpty()).not.toBeNull();
});

test("The clear method should remove all element from the stack", () => {
  stack.clear();
  expect(stack.print()).toEqual([]);
});
