const dance = (dancers, position) => {
  const genders = {
    women: 0,
    men: 1,
  };

  const who = genders[position];
  const end = dancers.length - 1;

  const reverse = dancers.map((dancer) => dancer[who]).reverse();

  dancers.forEach((dancer, i) => (dancer[who] = reverse[i]));

  return dancers;
};

// Tests

console.log(
  dance(
    [
      ['Ana', 'Mark'],
      ['Lisa', 'John'],
    ],
    'women'
  ),
  [
    ['Lisa', 'Mark'],
    ['Ana', 'John'],
  ]
);
console.log(
  dance(
    [
      ['Ana', 'Bob'],
      ['Amy', 'Josh'],
      ['Catty', 'Mark'],
    ],
    'men'
  ),
  [
    ['Ana', 'Mark'],
    ['Amy', 'Josh'],
    ['Catty', 'Bob'],
  ]
);
console.log(
  dance(
    [
      ['Ana', 'Bob'],
      ['Amy', 'Josh'],
      ['Catty', 'Mark'],
    ],
    'women'
  ),
  [
    ['Catty', 'Bob'],
    ['Amy', 'Josh'],
    ['Ana', 'Mark'],
  ]
);
console.log(
  dance(
    [
      ['w1', 'm1'],
      ['w2', 'm2'],
      ['w3', 'm3'],
      ['w4', 'm4'],
      ['w5', 'm5'],
      ['w6', 'm6'],
    ],
    'men'
  ),
  [
    ['w1', 'm6'],
    ['w2', 'm5'],
    ['w3', 'm4'],
    ['w4', 'm3'],
    ['w5', 'm2'],
    ['w6', 'm1'],
  ]
);
console.log(
  dance(
    [
      ['w1', 'm1'],
      ['w2', 'm2'],
      ['w3', 'm3'],
      ['w4', 'm4'],
      ['w5', 'm5'],
      ['w6', 'm6'],
    ],
    'women'
  ),
  [
    ['w6', 'm1'],
    ['w5', 'm2'],
    ['w4', 'm3'],
    ['w3', 'm4'],
    ['w2', 'm5'],
    ['w1', 'm6'],
  ]
);
