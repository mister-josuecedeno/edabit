const crazyfunction = (a, b) => {
  return a ^ b;
};

// Tests

// Set 1
console.log(crazyfunction(10, 20), 30);
console.log(crazyfunction(17, 35), 50);
console.log(crazyfunction(61, 233), 212);
console.log(crazyfunction(33, 47), 14);
console.log(crazyfunction(18, 209), 195);
console.log(crazyfunction(91, 54), 109);
console.log(crazyfunction(88, 123), 35);
console.log(crazyfunction(11, 8), 3);

// Set 2
console.log(crazyfunction(56, 80), 104);
console.log(crazyfunction(8, 45), 37);
console.log(crazyfunction(99, 201), 170);
console.log(crazyfunction(11, 78), 69);
console.log(crazyfunction(49, 139), 186);
console.log(crazyfunction(31, 50), 45);
console.log(crazyfunction(102, 113), 23);
console.log(crazyfunction(90, 500768), 500858);
