// https://edabit.com/challenge/p3LHPrDSwr4kYE9ov

const getLastWord = (words) => {
  const arr = words.split(' ');
  return arr[arr.length - 1];
};

const getVowels = (word) => {
  const regex = /[aeiou]/gi;
  return word.toLowerCase().match(regex).join('');
};

const doesRhyme = (str1, str2) => {
  const s1 = getVowels(getLastWord(str1));
  const s2 = getVowels(getLastWord(str2));
  return s1 === s2;
};

// Tests

console.log(
  doesRhyme('Sam I am!', 'Green eggs and ham.'),
  true,
  'Should work with punctuation.'
);
console.log(
  doesRhyme('Sam I am!', 'Green eggs and HAM.'),
  true,
  'Should work with uppercase/punctuation.'
);
console.log(doesRhyme('head straight to town', 'give me not a frown'), true);
console.log(doesRhyme('with an unpleasant bump', 'in a slump'), true);
console.log(
  doesRhyme('your elbow and chin!', 'how much can you win?'),
  true,
  'Should work with punctuation.'
);
console.log(
  doesRhyme('you will start to race', 'the waiting Place'),
  true,
  'Should work with upper case letters.'
);
console.log(
  doesRhyme('All that waiting and staying.', 'where the band are playing.'),
  true,
  'Should work with punctuation.'
);
console.log(doesRhyme('You are off to the races', 'a splendid day.'), false);
console.log(doesRhyme('and frequently do?', 'you gotta move.'), false);
console.log(doesRhyme('down by the bay', 'where the watermelons grow'), false);
console.log(doesRhyme('back to my home', 'i dare not go'), false);
