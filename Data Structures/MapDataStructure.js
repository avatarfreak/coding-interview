const Map = function() {
  // the collection will hold the map
  this.collection = {};

  // this method will add an item to the map
  this.add = function(key, value) {
    this.collection[key] = value;
  };

  // this method will remove an item from a map
  this.remove = function(key) {
    if (this.has(key)) {
      delete this.collection[key];
    }
    return;
  };

  //this method will return the stored value
  this.get = function(key) {
    return this.collection[key];
  };

  // this method will check for the presence of an item and return true or false
  this.has = function(key) {
    return Object.prototype.hasOwnProperty.call(this.collection, key);
  };

  // this method will return an array of all the values in the map
  this.values = function() {
    return Object.values(this.collection);
  };

  // this method will return the size of the map
  this.size = function() {
    return Object.keys(this.collection).length;
  };

  //this method will return empty map
  this.clear = function() {
    this.collection = {};
  };
};
// The Map data structure should exist.
// The Map object should have the following methods: add, remove, get, has, values, clear, and size.
// The add method should add items to the map.
// The has method should return true for added items and false for absent items.
// The get method should accept keys as input and should return the associated values.
// The values method should return all the values stored in the map as strings in an array.
// The clear method should empty the map and the size method should return the number of items present in the map.
