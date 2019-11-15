class Set {
  constructor() {
    // collection will hold our set
    this.collection = [];
  }
  // this method will check for the presence of an element and return true or false
  has(element) {
    return this.collection.indexOf(element) !== -1;
  }
  // this method will return all the values in the set
  values() {
    return this.collection;
  }

  add(item) {
    return this.has(item) ? false : Boolean(this.collection.push(item));
  }

  remove(item) {
    if (this.has(item)) {
      let position = this.collection.indexOf(item);
      return this.collection.splice(position, 1);
    }
    return false;
  }
  size() {
    return this.collection.length;
  }
}

module.exports = Set;

// Your add method should not add duplicate values.
// Your add method should return true when a value has been successfully added.
// Your add method should return false when a duplicate value is added.
// Your Set class should have a remove method.
// Your remove method should only remove items that are present in the set.
// Your remove method should remove the given item from the set.
// Your Set class should have a size method.
// The size method should return the number of elements in the collection.
