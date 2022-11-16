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

// refactor - what to do when the number is greater than the aray length
const getDayOfWeek = (day, n) => {
  const currentIndex = daysOfTheWeek.indexOf(day);
  const newIndex = currentIndex + n;
  return [currentIndex, newIndex, daysOfTheWeek[newIndex]];
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
