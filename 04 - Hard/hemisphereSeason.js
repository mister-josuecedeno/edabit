// https://edabit.com/challenge/4d4RamC7mArPEwHpX

const seasons = ['Spring', 'Summer', 'Autumn', 'Winter'];

const seasonByMonth = {
  January: [3, 1],
  February: [3, 1],
  March: [0, 2],
  April: [0, 2],
  May: [0, 2],
  June: [1, 3],
  July: [1, 3],
  August: [1, 3],
  September: [2, 0],
  October: [2, 0],
  November: [2, 0],
  December: [3, 1],
};

const hemisphereSeason = (hemisphere, date) => {
  const month = date.split(',')[0];
  const location = hemisphere === 'N' ? 0 : 1;
  return seasons[seasonByMonth[month][location]];
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
