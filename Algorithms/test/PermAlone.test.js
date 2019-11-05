import permAlone from "../PermAlone";

test("should return number", () => {
  expect(permAlone("abb")).toBe(2);
  expect(permAlone("aab")).toBe(2);
  expect(permAlone("aaa")).toBe(0);
  expect(permAlone("aabb")).toBe(8);
  expect(permAlone("abcdefa")).toBe(3600);
  expect(permAlone("abfdefa")).toBe(2640);
  expect(permAlone("zzzzzzzz")).toBe(0);
  expect(permAlone("a")).toBe(1);
  expect(permAlone("aaab")).toBe(0);
  expect(permAlone("aaabb")).toBe(12);
});
