const sumCubes = (n) => {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    console.log(i);
    sum += i ** 3;
  }

  return sum;
};

// Tests
console.log(sumCubes(1), 1);
console.log(sumCubes(2), 9);
console.log(sumCubes(3), 36);
console.log(sumCubes(4), 100);
console.log(sumCubes(5), 225);
console.log(sumCubes(6), 441);
console.log(sumCubes(7), 784);
console.log(sumCubes(8), 1296);
console.log(sumCubes(9), 2025);
console.log(sumCubes(10), 3025);
console.log(sumCubes(123), 58155876);
console.log(sumCubes(125), 62015625);
console.log(sumCubes(133), 79405921);
console.log(sumCubes(167), 196784784);
console.log(sumCubes(188), 315630756);
console.log(sumCubes(199), 396010000);
console.log(sumCubes(200), 404010000);
console.log(sumCubes(300), 2038522500);
console.log(sumCubes(400), 6432040000);
console.log(sumCubes(500), 15687562500);
console.log(sumCubes(12345), 5807306426319225);
