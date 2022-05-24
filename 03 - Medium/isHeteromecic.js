const isHeteromecic = (n) => {
  for (let i = 0; i <= n; i++) {
    if (i * (i + 1) === n) return true;
  }

  return false;
};

// Tests

let [numVector, resVector] = [
  [0, 2, 7, 110, 136, 156, 182, 218, 250, 272, 306, 362, 380, 422, 462, 600],
  [
    true,
    true,
    false,
    true,
    false,
    true,
    true,
    false,
    false,
    true,
    true,
    false,
    true,
    false,
    true,
    true,
  ],
];
for (let i in numVector) console.log(isHeteromecic(numVector[i]), resVector[i]);
