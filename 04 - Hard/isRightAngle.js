// https://edabit.com/challenge/LgD9W3uCRBXow6s5e

const isRightAngle = (arr, desc) => {
  return;
};

// Tests

console.log(isRightAngle([30, 60], 'angle'), true, 'Third angle may be 90');
console.log(
  isRightAngle([30, 60, 90], 'angle'),
  true,
  'An angle is 90 and adds to 180'
);
console.log(isRightAngle([90], 'angle'), true, 'An angle is 90');
console.log(isRightAngle([90, 90, 90], 'angle'), false, 'More than 180');
console.log(
  isRightAngle([20, 20, 20, 20], 'angle'),
  false,
  'More than 3 sides'
);
console.log(
  isRightAngle([], 'angle'),
  true,
  'No information, so it could be a right-angled triangle'
);
