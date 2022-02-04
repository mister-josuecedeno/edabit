const gimmeTheLetters = (spectrum) => {
  const [firstLetter, lastLetter] = spectrum.split('-');
  const letters = [];
  let start = firstLetter.charCodeAt(0);
  let end = lastLetter.charCodeAt(0);

  for (let i = start; i <= end; i++) {
    letters.push(i);
  }

  return letters.map((l) => String.fromCharCode(l)).join('');
};

// Tests

console.log(gimmeTheLetters('a-z'), 'abcdefghijklmnopqrstuvwxyz');
console.log(gimmeTheLetters('h-o'), 'hijklmno');
console.log(gimmeTheLetters('Q-Z'), 'QRSTUVWXYZ');
console.log(gimmeTheLetters('J-J'), 'J');
console.log(gimmeTheLetters('a-b'), 'ab');
console.log(gimmeTheLetters('A-A'), 'A');
console.log(gimmeTheLetters('g-i'), 'ghi');
console.log(gimmeTheLetters('H-I'), 'HI');
console.log(gimmeTheLetters('y-z'), 'yz');
console.log(gimmeTheLetters('e-k'), 'efghijk');
console.log(gimmeTheLetters('a-q'), 'abcdefghijklmnopq');
console.log(gimmeTheLetters('F-O'), 'FGHIJKLMNO');
