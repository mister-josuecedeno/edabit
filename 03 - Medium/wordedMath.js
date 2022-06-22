const wordedMath = (expr) => {
  const translate = {
    zero: 0,
    one: 1,
    two: 2,
    plus: '+',
    minus: '-',
  };

  const answers = {
    0: 'Zero',
    1: 'One',
    2: 'Two',
  };

  const formula = expr
    .split(' ')
    .map((w) => translate[w.toLowerCase()])
    .join('');
  return answers[eval(formula)];
};

// Tests

console.log(wordedMath('One plus one'), 'Two');
console.log(wordedMath('zero Plus one'), 'One');
console.log(wordedMath('one minus one'), 'Zero');
