// https://edabit.com/challenge/SNornDmdQ7ZJngoTn

Array.prototype.compact = function () {
  return [...new Set(this)].filter((e) => e === 0 || e === false || e);
};

// Tests

console.log([9, 9, 9, 8, 0, undefined].compact(), [9, 8, 0], 'Test #1');
console.log(['', 'hello', null, null, 'hello'].compact(), ['hello'], 'Test #2');
console.log(
  [1, 2, 2, 3, null, 0, '', undefined, 'another'].compact(),
  [1, 2, 3, 0, 'another'],
  'Test #3'
);
console.log(
  [true, true, false, 0, null].compact(),
  [true, false, 0],
  'Test #4'
);
