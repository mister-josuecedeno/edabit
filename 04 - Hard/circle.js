// https://edabit.com/challenge/75SZTpeP3xKPu8Gx4

function Circle(radius) {
  this.radius = radius;
  this.diameter = radius * 2;
}

Circle.prototype.getC = function () {
  return +(2 * Math.PI * this.radius).toFixed(2);
};

Circle.prototype.getA = function () {
  return +(Math.PI * Math.pow(this.radius, 2)).toFixed(2);
};

let c1 = new Circle(3);
let c2 = new Circle(5);

// Tests

console.log(c1.radius, 3);
console.log(c1.diameter, 6);
console.log(c1.getC(), 18.85);
console.log(c1.getA(), 28.27);
console.log(c2.radius, 5);
console.log(c2.diameter, 10);
console.log(c2.getC(), 31.42);
console.log(c2.getA(), 78.54);
