// https://edabit.com/challenge/FeSnj9JdWMRMEfff7

const getCollatzSteps = (n) => {
  let count = 0;

  while (n > 1) {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      n *= 3;
      n += 1;
    }
    count++;
  }

  return count;
};

const collatz = (a, b) => {
  const aSteps = getCollatzSteps(a);
  const bSteps = getCollatzSteps(b);
  return aSteps < bSteps ? 'a' : 'b';
};

// Tests

console.log(collatz(10, 15), 'a');
console.log(collatz(13, 16), 'b');
console.log(collatz(53782, 72534), 'b');
console.log(collatz(72221, 11198), 'b');
console.log(collatz(1723817263, 837249873748), 'a');
console.log(collatz(556238, 667822), 'b');
console.log(collatz(4, 3), 'a');
console.log(
  collatz(64287364823648762384623847823648, 767623964723864823648725736487262),
  'a'
);
console.log(collatz(46287364872837482, 1267650600228229401496703205376), 'b');
