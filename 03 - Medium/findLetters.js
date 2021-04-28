const findLetters = (word) => {
  const letters = [...word];
  const result = letters.filter((letter, _, letters) => {
    return letters.indexOf(letter) === letters.lastIndexOf(letter);
  });
  return result;
};

// Tests
console.log(findLetters('monopoly'), ['m', 'n', 'p', 'l', 'y']);
console.log(findLetters('balloon'), ['b', 'a', 'n']);
console.log(findLetters('analysis'), ['n', 'l', 'y', 'i']);
console.log(findLetters('summer'), ['s', 'u', 'e', 'r']);
console.log(findLetters('apple'), ['a', 'l', 'e']);
console.log(findLetters('commission'), ['c', 'n']);
console.log(findLetters('fox'), ['f', 'o', 'x']);
