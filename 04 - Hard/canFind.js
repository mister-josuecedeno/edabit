// https://edabit.com/challenge/wQGGp6Qce6phDCvW9

const canFind = (bigrams, words) => {
  const result = [];

  for (const b of bigrams) {
    result.push(words.some((w) => w.includes(b)));
  }

  return result.every((r) => r);
};

// Tests

console.log(
  canFind(['at', 'be', 'th', 'au'], ['beautiful', 'the', 'hat']),
  true
);
console.log(
  canFind(['bo', 'ta', 'el', 'st', 'ca'], ['books', 'table', 'cap', 'hostel']),
  true
);
console.log(canFind(['la', 'te'], ['latte']), true);
console.log(
  canFind(['th', 'fo', 'ma', 'or'], ['the', 'many', 'for', 'forest']),
  true
);
console.log(
  canFind(['ay', 'be', 'ta', 'cu'], ['maybe', 'beta', 'abet', 'course']),
  false
);
console.log(
  canFind(['oo', 'mi', 'ki', 'la'], ['milk', 'chocolate', 'cooks']),
  false
);
console.log(canFind(['la'], []), false);
console.log(canFind(['la', 'at', 'te', 'ea'], ['latte']), false);
