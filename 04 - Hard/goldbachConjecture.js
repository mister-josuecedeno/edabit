// https://edabit.com/challenge/CtzrFDd3wpDtu9TCg

const isPrime = (num) => {
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
};

// Still needs to be refactored
const goldbachConjecture = (n) => {
  // if odd and greater than 2 return an empty array
  if (n % 2 != 0 && n > 2) return [];

  // if even and greater than 2
  if (n % 2 === 0 && n > 2) {
    let isValid = false;
    let i = 3;

    // Debug: what if diff is < starting number?
    while (!isValid) {
      if (isPrime(i)) {
        let diff = n - i;
        if (isPrime(diff)) {
          return [i, diff];
        }
      }
      i++;
    }

    return [-1];
  }

  return [];
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
