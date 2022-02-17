const retrieve = (str) => {
  const regex = /\b[aeiou][a-z]{0,}/gi;
  return str === '' ? [] : str.toLowerCase().match(regex);
};

// Tests

console.log(retrieve('A simple life is a happy life for me.'), [
  'a',
  'is',
  'a',
]);
console.log(retrieve('Exercising is a healthy way to burn off energy.'), [
  'exercising',
  'is',
  'a',
  'off',
  'energy',
]);
console.log(retrieve('The poor ostrich was ostracized.'), [
  'ostrich',
  'ostracized',
]);
console.log(retrieve(''), []);
