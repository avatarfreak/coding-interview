import Set from "../SetUnioin";

const setA = new Set();

test("add method should return true when a value has been successfully added.", () => {
  expect(setA.add(1)).toBeTruthy();
  expect(setA.add(3)).toBeTruthy();
  expect(setA.add(4)).toBeTruthy();
});

test("add method should not add duplicate values.", () => {
  expect(setA.add(1)).toBeFalsy();
});

test("remove method should only remove items that are present in the setA. ", () => {
  expect(setA.remove(2)).toBeFalsy();
});

test("remove method should return true and remove the given item form the setA", () => {
  expect(setA.remove(3)).toBeTruthy();
});

test("remove method should return false as the given item does not included in the setA", () => {
  expect(setA.remove(3)).toBeFalsy();
});

test("The size method should return the number of elements in the collection.", () => {
  expect(setA.size()).toBe(2);
});

test("value method should display [1,4]", () => {
  expect(setA.values()).toStrictEqual([1, 4]);
});

test("The union method should join two setA and SetB excluding all the duplicate elements", () => {
  const setB = new Set();
  setB.add(2);
  setB.add(1);
  setB.add(5);
  expect(setA.union(setB).values()).toEqual([1, 4, 2, 5]);
});
