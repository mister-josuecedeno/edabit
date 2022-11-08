// https://edabit.com/challenge/4d4RamC7mArPEwHpX

// Refactor

const season = ['Spring', 'Summer', 'Autumn', 'Winter'];
const month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const location = ['N', 'S'];

const hemisphereSeason = (hemisphere, date) => {
  const seasons = {
    dateRange: [
      [2, 4],
      [5, 7],
      [8, 10],
      [11, 1],
    ],
    seasonByHemisphere: [
      [0, 2],
      [1, 3],
      [2, 0],
      [3, 1],
    ],
  };

  return false;
};

// Tests

console.log(hemisphereSeason('N', 'June, 30'), 'Summer', 'Example #1');
console.log(hemisphereSeason('N', 'March, 1'), 'Spring', 'Example #2');
console.log(hemisphereSeason('S', 'September, 22'), 'Spring', 'Example #3');
console.log(hemisphereSeason('S', 'April, 20'), 'Autumn');
console.log(hemisphereSeason('N', 'November, 20'), 'Autumn');
console.log(hemisphereSeason('S', 'May, 8'), 'Autumn');
console.log(hemisphereSeason('N', 'February, 28'), 'Winter');
console.log(hemisphereSeason('S', 'August, 6'), 'Winter');
console.log(hemisphereSeason('N', 'July, 28'), 'Summer');
console.log(hemisphereSeason('S', 'October, 12'), 'Spring');
console.log(hemisphereSeason('N', 'December, 31'), 'Winter');
console.log(hemisphereSeason('S', 'January, 2'), 'Summer');
