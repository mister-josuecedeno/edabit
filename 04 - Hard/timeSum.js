// https://edabit.com/challenge/BP82XMfoRoREMRxLw

const parseString = (str) => {
  const [h, m, s] = str.split(':');
  return [+h, +m, +s];
};

const distributeTime = (time) => {
  [h, m, s] = time;

  // if > 60, add minutes
  m += Math.floor(s / 60);
  s = s % 60;

  // if > 60, add hours
  h += Math.floor(m / 60);
  m = m % 60;

  return [h, m, s];
};

const timeSum = (times) => {
  let h = 0;
  let m = 0;
  let s = 0;

  const numbers = times.map((t) => parseString(t));
  numbers.forEach((n) => {
    h += n[0];
    m += n[1];
    s += n[2];
  });

  return distributeTime([h, m, s]);
};

// Tests

console.log(timeSum([]), [0, 0, 0], 'Should work with an empty array');
console.log(
  timeSum(['1:23:45']),
  [1, 23, 45],
  'Should work with a single time'
);
console.log(
  timeSum(['1:03:45', '1:23:05']),
  [2, 26, 50],
  'Should work with leading zeroes in minutes/seconds'
);
console.log(
  timeSum(['1:23:45', '0:00:00']),
  [1, 23, 45],
  'Should not break if a value is 0:00:00'
);
console.log(
  timeSum([
    '18:54:02',
    '0:26:28',
    '11:48:22',
    '22:26:16',
    '7:17:05',
    '8:01:44',
    '0:35:24',
    '16:25:11',
    '9:11:24',
    '18:30:46',
    '3:31:51',
    '16:55:32',
    '17:59:00',
    '11:29:30',
    '3:19:58',
    '9:12:27',
    '22:03:34',
    '1:06:12',
    '0:44:07',
    '4:47:46',
    '10:38:00',
    '14:26:51',
    '10:09:07',
    '5:08:29',
    '5:29:57',
    '22:15:03',
    '20:52:28',
    '8:42:20',
    '17:36:32',
    '9:36:17',
  ]),
  [329, 41, 43],
  'Should work with large arrays totaling more than 60 hours'
);
console.log(timeSum(['5:39:42', '10:02:08', '8:26:33']), [24, 8, 23]);
console.log(
  timeSum(['10:11:02', '8:57:30', '10:58:56', '4:04:17', '3:01:13']),
  [37, 12, 58]
);
console.log(
  timeSum([
    '10:39:35',
    '11:33:23',
    '2:34:52',
    '9:17:09',
    '4:41:57',
    '3:34:19',
    '1:31:26',
    '4:06:01',
  ]),
  [47, 58, 42]
);
