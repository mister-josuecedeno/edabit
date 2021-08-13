const isNarcissistic = (n) => {
  const str = `${n}`;
  const len = str.length;
  let sum = 0;

  str.split('').forEach((num) => {
    sum += num ** len;
  });

  return sum === n;
};

// Tests

console.log(isNarcissistic(1), true, '1 is narcissistic');
console.log(isNarcissistic(5), true, '5 is narcissistic');
console.log(isNarcissistic(7), true, '7 is narcissistic');
console.log(isNarcissistic(153), true, '153 is narcissistic');
console.log(isNarcissistic(370), true, '370 is narcissistic');
console.log(isNarcissistic(371), true, '371 is narcissistic');
console.log(isNarcissistic(1634), true, '1634 is narcissistic');
console.log(isNarcissistic(9004), false);
console.log(isNarcissistic(2546), false);
console.log(isNarcissistic(2124), false);
console.log(isNarcissistic(8345), false);
// Mubashir
