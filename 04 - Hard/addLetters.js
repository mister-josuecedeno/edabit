// https://edabit.com/challenge/4z75JHvjRXh8oyrri

const getPosition = (letter) => {
  return letter.charCodeAt() - 96;
};

const getLetter = (position) => {
  position %= 26;
  if (position === 0) return 'z';
  return String.fromCharCode(position + 96);
};

const addLetters = (a) => {
  if (a.length === 0) return 'z';
  const positions = a.map((n) => getPosition(n));
  const total = positions.reduce((acc, cv) => acc + cv, 0);
  return getLetter(total);
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
