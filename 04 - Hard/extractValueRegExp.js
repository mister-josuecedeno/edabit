// https://edabit.com/challenge/ZqLdW8smjmTQcLyHc

const extractValueRegExp = (val1, val2) => {
  return new RegExp(`((?<=${val1}).+)(?=${val2})`);
};

// Tests

console.log('Checking for lookbehind');
console.log(
  /\(\?\<\=/.test(extractValueRegExp.toString()),
  true,
  'you have to use positive lookbehind'
);
console.log('Checking for lookahead');
console.log(
  /\(\?\=/.test(extractValueRegExp.toString()),
  true,
  'you have to use positive lookahead'
);
console.log(
  'This is what you have become!'.match(
    extractValueRegExp('This is what ', ' have become.')
  )[0],
  'you'
);
console.log(
  'We are at the Zoo'.match(extractValueRegExp('We ', ' at the Zoo'))[0],
  'are'
);
console.log(
  'I want a Lollipop'.match(extractValueRegExp('want ', ' Lollipop'))[0],
  'a'
);
console.log(
  'The red Car is fast'.match(extractValueRegExp('The red Car is ', ''))[0],
  'fast'
);
console.log(
  'I was a fast learner too, but then i started doing heroin'.match(
    extractValueRegExp('I was a fast ', ' too, but then i started doing heroin')
  )[0],
  'learner'
);
