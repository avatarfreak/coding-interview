function mergeSort(array) {
  //basecase: if array is 0 or 1 no sorting required
  if (array.length < 2) {
    return array;
  }
  const mid = array.length / 2;
  const low = array.slice(0, mid);
  const high = array.slice(mid);

  return merge(mergeSort(low), mergeSort(high));
}

function merge(low, high) {
  const sortedArray = [];
  let leftIdx = 0;
  let rightIdx = 0;
  while (leftIdx < low.length && rightIdx < high.length) {
    if (low[leftIdx] < high[rightIdx]) {
      sortedArray.push(low[leftIdx++]);
    } else {
      sortedArray.push(high[rightIdx++]);
    }
  }
  return sortedArray.concat(low.slice(leftIdx)).concat(high.slice(rightIdx));
}
mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);

module.exports = mergeSort;
