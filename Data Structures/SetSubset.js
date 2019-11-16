function Set() {
  // the collection will hold the set
  let collection = [];
  // this method will check for the presence of an element and return true or false
  this.has = function(element) {
    return collection.indexOf(element) !== -1;
  };
  // this method will return all the values in the set
  this.values = function() {
    return collection;
  };
  // this method will add an element to the set
  this.add = function(element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };
  // this method will remove an element from a set
  this.remove = function(element) {
    if (this.has(element)) {
      let index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };
  // this method will return the size of the set
  this.size = function() {
    return collection.length;
  };

  //this method will return the union of two sets
  this.union = function(elements) {
    const set = new Set();
    const addToSet = el => set.add(el);
    this.values().forEach(addToSet);
    elements.values().forEach(addToSet);
    return set;
  };

  // this method will return the intersection of two sets as a new set
  this.intersection = function(otherSet) {
    let set = new Set();
    let firstSet = this.values();
    let secondSet = otherSet.values();
    firstSet.forEach(elem => {
      for (const val of secondSet) {
        if (val === elem) set.add(val);
      }
    });
    return set;
  };

  //this method will return the difference of the two sets.
  this.difference = function(otherSet) {
    let set = new Set();
    let firstSet = this.values();
    firstSet.forEach(el => {
      if (!otherSet.has(el)) set.add(el);
    });
    return set;
  };

  //this method will return the difference of the two sets.
  this.difference = function(otherSet) {
    let set = new Set();
    let firstSet = this.values();
    firstSet.forEach(el => {
      if (!otherSet.has(el)) set.add(el);
    });
    return set;
  };

  //This will compare the first set, against the second
  //if the first set is fully contained within the Second then it will return true.
  this.subset = function(otherSet) {
    let flag = 0;
    let firstSet = this.values();
    if (this.size() > otherSet.size()) return false;

    firstSet.forEach(el => {
      otherSet.has(el) ? flag++ : flag--;
    });

    return flag == this.size();
  };
}

module.exports = Set;

// In this exercise we are going to perform a subset test on 2 sets of data.
// We will create a method on our Set data structure called subset.
// This will compare the first set, against the second and if the first set is fully contained within the Second then it will return true.

// For example, if setA = ['a','b'] and setB = ['a','b','c','d'],
// then the subset of setA and setB is: setA.subset(setB) should be true.

// Your Set class should have a subset method.
// Passed
// The first Set() was contained in the second Set
// Passed
// ['a', 'b'].subset(['a', 'b', 'c', 'd']) should return true
// Passed
// ['a', 'b', 'c'].subset(['a', 'b']) should return false
// Passed
// [].subset([]) should return true
// Passed
// ['a', 'b'].subset(['c', 'd']) should return false
