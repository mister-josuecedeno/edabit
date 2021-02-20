const sum = (arr) => {
  const regex = /-?[0-9]+/gi;
  return arr
    .flat(Infinity)
    .map((n) => (n.match(regex) ? n.match(regex) : 0))
    .flat(Infinity)
    .reduce((a, b) => a + +b, 0);
};

// Tests
let [actualParam, expectedParam] = [
  [
    ['1', 'five', '2wenty-one', 'thr33'],
    [
      ['1X2', 't3n'],
      ['1024', '5', '64'],
    ],
    [[['1'], '10v3'], ['738h'], [['s0'], ['1mu4ch3'], '-1s0']],
    [
      [
        ['0', '0x2', 'z3r1'],
        ['1', '55a46'],
      ],
      [
        ['1', '0b2', '4'],
        ['0x5fp-2', 'nine', '09'],
        ['4', '4', '4'],
      ],
      [['03']],
      [],
    ],
    [[[[[[[[[[[[[[[['-1', '1'], ['3'], [''], []]]]]]]]]]]]]]]],
    [[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]],
    [[[[[['-32-64', 'a-zA-Z'], ['01-1']]]]]],
  ],
  [36, 1099, 759, 142, 3, 0, -96],
];
for (let i in actualParam) console.log(sum(actualParam[i]), expectedParam[i]);
