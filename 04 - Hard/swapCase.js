// https://edabit.com/challenge/2buQEWggGkx7RQYD7

String.prototype.swapCase = function () {
  return [...this]
    .map((l) => (l === l.toUpperCase() ? l.toLowerCase() : l.toUpperCase()))
    .join('');
};

// Tests

console.log('Hello'.swapCase(), 'hELLO');
console.log(
  '2 4 6 8 WHO DO WE APPRECIATE?'.swapCase(),
  '2 4 6 8 who do we appreciate?'
);
console.log('aBcD'.swapCase().swapCase(), 'aBcD');
console.log(''.swapCase(), '');
console.log('!"£$%^&*()'.swapCase(), '!"£$%^&*()');
console.log(
  'I once saw an Octopus attempt to devour a whole TUNA.'.swapCase(),
  'i ONCE SAW AN oCTOPUS ATTEMPT TO DEVOUR A WHOLE tuna.'
);
