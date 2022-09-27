// https://edabit.com/challenge/H8JABWQfYFN4ZSAxE

// Good re-factor
const uniqueAbbrev = (abbs, words) =>
  abbs.every((a) => words.filter((w) => w.startsWith(a)).length === 1);

/*
const uniqueAbbrev = (abbs, words) => {
  let first = words.filter((w) => w.startsWith(abbs[0])).length;
  let second = words.filter((w) => w.startsWith(abbs[1])).length;
  let third = words.filter((w) => w.startsWith(abbs[2])).length;

  return first + second + third === 3;
};

*/

// Tests

console.log(
  uniqueAbbrev(['s', 't', 'v'], ['stamina', 'television', 'vindaloo']),
  true
);
console.log(uniqueAbbrev(['mo', 'ma', 'me'], ['moment', 'many', 'mean']), true);
console.log(
  uniqueAbbrev(['at', 'o', 'abe'], ['atom', 'original', 'abet']),
  true
);
console.log(
  uniqueAbbrev(['rh', 'par', 're'], ['rhino', 'parry', 'residue']),
  true
);
console.log(uniqueAbbrev(['ho', 'h', 'ha'], ['house', 'hope', 'happy']), false);
console.log(
  uniqueAbbrev(['bi', 'ba', 'bat'], ['big', 'bard', 'battery']),
  false
);
console.log(
  uniqueAbbrev(['b', 'c', 'ch'], ['broth', 'chap', 'cardigan']),
  false
);
console.log(
  uniqueAbbrev(['to', 'too', 't'], ['topology', 'took', 'torrent']),
  false
);
