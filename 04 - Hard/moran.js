// https://edabit.com/challenge/tLBEdP8Kp2WSJo7bo

const isPrime = (n) => {
  let count = 0;

  for (let i = 1; i <= n && count < 3; i++) {
    if (n % i === 0) count++;
  }

  return count === 2;
};

const sumOfDigits = (n) => {
  return [...`${n}`].reduce((acc, cv) => acc + +cv, 0);
};

const moran = (n) => {
  const div = n / sumOfDigits(n);
  const harshad = Number.isInteger(div);
  const moran = isPrime(div);

  if (moran) return 'M';
  if (harshad) return 'H';
  return 'Neither';
};

// Tests

console.log(moran(132), 'H');
console.log(moran(133), 'M');
console.log(moran(134), 'Neither');
console.log(moran(3033), 'M');
console.log(moran(3030), 'H');
console.log(moran(491423), 'Neither');
console.log(moran(20937), 'M');
