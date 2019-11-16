import Set from "../SetSubset";

const setA = new Set();
const setB = new Set();
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

test("The union method should join two setA[1,4], SetB[2,1,5] and return [1, 4, 2, 5]", () => {
  setB.add(2);
  setB.add(1);
  setB.add(5);
  expect(setA.union(setB).values()).toStrictEqual([1, 4, 2, 5]);
});

test("The intersect method should intersect both setA[1,4], SetB[2,1,5] and return [1] ", () => {
  setB.add(2);
  setB.add(1);
  setB.add(5);

  expect(setA.intersection(setB).values()).toStrictEqual([1]);
});

test("This difference method should compare setA[1,4,7], SetB[2,1,5] and return the items [4,7] present in the first set that are absent in the second.", () => {
  setA.add(7);
  setB.add(2);
  setB.add(1);
  setB.add(5);

  expect(setA.difference(setB).values()).toStrictEqual([4, 7]);
});

test("This subset method should compare the first setA[1,4,7], against SetB[2,1,5] and if the setA is not fully contained within setB then it will retrun false", () => {
  setA.add(7);
  setB.add(2);
  setB.add(1);
  setB.add(5);

  expect(setA.subset(setB)).toBeFalsy();
});

test("This subset method should compare the first setA[1,4,7], against SetB[2,1,5,4,7] and if the setA is fully contained within setB then it will retrun true", () => {
    setA.add(7);
    setB.add(1);
    setB.add(2);
    setB.add(5);
    setB.add(4);
    setB.add(7);

  expect(setA.subset(setB)).toBeTruthy();
});