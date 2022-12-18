// https://edabit.com/challenge/pYSX8duMGhQCM3mWZ

// Review again tomorrow
const truncate = (string, length) => {
  const words = string.split(' ');
  const spaces = words.length - 1;
  const result = [];
  let sum = 0;

  for (const word of words) {
    sum += word.length + 1;
    if (sum > length + spaces) break;
    result.push(word);
  }

  return result.join(' ');
};

// Tests

// "Clean cut".
console.log(truncate('Lorem ipsum dolor sit amet.', 11), 'Lorem ipsum');

// "Dirty cut", you have to discard the last word.
console.log(
  truncate('Lorem ipsum dolor sit amet.', 16),
  'Lorem ipsum',
  'You have to discard the last word.'
);

// If length is greater than the strings length.
console.log(
  truncate('Lorem ipsum', 20),
  'Lorem ipsum',
  'If length is greater than the strings length.'
);

// Some extra tests.
console.log(truncate('Lorem ipsum', 4), '');
console.log(truncate('Lorem ipsum', 0), '');
console.log(truncate('', 30), '');
