// https://edabit.com/challenge/gGrPrwZ5XZ3GqEzkp

const getSumOfDivisors = (num) => {
  const positiveDivisors = [];

  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      positiveDivisors.push(i);
    }
  }

  return positiveDivisors.reduce((acc, curr) => acc + curr, 0);
}

const numType = (num) => {
  const sumOfDivisors = getSumOfDivisors(num);
  const sumOfDivisorsOfSum = getSumOfDivisors(sumOfDivisors);

  if (num === sumOfDivisorsOfSum && num !== sumOfDivisors) {
    return "Amicable";
  } else if (num === sumOfDivisors) {
    return "Perfect";
  } else {
    return "Neither";
  }
}

// Tests

console.log(numType(6), "Perfect")
console.log(numType(2924), "Amicable")
console.log(numType(5010), "Neither")
console.log(numType(8128), "Perfect")
console.log(numType(10744), "Amicable")
console.log(numType(17296), "Amicable")
console.log(numType(498), "Neither")
console.log(numType(66992), "Amicable")
console.log(numType(5566), "Neither")