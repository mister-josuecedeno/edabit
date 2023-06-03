// https://edabit.com/challenge/69t9okDM6RqXmK33F

// Not my solution
function chiSquaredTest(data) {
  let [a, b] = data['E'];
  let [c, d] = data['T'];
  let chi = Number(
    (
      ((a * d - b * c) ** 2 * (a + b + c + d)) /
      ((a + b) * (c + d) * (b + d) * (a + c))
    ).toFixed(1)
  );

  if (chi <= 3.841) return [chi, 'Edabitin is ininfluent'];
  return [chi, `Edabitin effectiveness = ${chi > 6.635 ? 99 : 95}%`];
}

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
