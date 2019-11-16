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
}
// For example, if setA = ['a','b','c'] and setB = ['a','b','d','e'],
// then the intersection of setA and setB is: setA.intersection(setB) = ['a', 'b'].
module.exports = Set;
