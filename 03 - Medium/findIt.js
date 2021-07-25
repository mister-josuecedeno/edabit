const proper = (word) => {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
};

const findIt = (obj, name) => {
  const result = obj[name] ? 'gone...' : 'here!';
  return `${proper(name)} is ${result}`;
};

// Tests

console.log(findIt({}, 'rambo'), 'Rambo is here!');
console.log(findIt({}, 'heman'), 'Heman is here!');

console.log(
  findIt(
    {
      tv: 30,
      stereo: 50,
    },
    'rocky'
  ),
  'Rocky is here!'
);

console.log(
  findIt(
    {
      tv: 30,
      stereo: 50,
    },
    'spiderman'
  ),
  'Spiderman is here!'
);

console.log(
  findIt(
    {
      tv: 30,
      stereo: 50,
      julius: 100,
    },
    'julius'
  ),
  'Julius is gone...'
);

console.log(
  findIt(
    {
      tv: 30,
      stereo: 50,
      batman: 200,
    },
    'batman'
  ),
  'Batman is gone...'
);
