const everySome = (test, type, a, b, c, d, e) => {
  const variables = [a, b, c, d, e];

  if (type === 'everybody') {
    return variables.every((v) => eval(`${v} ${test}`));
  } else if (type === 'somebody') {
    return variables.some((v) => eval(`${v} ${test}`));
  }

  return false;
};

// Tests

console.log(
  everySome('>= 1', 'everybody', 1, 1, -1, 1, 1),
  false,
  'Example #1'
);
console.log(
  everySome('>= 1', 'somebody', -1, -1, -1, -1, 1),
  true,
  'Example #2'
);
console.log(
  everySome('< 4 / 2', 'everybody', 1, 2, 1, 2, 1, 0, -10),
  false,
  'Example #3'
);
console.log(
  everySome('!= 0', 'everybody', false, false, false, false, false),
  false
);
console.log(everySome('<= 10 * 2', 'somebody', 21, 68, 104, 20, 3), true);
console.log(
  everySome('!== 1', 'everybody', true, true, true, true, true),
  true
);
console.log(everySome('=== 9 % 9', 'somebody', 9, 1, 81, 218, 33), false);
