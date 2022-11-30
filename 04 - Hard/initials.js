// https://edabit.com/challenge/HL2sXjjBHgKZJYQJy

let x = /^ *([A-Z]\.)( [A-Z]\.){1,2} *$/;

// Tests

function validate(name) {
  return x.test(name);
}

console.log(validate('R. T.'), 'R. T. is a valid initial.');
console.log(validate('R. K. T.'), 'R. K. T. is a valid initial.');

console.log(validate(' R. T.'), ' R. T. is valid with leading spaces.');
console.log(validate(' R. T.    '), ' R. T. is valid with trailing spaces.');
console.log(
  validate('    R. K. T.'),
  ' R. K. T. is valid with leading spaces.'
);
console.log(validate('R. K. T. '), ' R. K. T. is valid with trailing spaces.');

console.log(
  !validate('RT. K.'),
  'RK. T. Invalid. Initials must be one character only.'
);
console.log(
  !validate('R. K. T. B.'),
  'R. K. T. B. Invalid. Two or three names only.'
);
console.log(!validate('r. k.'), 'r. k. Invalid. Initials must be uppercased.');
console.log(
  !validate('R.  K.'),
  'R.  K. Invalid. There must be exactly one space between characters.'
);
console.log(!validate('R. K'), 'R. K Invalid. Missing a period.');
console.log(
  !validate('R . K.'),
  'R . K. Invalid. Dots must immediately follow initials.'
);
console.log(
  !validate('.R K.'),
  '.R K. Invalid. Dots should go after initials.'
);
console.log(
  !validate('3. K.'),
  '3. K. Invalid. Initials can only be composed of letters.'
);
console.log(
  !validate('R, K.'),
  'R, K. Invalid. Only periods can follow initials.'
);
