// Jay and silent bob have been given a fraction of an ounce but
// they only understand grams. Convert a fraction passed as a
// string to grams with up to 2 decimal place

// an ounce weights 28 grams
// add the string "grams" to the end with a space.

// Examples
//  "half" == 14 grams
//   "eighth" == 3.5 grams

// Solution
const jayAndBob = (str) => {
  const bags = {
    half: 1 / 2,
    quarter: 1 / 4,
    eighth: 1 / 8,
    sixteenth: 1 / 16,
  };
  return `${bags[str] * 28} grams`;
};

// Tests
console.log(jayAndBob('half'), '14 grams');
console.log(jayAndBob('quarter'), '7 grams');
console.log(jayAndBob('eighth'), '3.5 grams');
console.log(jayAndBob('sixteenth'), '1.75 grams');
