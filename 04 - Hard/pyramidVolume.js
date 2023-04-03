// https://edabit.com/challenge/ii4ANncEGP4xjmQ5Y

const pyramidVolume = (length, width, height, unit) => {
  let vol = (1 / 3) * length * width * height;
  if (unit === 'centimeters') vol *= Math.pow(10, 6);
  if (unit === 'kilometers') vol /= Math.pow(10, 9);
  if (unit === 'millimeters') vol *= Math.pow(10, 9);
  return `${vol.toFixed(3)} cubic ${unit}`;
};

// Tests
console.log(pyramidVolume(10, 14, 6, 'meters'), '280.000 cubic meters');
console.log(
  pyramidVolume(8, 12, 2, 'centimeters'),
  '64000000.000 cubic centimeters'
);
console.log(
  pyramidVolume(92, 1245, 1923, 'kilometers'),
  '0.073 cubic kilometers'
);
console.log(
  pyramidVolume(19, 254, 21, 'millimeters'),
  '33782000000000.000 cubic millimeters'
);
console.log(pyramidVolume(13.6, 62.2, 6, 'meters'), '1691.840 cubic meters');
console.log(
  pyramidVolume(4230, 923, 1932, 'kilometers'),
  '2.514 cubic kilometers'
);

// Author : _3G_
