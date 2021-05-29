const maximumSeating = (seats) => {
  let count = 0;
  let current, next, last;
  let isNextEmpty, isLastEmpty;

  for (let i = 0; i < seats.length; i += 3) {
    current = seats[i];
    next = seats[i + 1];
    last = seats[i + 2];
    isNextEmpty = next === 0 || next === undefined;
    isLastEmpty = last === 0 || last === undefined;

    if (current === 0 && isNextEmpty && isLastEmpty) {
      count++;
      current = 1;
    }
  }

  return count;
};

// Tests
console.log(maximumSeating([0, 0, 0, 1, 0, 0, 1, 0, 0, 0]), 2);
console.log(maximumSeating([0, 0, 0, 0]), 2);
console.log(maximumSeating([1, 0, 0, 0, 0, 0, 1]), 1);
console.log(maximumSeating([1, 0, 0, 0, 0, 0, 0, 1]), 1);
console.log(
  maximumSeating([1, 0, 0, 0, 0, 1]),
  0,
  'Remember to keep a 2 chair gap on both sides!'
);
console.log(maximumSeating([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 4);
console.log(maximumSeating([0]), 1);
console.log(maximumSeating([0, 0]), 1);
console.log(maximumSeating([1]), 0);
console.log(
  maximumSeating([
    0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0,
    0,
  ]),
  1
);
