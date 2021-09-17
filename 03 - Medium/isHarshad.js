const isHarshad = (n) => {
  const sumOfDigits = [...`${n}`].reduce((acc,cv) => acc + +cv, 0);
  return n % sumOfDigits === 0;
}

// Tests

let [numVector, resVector] = [
  [75, 171, 481, 89, 516, 200, 209, 12345, 53, 27],
  [false, true, true, false, true, true, true, true, false, true]
]
for (let i in numVector) console.log(isHarshad(numVector[i]), resVector[i])
