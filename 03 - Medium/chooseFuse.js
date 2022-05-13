// Set-up
const chooseFuse = (fuses, current) => {
  const numbers = fuses.map((f) => parseInt(f));
  const number = parseInt(current);

  let bestFit;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < number) continue;
  }

  return bestFit;
};

// Tests

console.log(chooseFuse(['3V', '5V', '12V'], '4.5V'), '5V');
console.log(chooseFuse(['5V', '14V', '2V'], '5.5V'), '14V');
console.log(chooseFuse(['17V', '15V', '12V'], '9V'), '12V');
console.log(chooseFuse(['1V', '2V', '3V'], '2.5V'), '3V');
console.log(chooseFuse(['17V', '15V', '12V'], '1V'), '12V');
console.log(chooseFuse(['7V', '135V', '12V'], '9.5V'), '12V');
console.log(chooseFuse(['17V', '15V', '12V'], '17V'), '17V');
console.log(chooseFuse(['3V', '11V', '12V'], '4.5V'), '11V');
console.log(chooseFuse(['3V', '5V', '12V'], '0.5V'), '3V');
