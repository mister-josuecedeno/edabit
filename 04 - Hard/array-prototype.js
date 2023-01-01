//

/* Fill in 5 array prototype methods below:
	1. square()
	2. cube()
	3. divisible_by()
	4. strictly_above()
	5. strictly_below()
*/

Array.prototype.square = function () {
  return this.map((t) => Math.pow(t, 2));
};

Array.prototype.cube = function () {
  return this.map((t) => Math.pow(t, 3));
};

Array.prototype.divisible_by = function (x) {
  return this.filter((t) => t % x === 0);
};

Array.prototype.strictly_above = function (x) {
  return this.filter((t) => t > x);
};

Array.prototype.strictly_below = function (x) {
  return this.filter((t) => t < x);
};

// Tests

console.log([1, 2, 3].square(), [1, 4, 9]);
console.log([1, 2, 3].cube(), [1, 8, 27]);
console.log([1, 2, 3, 4].divisible_by(2), [2, 4]);
console.log([1, 2, 3, 4].strictly_above(1), [2, 3, 4]);
console.log([1, 2, 3, 4].strictly_below(2), [1]);

console.log([-2, -1, 0, 1].square(), [4, 1, 0, 1]);
console.log([-2, -1, 0, 1].cube(), [-8, -1, 0, 1]);
console.log([-2, -1, 0, 1].divisible_by(4), [0]);
console.log([-2, -1, 0, 1].strictly_above(-1), [0, 1]);
console.log([-2, -1, 0, 1].strictly_below(1), [-2, -1, 0]);
