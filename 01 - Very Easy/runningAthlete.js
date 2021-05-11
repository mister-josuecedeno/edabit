function runningAthlete(act, txt) {
  txt = txt.split('');
  for (let i = 0; i < act.length; ++i) {
    if (act[i] == 'run' && txt[i] == '|') txt[i] = '/';
    if (act[i] == 'jump' && txt[i] == '_') txt[i] = 'x';
  }
  return txt.join('');
}

// Tests
console.log(
  runningAthlete(['run', 'jump', 'run', 'jump', 'run'], '_|_|_'),
  '_|_|_'
);
console.log(
  runningAthlete(['run', 'jump', 'run', 'run', 'run'], '_|_|_'),
  '_|_/_'
);
console.log(
  runningAthlete(['run', 'run', 'run', 'run', 'run'], '_|_|_'),
  '_/_/_'
);
console.log(
  runningAthlete(['jump', 'jump', 'jump', 'jump', 'jump'], '_|_|_'),
  'x|x|x'
);
console.log(
  runningAthlete(['jump', 'run', 'jump', 'run', 'jump'], '_|_|_'),
  'x/x/x'
);
console.log(
  runningAthlete(
    ['run', 'run', 'run', 'run', 'run', 'run', 'run', 'run', 'run', 'run'],
    '||||||||||'
  ),
  '//////////'
);
console.log(
  runningAthlete(
    [
      'jump',
      'jump',
      'jump',
      'jump',
      'jump',
      'jump',
      'jump',
      'jump',
      'jump',
      'jump',
    ],
    '__________'
  ),
  'xxxxxxxxxx'
);
