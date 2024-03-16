// https://edabit.com/challenge/a8pSKKAr4JQBg9WcF

const pull = (arr, ...args) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    const currentElement = arr[i];

    if (args.includes(currentElement)) {
      arr.splice(i, 1);
    }
  }

  return arr;
};

// Tests

console.log(pull(['cat', 'penguin', 'dog', 'mouse'], 'mouse'), [
  'cat',
  'penguin',
  'dog',
]);

console.log(pull([1, 2, 3, 4, 5, 6, 7, 8, 9], 2, 3, 4), [1, 5, 6, 7, 8, 9]);
