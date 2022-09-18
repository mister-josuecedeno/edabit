// https://edabit.com/challenge/6s8wwiJrbjWfSGeph

/* 
// Alternate: isPrime
function isPrime(n) {
	for (let i = 2; i <= Math.sqrt(n); i++)
		if (!(n % i))
			return false;
	return n > 1;
}
*/

const isPrime = (n) => {
  let count = 0;

  for (let i = 1; i <= n && count < 3; i++) {
    if (n % i === 0) count++;
  }

  return count === 2;
};

const sumPrimes = (arr) => {
  return arr.filter((n) => isPrime(n)).reduce((acc, cv) => acc + cv, 0);
};

// Tests

console.log(sumPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 17);
console.log(sumPrimes([2, 3, 4, 11, 20, 50, 71]), 87);
console.log(sumPrimes([19, 21, 24, 27, 30, 37]), 56);
console.log(sumPrimes([69, 79, 87, 97, 101]), 277);
console.log(sumPrimes([53, 59, 28, 50, 45, 33, 61]), 173);
console.log(sumPrimes([]), 0);
console.log(sumPrimes([11, 11, 11, 11, 11, 22, 22, 22]), 55);
console.log(sumPrimes([67, 24, 58, 28, 71, 73, 99]), 211);
