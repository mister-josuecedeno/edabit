// Given any number of parameters (which is signified using *args syntax),
// return True if none of the variables are falsy/empty.

// Solution

const nothing_is_nothing = (...args) => {
  let falsy = [...args].filter((el) => !el).length || 0;
  return falsy === 0;
};

// Tests

console.log(nothing_is_nothing(0, false, [], {}), false);
console.log(nothing_is_nothing(33, 'Hello', (true, true, 3)), true);
console.log(nothing_is_nothing(true, null), false);
console.log(nothing_is_nothing(null, null), false);
console.log(nothing_is_nothing(221), true);
console.log(nothing_is_nothing(221, 0, 0, 0), false);
console.log(nothing_is_nothing([221, 0, 0, 0]), true);
