const sumDigit = (n) => {
  if (n <= 0) return 0;

  return (n % 10) + sumDigit(Math.floor(n / 10));
};

// Tests
console.log(sumDigit(111), 3);
console.log(sumDigit(222), 6);
console.log(sumDigit(333), 9);
console.log(sumDigit(444), 12);
console.log(sumDigit(555), 15);
console.log(sumDigit(666), 18);
console.log(sumDigit(777), 21);
console.log(sumDigit(888), 24);
console.log(sumDigit(999), 27);
console.log(sumDigit(1111), 4);
