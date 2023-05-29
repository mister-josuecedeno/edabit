// https://edabit.com/challenge/69t9okDM6RqXmK33F

const chiSquaredTest = (second) => {
  return;
};

// Tests

console.log(
  chiSquaredTest({ E: [207, 282], T: [231, 242] }),
  [4.1, 'Edabitin effectiveness = 95%'],
  'Instructions example'
);
console.log(chiSquaredTest({ E: [100, 50], T: [100, 20] }), [
  9.6,
  'Edabitin effectiveness = 99%',
]);
console.log(chiSquaredTest({ E: [90, 50], T: [80, 40] }), [
  0.2,
  'Edabitin is ininfluent',
]);
console.log(chiSquaredTest({ E: [366, 181], T: [249, 112] }), [
  0.4,
  'Edabitin is ininfluent',
]);
console.log(chiSquaredTest({ E: [112, 201], T: [77, 90] }), [
  4.9,
  'Edabitin effectiveness = 95%',
]);
console.log(chiSquaredTest({ E: [239, 198], T: [190, 100] }), [
  8.4,
  'Edabitin effectiveness = 99%',
]);
