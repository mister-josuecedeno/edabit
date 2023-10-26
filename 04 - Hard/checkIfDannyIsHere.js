// https://edabit.com/challenge/mxmZby7FHAW47yTAX

// Not my solution
const checkIfDannyIsHere = (str) => {
  const dannyRegex = new RegExp(
    [
      '[dD|)\\[\\]|]', // D variations
      '[aA@4^/\\\\/\\\\-\\\\]', // A variations
      '[nN|\\\\|/\\\\/\\\\(\\\\)]{2}', // N variations (twice for 'nn')
      "[yY`/'°/]",
    ].join(''),
    'i'
  ); // i flag makes it case-insensitive

  return dannyRegex.test(str);
};

// Tests

console.log(checkIfDannyIsHere('is there dan here ?'), false);
console.log(checkIfDannyIsHere('and here dan ny ?'), false);
console.log(checkIfDannyIsHere('I found you d4nny '), true);
console.log(checkIfDannyIsHere('danny is here'), true);
console.log(
  checkIfDannyIsHere(
    'best still sitting |\\|ot cut main computer mouse film cut.'
  ),
  false
);
