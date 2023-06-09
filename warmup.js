function Animal(name, color) {
  this.name = name;
  this.color = color;
}

// Method for Animal
Animal.prototype.sound = function () {
  console.log(this.name + " makes a sound");
};

Animal.prototype.showColor = function () {
  console.log(this.name + ` has a ${this.color} color`);
};
const animal = new Animal("Saddy", "grey");

animal.sound();
animal.showColor();
