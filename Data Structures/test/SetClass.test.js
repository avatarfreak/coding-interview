import Set from "../SetClass";

const set = new Set();

test("add method should return true when a value has been successfully added.", () => {
  expect(set.add(1)).toBeTruthy();
  expect(set.add(3)).toBeTruthy();
  expect(set.add(4)).toBeTruthy();
});

test("add method should not add duplicate values.", () => {
  expect(set.add(1)).toBeFalsy();
});

test("remove method should only remove items that are present in the set. ", () => {
  expect(set.remove(2)).toBeFalsy();
});

test("remove method should return true and remove the given item form the set", () => {
  expect(set.remove(3)).toBeTruthy();
});

test("remove method should return false as the given item does not included in the set", () => {
  expect(set.remove(3)).toBeFalsy();
});

test("The size method should return the number of elements in the collection.", () => {
  expect(set.size()).toBe(2);
});

test("value method should display [1,4]", () => {
  expect(set.values()).toStrictEqual([1, 4]);
});
