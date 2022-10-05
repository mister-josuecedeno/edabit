// https://edabit.com/challenge/PcSNdgbfiDf9JYJjz

// Another solution that I like ...
// const lastNameLensort = names =>
// 	names.sort(function(a, b) {
//     x = a.split(' ')[1];
//     y = b.split(' ')[1];
//     return x.length === y.length ?
// 	  	x.localeCompare(y) : x.length - y.length;
// 	});

const compareNames = (a, b) => {
  const aLastName = a.split(' ')[1];
  const bLastName = b.split(' ')[1];

  if (aLastName.length < bLastName.length) return -1;
  if (aLastName.length > bLastName.length) return 1;

  if (aLastName.length === bLastName.length) {
    if (aLastName < bLastName) return -1;
    if (aLastName > bLastName) return 1;
    return 0;
  }

  return 0;
};

const lastNameLensort = (names) => {
  return names.sort(compareNames);
};

// Tests

console.log(
  lastNameLensort([
    'Jennifer Figueroa',
    'Heather Mcgee',
    'Amanda Schwartz',
    'Nicole Yoder',
    'Melissa Hoffman',
  ]),
  [
    'Heather Mcgee',
    'Nicole Yoder',
    'Melissa Hoffman',
    'Jennifer Figueroa',
    'Amanda Schwartz',
  ]
);
console.log(
  lastNameLensort([
    'Hitagi Senjougahara',
    'Edward Elric',
    'Light Yagami',
    'Rintaro Okabe',
    'Kurisu Makise',
  ]),
  [
    'Edward Elric',
    'Rintaro Okabe',
    'Kurisu Makise',
    'Light Yagami',
    'Hitagi Senjougahara',
  ]
);
