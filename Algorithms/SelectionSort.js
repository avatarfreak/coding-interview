function selectionSort(array, pointer = 0) {
  if (pointer == array.length) {
    return;
  } else {
    for (let idx = pointer; idx < array.length; idx++) {
      if (array[pointer] > array[idx + 1]) {
        [array[pointer], array[idx + 1]] = [array[idx + 1], array[pointer]];
      }
    }
    selectionSort(array, pointer + 1);
  }
  return array;
}

selectionSort([ 1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92 ]);
module.exports = selectionSort;
