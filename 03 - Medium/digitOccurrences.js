const digitOccurrences = (min, max, digit) => {
  const regex = new RegExp(`${digit}`, 'g');
  let match;
  let result = 0;

  for (let i = min; i <= max; i++) {
    match = `${i}`.match(regex);
    if (match !== null) {
      result += match.length;
    }
  }

  return result;
};

// Tests

console.log(digitOccurrences(51, 55, 5), 6);
console.log(digitOccurrences(1, 8, 9), 0);
console.log(digitOccurrences(71, 77, 2), 1);
console.log(digitOccurrences(1, 14, 4), 2);
console.log(digitOccurrences(20, 30, 2), 11);
console.log(digitOccurrences(18, 37, 3), 10);
console.log(digitOccurrences(5, 335, 6), 63);
console.log(digitOccurrences(-19, 19, 0), 3);
console.log(digitOccurrences(-8, -1, 8), 1);
console.log(digitOccurrences(-5, -5, 4), 0);
console.log(digitOccurrences(-5, -5, 5), 1);
console.log(digitOccurrences(-50, -45, 4), 5);
console.log(digitOccurrences(-500, -45, 4), 190);
