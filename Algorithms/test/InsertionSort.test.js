import insertionSort from "../InsertionSort";

test("should return sorted array", () => {
  expect(insertionSort([1, 4, 2, 8])).toEqual([1, 2, 4, 8]);
  expect(insertionSort([1, 4, 2, 8, 12, 15, 7])).toEqual([ 1, 2, 4, 7, 8, 12, 15 ]);
 });
