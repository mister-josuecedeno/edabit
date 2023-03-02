// https://edabit.com/challenge/GcAyjyN5rvdHSXnLP

const reverseMiddle = (word) => {
  if (word.length <= 3) return word;
  const letters = [...word];
  const first = letters.shift();
  const last = letters.pop();
  return `${first}${letters.reverse().join('')}${last}`;
};

const mixMiddle = (str) => {
  const words = str.split(' ');
  return words.map((w) => reverseMiddle(w)).join(' ');
};

// Tests

console.log(reverseMiddle('test'));

console.log(
  mixMiddle('the quick brown fox jumps high'),
  'the qciuk bworn fox jpmus hgih'
);
console.log(
  mixMiddle('this sentence is quite muddled'),
  'tihs scnetnee is qtiue melddud'
);
console.log(
  mixMiddle('buying a first-class ticket'),
  'bniyug a fsalc-tsris tekcit'
);
console.log(mixMiddle('hello world'), 'hlleo wlrod');
console.log(mixMiddle('is it a cat or a dog'), 'is it a cat or a dog');
