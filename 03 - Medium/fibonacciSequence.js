const fibonacciSequence = () => {
  const MAX = 255;
  const numbers = [0, 1];
  let length;
  let result = 0;
  
  while(result < MAX) {
    length = numbers.length;
    result = numbers[length - 1] + numbers[length - 2];

    if (result < MAX) {
      numbers.push(result);
    } else {
      return numbers;
    }
  }

  return numbers;
}

// Tests

console.log(fibonacciSequence(), [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233 ])
