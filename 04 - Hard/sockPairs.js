// https://edabit.com/challenge/AkSERJZ9pTEZfFMNE

const sockPairs = (socks) => {
  if (socks === '') return 0;
  const sorted = [...socks].sort().join('');
  const regex = /(\w)\1/g;
  return (sorted.match(regex) || []).length;
};

// Tests

console.log(sockPairs('AA'), 1);
console.log(sockPairs('ABABC'), 2);
console.log(sockPairs('CABBACCC'), 4);
console.log(sockPairs('AACDE'), 1);
console.log(sockPairs('ACDBE'), 0);
console.log(sockPairs(''), 0);
console.log(sockPairs('ABABAB'), 2);
console.log(sockPairs('AAAAA'), 2);
console.log(sockPairs('AAACCBB'), 3);
