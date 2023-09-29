// https://edabit.com/challenge/aJHPftoXzexJMcoPf

// Not my solution
function profit(A, B) {
  let countA = 0;
  let countB = 0;

  for (let i = 0; i <= 100; i++) {
    let distanceToA = Math.abs(A - i);
    let distanceToB = Math.abs(B - i);

    if (distanceToA < distanceToB) {
      countA++;
    } else if (distanceToB < distanceToA) {
      countB++;
    }
    // We ignore ties, as instructed
  }

  return [countA, countB];
}

// Tests

console.log(profit(32, 69), [51, 50]);
console.log(profit(49, 51), [50, 50]);
console.log(profit(25, 26), [26, 75]);
console.log(profit(24, 26), [25, 75]);
console.log(profit(0, 1), [1, 100]);
console.log(profit(3, 6), [5, 96]);
console.log(profit(55, 65), [60, 40]);
console.log(profit(25, 75), [50, 50]);
