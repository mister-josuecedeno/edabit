// Solution

const firstOne = (a, b = 0, c = 0, d = 0) => {
  return a || b || c || d || 'not found';
};

// Tests
console.log(firstOne('Edabit'), 'Edabit');
console.log(firstOne(false), 'not found');
console.log(firstOne('', 'Pikachu'), 'Pikachu');
console.log(firstOne('', 0), 'not found');
console.log(firstOne(0, 20, ''), 20);
console.log(firstOne(0, 0, ''), 'not found');
console.log(firstOne('', 0, true, false), true);
console.log(firstOne('', 0, false, false), 'not found');
