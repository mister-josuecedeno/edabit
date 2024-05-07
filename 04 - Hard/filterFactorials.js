// https://edabit.com/challenge/B9TMed7zwbokv88eM

/**
 * Checks if a number is a factorial of any integer.
 *
 * This function recursively divides the number by an incrementing divisor starting from 2
 * and checks if the result is 1 (indicating that the number is a factorial of some integer).
 * If the result goes below 1 without hitting exactly 1, it is not a factorial.
 *
 * @param {number} number - The number to check if it is a factorial.
 * @param {number} [divBy=2] - The starting divisor for checking factorial (default is 2).
 * @returns {boolean} - True if the number is a factorial of some integer, false otherwise.
 */
const isFactorial = (number) => {
  if (number < 1) return false;

  let divisor = 2;
  while (number > 1) {
    number /= divisor;
    divisor++;
  }

  return number === 1;
};

const filterFactorials = (numbers) => {
  return numbers.filter((n) => isFactorial(n));
};

// Tests

console.log(filterFactorials([1, 2, 3, 4, 5, 6, 7]), [1, 2, 6]);
console.log(filterFactorials([1, 4, 120]), [1, 120]);
console.log(filterFactorials([8, 9, 10]), []);
console.log(filterFactorials([1, 8, 9, 10]), [1]);
