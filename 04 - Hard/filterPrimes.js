// https://edabit.com/challenge/sPdaYSjgqpupa2B7q

// Alternate - isPrime()
// const isPrime = num => {
//   for(let i = 2; i < num; i++)
//     if(num % i === 0) return false;
//   return num > 1;
// }

const isPrime = (n) => {
  let count = 0;

  for (let i = 1; i <= n && count < 3; i++) {
    if (n % i === 0) count++;
  }

  return count === 2;
};

const filterPrimes = (num) => {
  return num.filter((n) => isPrime(n));
};

// Tests

console.log(filterPrimes([7, 9, 3, 9, 10, 11, 27]), [7, 3, 11]);
console.log(
  filterPrimes([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ]),
  [2, 3, 5, 7, 11, 13, 17, 19, 23]
);
console.log(
  filterPrimes([
    1009, 10, 10, 10, 3, 33, 9, 4, 1, 61, 63, 69, 1087, 1091, 1093, 1097,
  ]),
  [1009, 3, 61, 1087, 1091, 1093, 1097]
);
console.log(
  filterPrimes([10007, 1009, 1007, 27, 147, 77, 1001, 70]),
  [10007, 1009]
);
