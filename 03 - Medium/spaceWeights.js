const planet = {
  "Mercury":	3.7,
  "Venus":	8.87,
  "Earth":	9.81,
  "Mars":	3.711,
  "Jupiter":	24.79,
  "Saturn":	10.44,
  "Uranus":	8.69,
  "Neptune":	11.15,
}

const spaceWeights = (planetA, weight, planetB) => {
  let a = planet[planetA];
  let b = planet[planetB];
  let current = weight / a;
  let mass = current * b;
  return +mass.toFixed(2);
}

// Tests

console.log(spaceWeights("Earth", 1, "Mars"), 0.38, "Example #1")
console.log(spaceWeights("Earth", 1, "Jupiter"), 2.53, "Example #2")
console.log(spaceWeights("Earth", 1, "Neptune"), 1.14, "Example #3")
console.log(spaceWeights("Jupiter", 100, "Mercury"), 14.93)
console.log(spaceWeights("Venus", 75, "Jupiter"), 209.61)
console.log(spaceWeights("Uranus", 10, "Saturn"), 12.01)
console.log(spaceWeights("Mars", 120, "Mercury"), 119.64)
console.log(spaceWeights("Neptune", 1421, "Earth"), 1250.23)
console.log(spaceWeights("Jupiter", 33, "Mercury"), 4.93)
console.log(spaceWeights("Saturn", 555, "Venus"), 471.54)
console.log(spaceWeights("Jupiter", 3.141592, "Earth"), 1.24)
