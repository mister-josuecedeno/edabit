// https://edabit.com/challenge/gQuex4Ldsohmzscb3

// NOt my solution
function snakefill(x) {
  const max = x * x;
  let sum = 1;
  let count = 0;
  while (sum <= max) {
    sum += sum;
    if (sum <= max) count++;
  }
  return count;
}

// Tests
console.log(snakefill(8), 6);
console.log(snakefill(18), 8);
console.log(snakefill(555), 18);
console.log(snakefill(2), 2);
console.log(snakefill(1), 0);
console.log(snakefill(900), 19);
