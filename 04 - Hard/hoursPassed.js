//https://edabit.com/challenge/CFszCxtcmqAsgZdw8

const getHours = (time) => {
  const timeOfDay = time.slice(-2);
  const hour = time.split(':')[0];

  if (timeOfDay == 'AM' && hour == 12) return 0;

  return timeOfDay == 'AM' ? +hour : +hour + 12;
};

const hoursPassed = (t1, t2) => {
  if (t1 === t2) return 'no time passed';

  return `${getHours(t2) - getHours(t1)} hours`;
};

// Tests

let [strVector, resVector] = [
  [
    ['3:00 AM', '9:00 AM'],
    ['2:00 PM', '4:00 PM'],
    ['1:00 AM', '3:00 PM'],
    ['2:00 AM', '3:00 PM'],
    ['8:00 AM', '8:00 PM'],
    ['12:00 AM', '10:00 PM'],
    ['1:00 AM', '1:00 AM'],
    ['12:00 PM', '12:00 PM'],
  ],
  [
    '6 hours',
    '2 hours',
    '14 hours',
    '13 hours',
    '12 hours',
    '22 hours',
    'no time passed',
    'no time passed',
  ],
];
for (let i in strVector)
  console.log(hoursPassed(...strVector[i]), resVector[i]);
