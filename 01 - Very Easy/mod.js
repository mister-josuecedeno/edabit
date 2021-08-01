const mod = (a, b) => (a < b ? a : a - parseInt(a / b) * b);

// Tests
console.log(mod(0, 3), 0);
console.log(mod(1, 3), 1);
console.log(mod(5, 3), 2);
console.log(mod(4, 5), 4);
console.log(mod(218, 5), 3);
