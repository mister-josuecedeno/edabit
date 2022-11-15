// https://edabit.com/challenge/fLDHdMhmaNEd528wB

const daysOfTheWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const getDayOfWeek = (day, n) => {
  return 'tbd';
};

const afterNDays = (days, n) => {
  return days.map((d) => getDayOfWeek(d, n));
};

// Tests

console.log(afterNDays(['Monday', 'Tuesday', 'Friday'], 1), [
  'Tuesday',
  'Wednesday',
  'Saturday',
]);
console.log(afterNDays(['Sunday', 'Sunday', 'Sunday'], 1), [
  'Monday',
  'Monday',
  'Monday',
]);
console.log(afterNDays(['Thursday', 'Monday'], 4), ['Monday', 'Friday']);
console.log(afterNDays(['Sunday'], 7), ['Sunday']);
console.log(afterNDays(['Monday', 'Friday', 'Wednesday'], 15), [
  'Tuesday',
  'Saturday',
  'Thursday',
]);
console.log(afterNDays(['Sunday', 'Tuesday'], 5), ['Friday', 'Sunday']);
console.log(afterNDays(['Saturday', 'Wednesday', 'Wednesday'], 10), [
  'Tuesday',
  'Saturday',
  'Saturday',
]);
