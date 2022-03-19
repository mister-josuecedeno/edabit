function factFact(n) {
  let f = 1,
    count = 1;
  for (let i = 1; i <= n; i++) {
    f *= i;
    count *= f;
  }
  return count;
}

// function factorialize(num) {
//   if (num < 0) return -1;
//   else if (num == 0) return 1;
//   else {
//     return num * factorialize(num - 1);
//   }
// }

// const factFact = (n) => {
//   let result = 1;

//   for (let i = n; i > 0; i--) {
//     result *= factorialize(i);
//   }
//   return result;
// };

// Tests

console.log(factFact(4), 288);
