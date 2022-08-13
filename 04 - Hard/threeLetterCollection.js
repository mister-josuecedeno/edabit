// https://edabit.com/challenge/LoBo2DoWQuuzSr6Ft
const threeLetterCollection = (s) => {
  const result = [];

  if (s.length < 3) return result;

  for (let i = 0; i < s.length - 2; i++) {
    result.push(s.slice(i, i + 3));
  }

  return result.sort();
};

// Tests

console.log(threeLetterCollection('slap'), ['lap', 'sla']);
console.log(threeLetterCollection('click'), ['cli', 'ick', 'lic']);
console.log(threeLetterCollection('cat'), ['cat']);
console.log(threeLetterCollection('hi'), []);
console.log(threeLetterCollection('e'), []);
console.log(threeLetterCollection(''), []);
console.log(threeLetterCollection('programming'), [
  'amm',
  'gra',
  'ing',
  'min',
  'mmi',
  'ogr',
  'pro',
  'ram',
  'rog',
]);
console.log(threeLetterCollection('antidisestablishmentarianism'), [
  'abl',
  'ani',
  'ant',
  'ari',
  'bli',
  'dis',
  'ent',
  'est',
  'hme',
  'ian',
  'idi',
  'ise',
  'ish',
  'ism',
  'lis',
  'men',
  'nis',
  'nta',
  'nti',
  'ria',
  'ses',
  'shm',
  'sta',
  'tab',
  'tar',
  'tid',
]);
console.log(threeLetterCollection('zoology'), [
  'log',
  'ogy',
  'olo',
  'ool',
  'zoo',
]);
console.log(threeLetterCollection('assassination'), [
  'ass',
  'ass',
  'ati',
  'ina',
  'ion',
  'nat',
  'sas',
  'sin',
  'ssa',
  'ssi',
  'tio',
]);
console.log(threeLetterCollection('bookkeeper'), [
  'boo',
  'eep',
  'epe',
  'kee',
  'kke',
  'okk',
  'ook',
  'per',
]);
