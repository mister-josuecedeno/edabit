const simpleNumbers = (a, b) => {
  // how is a number simple
  const isSimple = (n) => {
    let arr = [...`${n}`];
    let sum = arr.reduce((acc, cv, i) => acc + cv ** (i + 1), 0);
    return n === sum;
  };

  // generate an array from a to b
  const range = [];
  for (let i = a; i <= b; i++) {
    range.push(i);
  }

  // filter for simple numbers
  const result = range.filter((n) => isSimple(n));
  return result;
};

// Tests

console.log(simpleNumbers(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(simpleNumbers(1, 100), [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]);
console.log(simpleNumbers(10, 89), [89]);
console.log(simpleNumbers(10, 100), [89]);
console.log(simpleNumbers(90, 100), []);
console.log(simpleNumbers(90, 150), [135]);
console.log(simpleNumbers(50, 150), [89, 135]);
console.log(simpleNumbers(10, 150), [89, 135]);
console.log(simpleNumbers(89, 135), [89, 135]);
console.log(simpleNumbers(100, 32253), [135, 175, 518, 598, 1306, 1676, 2427]);
