function quickSort(array) {
  //basecase: array is empty nothing to sort
  if (!array.length) return [];

  const [head, ...tail] = array;
  const left = tail.filter(val => val < head);
  const right = tail.filter(val => val >= head);

  return quickSort(left).concat(head, quickSort(right));
}

// test array:
// [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]

module.exports = quickSort;
