const isNarcissistic = (n) => {
  let digits = [...`${n}`];
  let length = digits.length;
  let sum = digits.reduce((acc, cv) => acc + Math.pow(+cv, length), 0);
  return n === sum;
}

// Tests

console.log(isNarcissistic(6), true)
console.log(isNarcissistic(1741725), true)
console.log(isNarcissistic(66), false)
console.log(isNarcissistic(65239), false)
console.log(isNarcissistic(886243), false)
console.log(isNarcissistic(92727), true)
console.log(isNarcissistic(472335975), true)
console.log(isNarcissistic(42300981), false)
console.log(isNarcissistic(548834), true)
