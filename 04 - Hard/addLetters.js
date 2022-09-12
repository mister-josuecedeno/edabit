// https://edabit.com/challenge/4z75JHvjRXh8oyrri

const getPosition = (letter) => {
  return letter.charCodeAt() - 96;
};

// const getLetter = (position) => {
//   if (position <= 26) return String.fromCharCode(position + 96);
//   return String.fromCharCode(26 - (position + 96));
// };

const addLetters = (a) => {
  if (a.length === 0) return 'z';
  return a.map((n) => getLetter(getPosition(n)));
};

// Tests

console.log(addLetters(['a']), 'a');
console.log(addLetters(['a', 'b']), 'c');
console.log(addLetters(['a', 'b', 'c']), 'f');
console.log(addLetters(['a', 'b', 'c', 'd', 'e', 'f']), 'u');
console.log(addLetters(['y', 'a']), 'z');
console.log(addLetters(['y', 'c']), 'b');
console.log(addLetters(['z', 'a']), 'a');
console.log(addLetters(['x', 'y', 'z']), 'w');
console.log(addLetters([]), 'z');
