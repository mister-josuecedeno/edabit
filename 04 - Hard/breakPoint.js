// https://edabit.com/challenge/eoFDKdjN9tFXWcEQi

const breakPoint = (num) => {
  const numbers = [...`${num}`].map(n => +n);

  for (let i = 1; i < numbers.length; i++) {
    let left = numbers.slice(0, i).reduce((acc, cv) => acc + cv, 0);
    let right = numbers.slice(i).reduce((acc, cv) => acc + cv, 0);

    if (left == right) return true;
  }

  return false;
}

// Tests

console.log(breakPoint(159780), true)
console.log(breakPoint(112), true)
console.log(breakPoint(10), false)
console.log(breakPoint(1034), true)
console.log(breakPoint(343), false)
console.log(breakPoint(1119444), true)
console.log(breakPoint(6666), true)
console.log(breakPoint(9777771), false)