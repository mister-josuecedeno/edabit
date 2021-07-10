function fifth() {
  return arguments.length >= 5 ? typeof arguments[4] : 'Not enough arguments';
}

// Tests
console.log(fifth('a', 2, 3, 4, 5), 'number');
console.log(fifth('zero', 'one', 'two', 'three', 'four', 'five'), 'string');
console.log(fifth(1, 2, 3, 4, false), 'boolean');
console.log(fifth(), 'Not enough arguments');
console.log(fifth(1, 2, 3, 4, 5), 'number');
console.log(fifth(1, 2, 3), 'Not enough arguments');
