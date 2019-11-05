function updateInventory(arr1, arr2) {
  // All inventory must be accounted for or you're fired!

  // get all our current inventory occurrence, so we can reference it later.
  const items = arr1.map(item => item[1]);

  return arr2
    .reduce((stocks, item) => {
      const idx = items.indexOf(item[1]); //check for duplicate if yes then add to it
      idx >= 0 ? (stocks[idx][0] += item[0]) : stocks.push(item);
      return stocks;
    }, arr1)
    .sort((a, b) => {
      return a[1] > b[1];
    });

  //second solution using forEach
  // const items = arr1.map(item => item[1]);
  // arr2.forEach(item => {
  //     const idx = items.indexOf(item[1]);
  //     idx != -1 ? (arr1[idx][0] += item[0]) : arr1.push(item);
  // });
  // return arr1.sort((a, b) => a[1] > b[1] ? 1 : -1);
}

updateInventory(
  [[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]],
  [
    [1, "Hair Pin"],
    [1, "Half-Eaten Apple"],
    [1, "Bowling Ball"],
    [1, "Toothpaste"]
  ]
);

module.exports = updateInventory;