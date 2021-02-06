const calculateFuel = (n) => {
  return n * 10 < 100 ? 100 : n * 10;
};

// Tests

console.log(calculateFuel(15), 150);
console.log(calculateFuel(23), 230);
console.log(calculateFuel(10), 100);
console.log(calculateFuel(3), 100);
console.log(calculateFuel(23.5), 235);
console.log(calculateFuel(3.14), 100);
console.log(calculateFuel(9.99999), 100);
console.log(calculateFuel(822315322), 8223153220);
console.log(calculateFuel(12345.6789), 123456.789);
console.log(calculateFuel(31.41), 314.1);
