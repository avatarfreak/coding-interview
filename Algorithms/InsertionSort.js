function insertionSort(array, totalElements = array.length) {
  if (totalElements <= 1) {
    return;
  } else {
    insertionSort(array, totalElements - 1);
    const currentElement = array[totalElements - 1];
    let prevElement = totalElements - 2;

    //Sort the array
    while (prevElement >= 0 && array[prevElement] > currentElement) {
      array[prevElement + 1] = array[prevElement];
      prevElement--;
    }
    array[prevElement + 1] = currentElement;
  }
  return array;
}

insertionSort([ 1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92 ]);
module.exports = insertionSort;
