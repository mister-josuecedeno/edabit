const numberOfDays = (coordinate) => {
  let travelDays = Math.abs(coordinate[0] + coordinate[1]);
  let adjustment = travelDays % 5 == 0 ? 1 : 0;
  let restDays = Math.floor(travelDays / 5) - adjustment;
  return travelDays + restDays;
}

// Tests

console.log(numberOfDays([10, 10]), 23);
console.log(numberOfDays([3, 3]), 7);
console.log(numberOfDays([-10, -9]), 22);
console.log(numberOfDays([-1, -4]), 5);
console.log(numberOfDays([-10, -2]), 14);
console.log(numberOfDays([3, 30]), 39);
console.log(numberOfDays([40, 1]), 49);
console.log(numberOfDays([3, 5]), 9);
