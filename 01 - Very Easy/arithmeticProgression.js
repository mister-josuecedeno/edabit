const arithmeticProgression = (start, diff, n) => {
  let num = start;
  const numbers = [start];

  for (let i = 1; i < n; i++) {
    num += diff;
    numbers.push(num);
  }

  return numbers.join(', ');
};

// tests

console.log(arithmeticProgression(1, 2, 5), '1, 3, 5, 7, 9');
console.log(arithmeticProgression(1, 0, 5), '1, 1, 1, 1, 1');
console.log(
  arithmeticProgression(1, -3, 10),
  '1, -2, -5, -8, -11, -14, -17, -20, -23, -26'
);
console.log(
  arithmeticProgression(100, -10, 10),
  '100, 90, 80, 70, 60, 50, 40, 30, 20, 10'
);
