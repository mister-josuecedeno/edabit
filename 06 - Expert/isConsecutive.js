const isConsecutive = (numbers) => {
  // Use regex to create dynamic size groupings
  const getGroup = (size) => {
    let regex = new RegExp(`\\d{1,${size}}`, 'g');
    return numbers.match(regex);
  };

  const isCurrentConsecutive = (g) => {
    let current = +g[0];
    let next = +g[1];

    // Set direction
    let dir = current < next ? 'a' : 'd';

    for (let i = 0; i < g.length - 1; i++) {
      current = +g[i];
      next = +g[i + 1];

      if (dir === 'a') {
        if (next !== current + 1) return false;
      } else {
        if (next !== current - 1) return false;
      }
    }

    return true;
  };

  for (let i = 1; i < numbers.length; i++) {
    let group = getGroup(i);

    // Is each grouping the same length?
    let isSameLength = group.every((el) => el.length === group[0].length);
    if (isSameLength === false) continue;

    // Is the current grouping consecutive?
    if (isCurrentConsecutive(group)) {
      return true;
    }
  }
  return false;
};

// Tests
let [actualParam, expected] = [
  [
    '121314151617',
    '123124125',
    '667666',
    '23242526',
    '444445',
    '1234567',
    '123412351236',
    '57585960616263',
    '500001500002500003',
    '919920921',
    '12341235123612371238',
    '326325324323',
    '54321',
    '56555453',
    '32332432536',
    '2324256',
    '1235',
    '121316',
    '12131213',
    '90090190290',
    '35236237238',
    '999897959493',
    '171615141312119',
    '1716171819181920',
    '273274273274',
  ],
  [
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
];
for (let i in actualParam)
  console.log(isConsecutive(actualParam[i]), expected[i]);
