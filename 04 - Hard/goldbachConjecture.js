// https://edabit.com/challenge/CtzrFDd3wpDtu9TCg

const isPrime = (num) => {
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
};

const goldbachConjecture = (n) => {
  if (n < 2) return [];
  if (n % 2 != 0) return [];

  const result = [];

  for (let i = 0; i < n; i++) {
    let currentIsPrime = isPrime(i);
    if (!currentIsPrime) continue;

    let diff = n - i;
    let diffIsPrime = isPrime(diff);

    if (diffIsPrime) {
      result.push(i);
      result.push(diff);
      break;
    }
  }

  return result;
};

// Tests

console.log(goldbachConjecture(1), []);
console.log(goldbachConjecture(4), [2, 2]);
console.log(goldbachConjecture(7), []);
console.log(goldbachConjecture(8), [3, 5]);
console.log(goldbachConjecture(10), [3, 7]);
console.log(goldbachConjecture(24), [5, 19]);
console.log(goldbachConjecture(100), [3, 97]);
console.log(goldbachConjecture(1234), [3, 1231]);
console.log(goldbachConjecture(1400), [19, 1381]);
console.log(goldbachConjecture(1566), [7, 1559]);
console.log(goldbachConjecture(3444), [11, 3433]);
// Mubashir
