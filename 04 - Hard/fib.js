// https://edabit.com/challenge/j7BazSkQteP8Czp5b

const fib = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;

  const fibs = [0, 1];
  for (let i = 1; i < n; i++) {
    fibs.push(fibs[i] + fibs[i - 1]);
  }

  return fibs[fibs.length - 1];
};

// Tests

console.log(fib(0), 0);
console.log(fib(1), 1);
console.log(fib(2), 1);
console.log(fib(3), 2);
console.log(fib(4), 3);
console.log(fib(5), 5);
console.log(fib(6), 8);
console.log(fib(7), 13);
console.log(fib(8), 21);
console.log(fib(9), 34);
console.log(fib(10), 55);
console.log(fib(11), 89);
console.log(fib(12), 144);
console.log(fib(13), 233);
console.log(fib(14), 377);
console.log(fib(15), 610);
console.log(fib(16), 987);
console.log(fib(17), 1597);
console.log(fib(18), 2584);
console.log(fib(19), 4181);
console.log(fib(20), 6765);
console.log(fib(21), 10946);
console.log(fib(22), 17711);
console.log(fib(23), 28657);
console.log(fib(24), 46368);
console.log(fib(25), 75025);
console.log(fib(26), 121393);
console.log(fib(27), 196418);
console.log(fib(28), 317811);
console.log(fib(29), 514229);
console.log(fib(30), 832040);
console.log(fib(31), 1346269);
console.log(fib(50), 12586269025);
console.log(fib(65), 17167680177565);
console.log(fib(71), 308061521170129);
