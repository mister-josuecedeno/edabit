// https://edabit.com/challenge/HbMXHwnw6wTwwthW4

/**
 * Checks if a given number is a prime number.
 * A prime number is a natural number greater than 1 that cannot be formed by multiplying two smaller natural numbers.
 *
 * @param {number} num The number to check for primality.
 * @returns {boolean} Returns true if the number is prime, otherwise false.
 */
const isPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
};

const primePairArr = (num) => {
  const result = [];

  for (let i = 0; i < num; i++) {
    if (isPrime(i)) {
      let diff = num - i;
      if (i <= diff && isPrime(diff)) {
        result.push(`${i}+${diff}`);
      }
    }
  }

  return result;
};

// Tests

console.log(primePairArr(10), ['3+7', '5+5']);
console.log(primePairArr(20), ['3+17', '7+13']);
console.log(primePairArr(30), ['7+23', '11+19', '13+17']);
console.log(primePairArr(50), ['3+47', '7+43', '13+37', '19+31']);
console.log(primePairArr(80), ['7+73', '13+67', '19+61', '37+43']);
console.log(primePairArr(100), [
  '3+97',
  '11+89',
  '17+83',
  '29+71',
  '41+59',
  '47+53',
]);
