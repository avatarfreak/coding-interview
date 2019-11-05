
function pairwise(arr, arg) {
  return arr.reduce((count, val, idx, array) => {
    //Only if val is not null
    if (val) {
      const diff = arg - val;
      array.splice(idx, 1, null); //make vistited element null.
      const position = arr.indexOf(diff); //find the position of given number in arr.
      if (position !== -1) {
        array.splice(idx, 1, null); //fill that position with null
        array.splice(position, 1, null); //fill that position with null
        count += idx + position; //sum the index of first value and position
      }
    }

    return count;
  }, 0);
}
pairwise([1, 3, 2, 4], 4);

module.exports = pairwise;