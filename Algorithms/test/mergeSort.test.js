import mergeSort from "../MergeSort";

test("should return sorted array", () => {
  expect(mergeSort([1, 4, 2, 8])).toEqual([1, 2, 4, 8]);
  expect(mergeSort([1, 4, 2, 8, 12, 15, 7])).toEqual([1, 2, 4, 7, 8, 12, 15]);
});
