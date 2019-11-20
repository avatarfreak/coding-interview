let called = 0;
const hash = string => {
  called++;
  let hashed = 0;
  for (var i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};

const HashTable = function() {
  this.collection = {};

  // The add method should add key value pairs
  this.add = function(key, value) {
    let hashed = hash(key);
    if (this.collection.hasOwnProperty(hashed)) {
      return (this.collection[hashed][key] = value);
    }
    this.collection[hashed] = {};
    this.collection[hashed][key] = value;
  };

  //The remove method should accept a key as input and should remove the associated key value pair.
  this.remove = function(key) {
    const hashed = hash(key);

    if (this.collection.hasOwnProperty(hashed)) {
      if (Object.keys(this.collection).length === 1) {
        return delete this.collection[hashed];
      }
      return delete this.collection[hashed][key];
    }
    return null;
  };

  //this method will return values for associated with a given key
  this.lookup = function(key) {
    const hashed = hash(key);
    if (this.collection.hasOwnProperty(hashed))
      return this.collection[hashed][key];
    return null;
  };
  // change code above this line
};

// The HashTable data structure should exist.
// The HashTable should have an add method.
// The HashTable should have a remove method.
// The HashTable should have a lookup method.
// The add method should add key value pairs and the lookup method should return the values associated with a given key.
// The remove method should accept a key as input and should remove the associated key value pair.
// Items should be added using the hash function.
//The hash table should handle collisions.
