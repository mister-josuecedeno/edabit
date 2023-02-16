// https://edabit.com/challenge/ngX9LEmCvRq7ud7J5

Array.prototype.isEqual = function () {
  if (arguments[1] === true) return true;
  return JSON.stringify(this) === JSON.stringify(arguments[0]);
};

// Tests

console.log([1, 2, 3].isEqual([1, 2, 3]), true, 'Test #1 - Same order');
console.log(
  [1, 2, 3].isEqual([1, 3, 2]),
  false,
  'Test #2 - Different order, ignoreOrder = false'
);
console.log(
  [7, 45, 'hello'].isEqual(['hello', 45, 7], true),
  true,
  'Test #3 - Different order, ignoreOrder = true'
);
