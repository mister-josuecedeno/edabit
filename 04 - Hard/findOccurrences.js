// https://edabit.com/challenge/gA9dpoanWY6StiKR9

const getCharacterCount = (word, char) => {
  const regex = new RegExp(char, 'g');
  return (word.match(regex) || []).length;
};

const findOccurrences = (str, char) => {
  const wordMap = {};
  const words = [...new Set(str.toLowerCase().split(' '))];

  for (const word of words) {
    wordMap[word] = getCharacterCount(word, char.toLowerCase());
  }

  return wordMap;
};

// Tests

console.log(findOccurrences('Hello World', 'o'), {
  hello: 1,
  world: 1,
});

console.log(findOccurrences('Create a nice JUICY function', 'c'), {
  create: 1,
  a: 0,
  nice: 1,
  juicy: 1,
  function: 1,
});

console.log(
  findOccurrences('An APPLE a day keeps an Archeologist AWAY...', 'a'),
  {
    an: 1,
    apple: 1,
    a: 1,
    day: 1,
    keeps: 0,
    archeologist: 1,
    'away...': 2,
  }
);

console.log(findOccurrences('hello people of the planet Earth', 'g'), {
  hello: 0,
  people: 0,
  of: 0,
  the: 0,
  planet: 0,
  earth: 0,
});

console.log(
  findOccurrences(
    'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.',
    'R'
  ),
  {
    reference: 2,
    site: 0,
    about: 0,
    lorem: 1,
    'ipsum,': 0,
    giving: 0,
    information: 1,
    on: 0,
    its: 0,
    'origins,': 1,
    as: 0,
    well: 0,
    a: 0,
    random: 1,
    lipsum: 0,
    'generator.': 2,
  }
);

console.log(
  findOccurrences(
    'Lift your spirits with funny jokes, trending memes, entertaining gifs, inspiring stories,',
    'l'
  ),
  {
    lift: 1,
    your: 0,
    spirits: 0,
    with: 0,
    funny: 0,
    'jokes,': 0,
    trending: 0,
    'memes,': 0,
    entertaining: 0,
    'gifs,': 0,
    inspiring: 0,
    'stories,': 0,
  }
);
console.log(findOccurrences('Thats not a camel, thats my wife.', 'a'), {
  thats: 1,
  not: 0,
  a: 1,
  'camel,': 1,
  my: 0,
  'wife.': 0,
});
console.log(
  findOccurrences(
    'hippopotomonstrosesquippedaliophobia is the fear of long words',
    'p'
  ),
  {
    hippopotomonstrosesquippedaliophobia: 6,
    is: 0,
    the: 0,
    fear: 0,
    of: 0,
    long: 0,
    words: 0,
  }
);
console.log(
  findOccurrences(
    'Some writers believe longs sentences are simply made by coupling clauses with the word and. This is called polysyndeton, and yes, it is one of twelve literary devices you can use to take charge of your boring writing. But its a cheap way to get a long sentence.',
    's'
  ),
  {
    some: 1,
    writers: 1,
    believe: 0,
    longs: 1,
    sentences: 2,
    are: 0,
    simply: 1,
    made: 0,
    by: 0,
    coupling: 0,
    clauses: 2,
    with: 0,
    the: 0,
    word: 0,
    'and.': 0,
    this: 1,
    is: 1,
    called: 0,
    'polysyndeton,': 1,
    and: 0,
    'yes,': 1,
    it: 0,
    one: 0,
    of: 0,
    twelve: 0,
    literary: 0,
    devices: 1,
    you: 0,
    can: 0,
    use: 1,
    to: 0,
    take: 0,
    charge: 0,
    your: 0,
    boring: 0,
    'writing.': 0,
    but: 0,
    its: 1,
    a: 0,
    cheap: 0,
    way: 0,
    get: 0,
    long: 0,
    'sentence.': 1,
  }
);
console.log(
  findOccurrences(
    'i wrote code to give me these long long long long long sentences',
    'l'
  ),
  {
    i: 0,
    wrote: 0,
    code: 0,
    to: 0,
    give: 0,
    me: 0,
    these: 0,
    long: 1,
    sentences: 0,
  }
);
console.log(
  findOccurrences(
    'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa a spider',
    'a'
  ),
  {
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa: 133,
    a: 1,
    spider: 0,
  }
);
console.log(findOccurrences('she sell sea shells on the sea shore', 's'), {
  she: 1,
  sell: 1,
  sea: 1,
  shells: 2,
  on: 0,
  the: 0,
  shore: 1,
});
console.log(
  findOccurrences(
    'Woah, I just realised, that I could, use this, to find, punctuation also.',
    ','
  ),
  {
    'woah,': 1,
    i: 0,
    just: 0,
    'realised,': 1,
    that: 0,
    'could,': 1,
    use: 0,
    'this,': 1,
    to: 0,
    'find,': 1,
    punctuation: 0,
    'also.': 0,
  }
);
