// https://edabit.com/challenge/B4GHBsZTGffz2ySGL

// Not my solution
function twins(age, distance, velocity) {
  const jill = (distance / velocity) * 2;
  const jack = jill * Math.sqrt(1 - velocity ** 2);
  return `Jack's age is ${(age + jack).toFixed(1)}, Jill's age is ${(
    age + jill
  ).toFixed(1)}`;
}

// Tests

console.log(twins(20, 10, 0.4), "Jack's age is 65.8, Jill's age is 70.0");
console.log(twins(20, 10, 0.8), "Jack's age is 35.0, Jill's age is 45.0");
console.log(twins(10, 16.73, 0.999), "Jack's age is 11.5, Jill's age is 43.5");
console.log(twins(1, 5, 0.1), "Jack's age is 100.5, Jill's age is 101.0");
console.log(twins(25, 30, 0.99999), "Jack's age is 25.3, Jill's age is 85.0");
