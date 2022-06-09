const censorString = (str, arr, char) => {
  let censored = str;

  arr.forEach((word) => {
    censored = censored.replace(word, char.repeat(word.length));
  });

  return censored;
};

// Tests

console.log(
  censorString('The cow jumped over the moon.', ['cow', 'over'], '*'),
  'The *** jumped **** the moon.'
);
console.log(
  censorString(
    'Why do my cats keep eating grass?',
    ['Why', 'keep', 'eating'],
    '!'
  ),
  '!!! do my cats !!!! !!!!!! grass?'
);
console.log(
  censorString(
    'How do I stop myself from using python!?',
    ['do', 'stop', 'using'],
    '-'
  ),
  'How -- I ---- myself from ----- python!?'
);
console.log(
  censorString(
    'If statements are pretty fun to use.',
    ['statements', 'pretty', 'to'],
    '~~'
  ),
  'If ~~~~~~~~~~~~~~~~~~~~ are ~~~~~~~~~~~~ fun ~~~~ use.'
);
console.log(
  censorString(
    "I'm dyslexic, but that deos'tn matter!",
    ['that', 'matter!'],
    '?'
  ),
  "I'm dyslexic, but ???? deos'tn ???????"
);
console.log(
  censorString(
    'I should be doing work but I am doing this instead.',
    ['should', 'but', 'this'],
    '*'
  ),
  'I ****** be doing work *** I am doing **** instead.'
);
