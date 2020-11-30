// Create a function that takes a string and changes
// the word amazing to not amazing. Return the string
// without any change if the word edabit is part of the string.

// Solution
const amazingEdabit = (str) => {
  if (str.includes('edabit')) {
    return str;
  } else {
    return str.replace('amazing', 'not amazing');
  }
};

// Tests
console.log(amazingEdabit('edabit is amazing.'), 'edabit is amazing.');
console.log(amazingEdabit('Mubashir is amazing.'), 'Mubashir is not amazing.');
console.log(amazingEdabit('Trump is amazing.'), 'Trump is not amazing.');
console.log(amazingEdabit('Infinity is amazing.'), 'Infinity is not amazing.');
console.log(
  amazingEdabit('Mubashir and edabit are amazing.'),
  'Mubashir and edabit are amazing.'
);
console.log(amazingEdabit('Matt is amazing.'), 'Matt is not amazing.');
console.log(amazingEdabit('Helen is amazing.'), 'Helen is not amazing.');
console.log(
  amazingEdabit('Python and edabit are amazing.'),
  'Python and edabit are amazing.'
);
console.log(amazingEdabit('C++ is amazing.'), 'C++ is not amazing.');
console.log(
  amazingEdabit('javascript is amazing.'),
  'javascript is not amazing.'
);
console.log(amazingEdabit('java is amazing.'), 'java is not amazing.');
console.log(amazingEdabit('ruby is amazing.'), 'ruby is not amazing.');
console.log(amazingEdabit('SQL is amazing.'), 'SQL is not amazing.');
console.log(amazingEdabit('CSS is amazing.'), 'CSS is not amazing.');
console.log(
  amazingEdabit('Pakistan is amazing. edabit'),
  'Pakistan is amazing. edabit'
);
console.log(
  amazingEdabit('You and edabit are amazing.'),
  'You and edabit are amazing.'
);
console.log(
  amazingEdabit('Matt and edabit are amazing.'),
  'Matt and edabit are amazing.'
);
console.log(
  amazingEdabit('Helen and edabit are amazing.'),
  'Helen and edabit are amazing.'
);
console.log(amazingEdabit('Everyone is amazing.'), 'Everyone is not amazing.');
console.log(
  amazingEdabit('Swift and edabit are amazing.'),
  'Swift and edabit are amazing.'
);
