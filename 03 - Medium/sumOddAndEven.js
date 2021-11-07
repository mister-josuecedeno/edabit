const sumOddAndEven = (arr) => {
  let odd = 0;
  let even = 0;

  arr.forEach(n => {
    if(n % 2 === 0) {
      even += n;
    } else {
      odd += n;
    }
  });

  return [even, odd]
}

// Tests

console.log(sumOddAndEven([1, 2, 3, 4, 5, 6]), [12, 9])
console.log(sumOddAndEven([-1, -2, -3, -4, -5, -6]), [-12, -9])
console.log(sumOddAndEven([0, 0]), [0, 0])
console.log(sumOddAndEven([]), [0, 0])
