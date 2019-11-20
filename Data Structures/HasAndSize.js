function checkSet(arrToBeSet, checkValue) {
  // change code below this line
  const set = new Set(arrToBeSet);
  const hasTwo = set.has(checkValue);
  const howBig = set.size;
  return [hasTwo, howBig];

  // change code above this line
}

checkSet([1, 2, 3], 2); // Should return [ true, 3 ]
