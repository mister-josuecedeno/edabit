const chemicalReactions = (carbon, hydrogen, oxygen) => {
  const h2o = Math.min(Math.floor(hydrogen / 2), oxygen);
  hydrogen -= h2o * 2;
  oxygen -= h2o;

  const co2 = Math.min(Math.floor(oxygen / 2), carbon);
  oxygen -= oxygen * 2;
  carbon -= co2;

  const ch4 = Math.min(Math.floor(hydrogen / 4), carbon);
  hydrogen -= hydrogen * 4;
  carbon -= ch4;

  return [h2o, co2, ch4];
};

// Tests

console.log(chemicalReactions(45, 11, 100), [5, 45, 0]);
console.log(chemicalReactions(354, 1023230, 0), [0, 0, 354]);
console.log(chemicalReactions(939, 3, 694), [1, 346, 0]);
console.log(chemicalReactions(215, 41, 82100), [20, 215, 0]);
console.log(chemicalReactions(113, 0, 52), [0, 26, 0]);
