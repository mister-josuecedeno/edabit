// https://edabit.com/challenge/Y2H2aDQhfeE9bHg6m

const correctSigns = (str) => {
  return eval(str);
}

// Tests

console.log(correctSigns("3 < 7 < 11"), true)
console.log(correctSigns("13 > 44 > 33 > 1"), false)
console.log(correctSigns("1 < 2 < 6 < 9 > 3"), true)
console.log(correctSigns("4 > 3 > 2 > 1"), true)
console.log(correctSigns("5 < 7 > 1"), true)
console.log(correctSigns("5 > 7 > 1"), false)
console.log(correctSigns("9 < 9"), false)