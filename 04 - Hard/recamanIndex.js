// https://edabit.com/challenge/jDtwBwYhaMD2HftdX

// Instructions:
// sequence starts with 0 => [0]
// last element
// length
// length - last > 0 && not in the sequence => add to sequence
// else length + last (even if in sequence)
// Repeat

// Refactor last step

const recamanIndex = (n) => {
  const sequence = [0];
  let length, last, add, sub;
  let inSequence = false;
  let isGreaterThanZero = false;
  let index = -1;

  while (index === -1) {
    length = sequence.length;
    last = sequence.slice(-1);
    sub = length - last;
    add = length + last;
    inSequence = sequence.indexOf(sub) != -1;
    isGreaterThanZero = sub > 0;
    console.log([length, last, sub, add, inSequence, isGreaterThanZero]);

    // Option 1: isGreaterThanZero && NOT inSequence
    if (isGreaterThanZero && !inSequence) sequence.push(sub);

    // Option 2: NOT isGreaterThanZero
    if (!isGreaterThanZero) sequence.push(add);

    // Check for index
    index = sequence.indexOf(n);
    console.log([sequence, n, index]);
  }

  return index;
};

// Tests

console.log(recamanIndex(2), 4, 'Example explained in Instructions');
// console.log(recamanIndex(3), 2);
// console.log(recamanIndex(7), 5);
// console.log(recamanIndex(20), 7);
// console.log(recamanIndex(56), 204);
// console.log(recamanIndex(100), 387);
// console.log(recamanIndex(666), 2292);
// console.log(recamanIndex(1000), 4419);
// console.log(recamanIndex(10000), 7215);
