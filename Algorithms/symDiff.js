function sym(...args) {
  return [
    ...args.reduce((acc, value) => {
      for (let val of new Set(value)) {
        if (acc.has(val)) {
          acc.delete(val);
        } else {
          acc.add(val);
        }
      }
      return acc;
    }, new Set())
  ].sort((a,b) => a > b);
}

sym([1, 2, 3], [5, 2, 1, 4]);

module.exports = sym;
