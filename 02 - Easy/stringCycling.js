const stringCycling = (str1, str2) => {
  let result = '';
  let index = 0;

  for (let i = 0; i < str2.length; i++) {
    index = str1[index] === undefined ? 0 : index;
    result += str1[index];
    index++;
  }

  return result;
};

// Other Solutions
// const stringCycling = (a, b) => ''.padEnd(b.length, a);

// padEnd()
// developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd

// Tests
let [actualParam, expectedParam] = [
  [
    ['abc', 'hello'],
    ['programming', 'edabit'],
    ['ha', 'good morning'],
    [' ', 'python'],
    ['the quick brown fox jumps over the lazy dog', 'abcde'],
    ['the world in me evolves in hers', 'i love Tesh, so much so'],
    ['a thing of beauty is a joy forever', 'indulge me surely'],
    ['to', 'hide'],
    ['such a feeling coming over me', 'top of the world'],
  ],
  [
    'abcab',
    'progra',
    'hahahahahaha',
    '      ',
    'the q',
    'the world in me evolves',
    'a thing of beauty',
    'toto',
    'such a feeling c',
  ],
];
for (let i in actualParam)
  console.log(stringCycling(...actualParam[i]), expectedParam[i]);
