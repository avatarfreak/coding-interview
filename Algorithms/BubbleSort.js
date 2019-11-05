function bubbleSort(array) {
  array.forEach((value, idx) => {
    if (array[idx + 1] < value) {
      array[idx] = array[idx + 1];
      array[idx + 1] = value;
      bubbleSort(array); //recurse
    }
  });
  return array;
}

bubbleSort([ 1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92 ]);

module.exports = bubbleSort;
