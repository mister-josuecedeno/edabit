// Solution
const microwaveButtons = (time) => {
  // minimum of 1 for 'start'
  if (time === '00:00') return 1;

  // :30 presses
  const [min, sec] = time.split(':');
  const totalSecs = min * 60 + +sec;
  const press30 = totalSecs / 30;
  const divBy30 = totalSecs % 30 === 0;

  // numbers to key in
  const numbers = parseInt(time.replace(':', '')).toString().length;

  return (divBy30 && press30 < numbers ? press30 : numbers) + 1;
};

// Tests
console.log(microwaveButtons('00:30'), 2);
console.log(microwaveButtons('00:70'), 3);
console.log(microwaveButtons('00:00'), 1);
console.log(microwaveButtons('01:00'), 3);
console.log(microwaveButtons('00:20'), 3);
