const checkPerfect = (num) => {
  const divisors = [];

  for (let i = 0; i < num; i++) {
    if (num % i === 0) divisors.push(i);
  }

  return divisors.reduce((acc, cv) => acc + cv, 0) === num;
};

// Tests

console.log(checkPerfect(6), true);
console.log(checkPerfect(28), true);
console.log(checkPerfect(496), true);
console.log(checkPerfect(8128), true);
console.log(checkPerfect(33550336), true);
console.log(checkPerfect(12), false);
console.log(checkPerfect(97), false);
console.log(checkPerfect(481), false);
console.log(checkPerfect(1001), false);
console.log(checkPerfect(55555), false);
