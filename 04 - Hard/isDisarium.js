const isDisarium = (n) => {
  return (
    [...`${n}`].map((d, i) => d ** (i + 1)).reduce((acc, cv) => acc + cv, 0) ===
    n
  );
};

// Tests

let [numVector, resVector] = [
  [6, 75, 135, 466, 372, 175, 1, 696, 876, 89, 518, 598],
  [true, false, true, false, false, true, true, false, false, true, true, true],
];
for (let i in numVector) console.log(isDisarium(numVector[i]), resVector[i]);
