const notGoodMath = (n, k) => {
  let current = n;
  let endsWithZero = false;

  const removeEnd = (n) => {
    return +`${n}`.slice(0,-1);
  }

  for (let i = 0; i < k; i++) {
    endsWithZero = `${current}`.endsWith(0);
    current = endsWithZero ? removeEnd(current) : current - 1;
  }

  return current;
}

// Tests

console.log(notGoodMath(78, 9), 7)
console.log(notGoodMath(540, 5), 50)
console.log(notGoodMath(1000000000, 9), 1)
console.log(notGoodMath(420, 4), 4)
console.log(notGoodMath(42023110, 10), 4201)
console.log(notGoodMath(88888888, 50), 883)
