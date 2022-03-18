const countPalindromes = (num1, num2) => {
  let count = 0;

  for (let i = num1; i <= num2; i++) {
    if (`${i}` == [...`${i}`].reverse().join('')) {
      count++;
    }
  }

  return count;
};

// Tests

console.log(countPalindromes(1, 10), 9);
console.log(countPalindromes(555, 556), 1);
console.log(countPalindromes(878, 898), 3);
console.log(countPalindromes(8, 34), 5);
console.log(countPalindromes(1550, 1556), 1);
