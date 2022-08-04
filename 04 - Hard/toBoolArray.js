// https://edabit.com/challenge/9JcSwa4dN5PEmdBEg

const toBoolArray = (word) => {
  return [...word].map((l) => l.charCodeAt(0) - 96).map((n) => n % 2 != 0);
};

// Tests

let [actualParam, expectedParam] = [
  [
    'charming',
    'exquisite',
    'admire',
    'deep',
    'loves',
    'tesh',
    'xavier',
    'adores',
    'tesha',
    'esquire',
    'randomize',
    'exotic',
  ],
  [
    [true, false, true, false, true, true, false, true],
    [true, false, true, true, true, true, true, false, true],
    [true, false, true, true, false, true],
    [false, true, true, false],
    [false, true, false, true, true],
    [false, true, true, false],
    [false, true, false, true, true, false],
    [true, false, true, false, true, true],
    [false, true, true, false, true],
    [true, true, true, true, true, false, true],
    [false, true, false, false, true, true, true, false, true],
    [true, false, true, false, true, true],
  ],
];
for (let i in actualParam)
  console.log(toBoolArray(actualParam[i]), expectedParam[i]);
