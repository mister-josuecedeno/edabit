const isPrime = (n) => {
  let count = 0;

  for (let i = 1; i <= n && count < 3; i++) {
    if (n % i === 0) count++;
  }

  return count === 2;
};

const primeInRange = (n1, n2) => {
  for (let i = n1; i <= n2; i++) {
    if (isPrime(i)) return true;
  }

  return false;
};

// Tests

let [intVector, resVector] = [
  [
    [10, 12],
    [62, 66],
    [441, 445],
    [0, 2],
    [20, 22],
    [4444, 5555],
    [114, 120],
  ],
  [true, false, true, true, false, true, false],
];
for (let i in intVector)
  console.log(primeInRange(...intVector[i]), resVector[i]);
