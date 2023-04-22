// https://edabit.com/challenge/CtzrFDd3wpDtu9TCg

// Still needs to be refactored
const goldbachConjecture = (n) => {
  // if odd and greater than 2 return an empty array
  if (n % 2 != 0 && n > 2) return [];

  // if even and greater than 2
  if (n % 2 === 0 && n > 2) {
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
