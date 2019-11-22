const Node = function(element) {
  this.element = element;
  this.next = null;
};
const Kitten = new Node("Kitten");
const Puppy = new Node("Puppy");

Kitten.next = Puppy;
// only add code below this line
const Cat = new Node("Cat");
const Dog = new Node("Dog");
Puppy.next = Cat;
Cat.next = Dog;
// test your code
console.log(Kitten.next);
