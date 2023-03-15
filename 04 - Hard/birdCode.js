// https://edabit.com/challenge/MDixWSYxH5JZX3xo3

const getCode = (name) => {
  // remove hyphens
  name = name.replace('-', ' ');
  words = name.split(' ').map((w) => w.toUpperCase());

  // use switch for the different rules
  switch (words.length) {
    case 1:
      return words[0].slice(0, 4);
    case 2:
      return words[0].slice(0, 2) + words[1].slice(0, 2);
    case 3:
      return words[0].slice(0, 3) + words[1].slice(0, 3) + words[2].slice(0, 2);
    case 4:
      return words.map((w) => w[0]).join('');
    default:
      break;
  }
};

const birdCode = (arr) => {
  return getCode('test two three four');
};

// Tests

console.log(birdCode(['Common Tern', 'Black-Capped Chickadee']), [
  'COTE',
  'BCCH',
]);
console.log(
  birdCode([
    'American Redstart',
    'Northern Cardinal',
    'Pine Grosbeak',
    'Barred Owl',
    'Starling',
    "Cooper's Hawk",
    'Pigeon',
  ]),
  ['AMRE', 'NOCA', 'PIGR', 'BAOW', 'STAR', 'COHA', 'PIGE']
);
console.log(
  birdCode([
    'Great Crested Flycatcher',
    'Bobolink',
    'American White Pelican',
    'Red-Tailed Hawk',
    'Eastern Screech Owl',
    'Blue Jay',
  ]),
  ['GCFL', 'BOBO', 'AWPE', 'RTHA', 'ESOW', 'BLJA']
);
console.log(
  birdCode([
    'Black-Crowned Night Heron',
    'Northern Mockingbird',
    'Eastern Meadowlark',
    'Dark-Eyed Junco',
    'Red-Bellied Woodpecker',
  ]),
  ['BCNH', 'NOMO', 'EAME', 'DEJU', 'RBWO']
);
console.log(
  birdCode([
    'Scarlet Tanager',
    'Great Blue Heron',
    'Eastern Phoebe',
    'American Black Duck',
    'Mallard',
    'Canvasback',
    'Merlin',
    'Ovenbird',
  ]),
  ['SCTA', 'GBHE', 'EAPH', 'ABDU', 'MALL', 'CANV', 'MERL', 'OVEN']
);
console.log(
  birdCode([
    'Fox Sparrow',
    'White-Winged Crossbill',
    'Veery',
    'American Coot',
    'Sora',
    'Northern Rough-Winged Swallow',
    'Purple Martin',
  ]),
  ['FOSP', 'WWCR', 'VEER', 'AMCO', 'SORA', 'NRWS', 'PUMA']
);
