import sym from "../symDiff";

test("should return an array", () => {
  expect(sym([1, 2, 3], [5, 2, 1, 4])).toEqual([3, 4, 5]);
  expect(sym([1, 2, 3, 3], [5, 2, 1, 4])).toEqual([3, 4, 5]);
  expect(sym([1, 2, 3], [5, 2, 1, 4, 5])).toEqual([3, 4, 5]);
  expect(sym([1, 2, 5], [2, 3, 5], [3, 4, 5])).toEqual([1, 4, 5]);
  expect(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])).toEqual([1, 4, 5]);
  expect(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])).toEqual( [2, 3, 4, 6, 7]);
  expect( sym( [3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])).toEqual([1, 2, 4, 5, 6, 7, 8, 9]);
});
