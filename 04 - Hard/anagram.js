// https://edabit.com/challenge/tGehcXPRmrepQPGQW

const anagram = (name, words) => {
  const n = name.toLowerCase().split('').sort().join('').trimStart();
  const w = words.join('').split('').sort().join('');
  return n === w;
};

// Tests

console.log(anagram('Justin Bieber', ['injures', 'ebb', 'it']), true);
console.log(anagram('Natalie Portman', ['ornamental', 'pita']), true);
console.log(anagram('Emma Watson', ['mows', 'meant', 'a']), true);
console.log(anagram('Daniel Radcliffe', ['clarified', 'elf', 'and']), true);
console.log(anagram('Tom Hiddleston', ['tenths', 'mood', 'lid']), true);
console.log(anagram('Blake Lively', ['key', 'veal', 'bill']), true);
console.log(anagram('Ryan Reynolds', ['yonder', 'sly', 'ran']), true);
console.log(anagram('Kristen Stewart', ['trinkets', 'war', 'set']), true);
console.log(anagram('Chris Pratt', ['chirps', 'rat']), false);
console.log(anagram('Jeff Goldblum', ['jog', 'meld', 'bluffs']), false);
console.log(anagram('Taylor Swift', ['stratify', 'ow']), false);
console.log(anagram('Adam Levine', ['medieval', 'man']), false);
console.log(anagram('Blake Shelton', ['betoken', 'all', 'she']), false);
console.log(anagram('Miley Cyrus', ['lyric', 'my', 'suer']), false);
console.log(anagram('Matt Damon', ['madman']), false);
console.log(anagram('Graham Norton', ['graham', 'not', 'or']), false);
console.log(anagram('Graham Norton', ['graham', 'not', 'or']), false);
