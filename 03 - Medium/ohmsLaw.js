// V = R * I

function ohmsLaw(v, r, i) {
  let result = 0;

  // Only one argument can be missing
  let isValid = [...arguments].filter((arg) => arg === '').length === 1;
  if (!isValid) return 'Invalid';

  if (v === '') result = r * i;
  if (r === '') result = v / i;
  if (i === '') result = v / r;

  return Math.round(result * 100) / 100;
}

// Tests

console.log(ohmsLaw(12, 220, ''), 0.05);
console.log(ohmsLaw(230, '', 2), 115);
console.log(ohmsLaw('', 220, 0.02), 4.4);
console.log(ohmsLaw('', '', 10), 'Invalid');
console.log(ohmsLaw(500, 50, 10), 'Invalid');
console.log(ohmsLaw(12, '', ''), 'Invalid');
