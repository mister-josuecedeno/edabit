const hoursPassed = (t1, t2) => {
  if (t1 == t2) return 'No time has passed.';

  const getHour = (time) => {
    let tod = time.split(' ').slice(-1);
    let hour = time.split(' ')[0].split(':')[0];

    if (tod == 'AM' && hour == 12) return 0;
    return tod == 'AM' ? hour : 12 + +hour;
  };

  return `${getHour(t2) - getHour(t1)} hours`;
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
    'No time has passed.',
    'No time has passed.',
  ],
];
for (let i in strVector)
  console.log(hoursPassed(...strVector[i]), resVector[i]);
