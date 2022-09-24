// https://edabit.com/challenge/CwRXhTncGii8dupn9

const roundNumber = (num, n) => {
  const remainder = num % n;
  const previous = num - remainder;
  const next = previous + n;
  const prevDiff = num - previous;
  const nextDiff = next - num;
  return prevDiff < nextDiff ? previous : next;
};

// Tests

console.log(roundNumber(34, 25), 25);
console.log(roundNumber(54, 8), 56);
console.log(roundNumber(65, 10), 70);
console.log(roundNumber(6247, 163), 6194);
console.log(roundNumber(532, 12), 528);
console.log(roundNumber(642234, 1523), 642706);
console.log(roundNumber(5123, 10), 5120);
console.log(roundNumber(96623443, 7650), 96627150);
console.log(roundNumber(125123, 520), 125320);
console.log(roundNumber(12121212, 144), 12121200);
