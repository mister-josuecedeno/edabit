// https://edabit.com/challenge/fZxhP7ZSFEhLGvjME

const getCountByType = (number, type) => {
  const digits = number.toString().split('').map(Number);
  if (type === 'odd') return digits.filter((n) => n % 2 !== 0).length;
  if (type === 'even') return digits.filter((n) => n % 2 === 0).length;
};

const countDigits = (arr, type) => {
  return arr.map((n) => getCountByType(n, type));
};

// Tests

console.log(countDigits([22, 53, 99, 61, 777, 8], 'odd'), [0, 2, 2, 1, 3, 0]);
console.log(countDigits([54, 113, 89, 10], 'odd'), [1, 3, 1, 1]);
console.log(countDigits([17, 19, 21], 'odd'), [2, 2, 1]);
console.log(countDigits([1, 2, 3, 4], 'odd'), [1, 0, 1, 0]);
console.log(countDigits([22, 53, 99, 61, 777, 8], 'even'), [2, 0, 0, 1, 0, 1]);
console.log(countDigits([54, 113, 89, 10], 'even'), [1, 0, 1, 1]);
console.log(countDigits([5, 8, 9, 12], 'even'), [0, 1, 0, 1]);
console.log(countDigits([1, 2, 3], 'even'), [0, 1, 0]);
