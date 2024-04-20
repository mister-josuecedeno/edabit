// https://edabit.com/challenge/LgD9W3uCRBXow6s5e

const isRightAngle = (arr, desc) => {
  if (arr.length == 0) return true;
  if (!(arr.length <= 3)) return false;

  if (desc == 'angle') {
    let totalAngle = arr.reduce((acc, cv) => acc + cv, 0);

    if (totalAngle > 180) return false;
    if (arr.length < 3 && 180 - totalAngle == 0) return false;

    if (180 - totalAngle >= 90) return true;
    if (arr.some((n) => n == 90) && totalAngle == 180) return true;
  }

  if (desc == 'side') {
    if (arr.length < 3) return true;
    arr.sort((a, b) => a - b);
    return arr[0] ** 2 + arr[1] ** 2 === arr[2] ** 2;
  }

  return false;
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
console.log(
  isRightAngle([90, 90], 'angle'),
  false,
  '3rd angle will go over 180'
);
console.log(isRightAngle([45, 46], 'angle'), false, '3rd angle must be 89');
console.log(isRightAngle([45, 46], 'side'), true, '3rd side could be 64.3506');
console.log(
  isRightAngle([4, 5, 6], 'side'),
  false,
  'Does not calculate correctly'
);
console.log(
  isRightAngle([], 'side'),
  true,
  'No information, so it could be a right-angled triangle'
);
console.log(isRightAngle([3, 4, 5], 'side'), true, 'Calculates correctly');
console.log(isRightAngle([60, 60, 60], 'angle'), false);
console.log(isRightAngle([177, 2, 1], 'angle'), false);
console.log(isRightAngle([20, 20, 20, 20], 'side'), false);
console.log(isRightAngle([43], 'angle'), true);
