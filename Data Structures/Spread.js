function checkSet(set) {
  return [...set];
}
const set = new Set([1, 2, 3, 4, 5, 6, 7]);
checkSet(set);
//checkSet(new Set([1,2,3,4,5,6,7]) should return [1, 2, 3, 4, 5, 6, 7].
