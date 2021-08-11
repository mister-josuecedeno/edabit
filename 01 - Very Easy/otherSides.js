const otherSides = (length) => {
  let hyp = length * 2;
  let other = (length * Math.sqrt(3)).toFixed(2);
  return [hyp, +other];
};

// Tests

console.log(otherSides(1), [2, 1.73]);
console.log(otherSides(2), [4, 3.46]);
console.log(otherSides(3), [6, 5.2]);
console.log(otherSides(7), [14, 12.12]);
// Most frequently asked question in SAT MATH section.
