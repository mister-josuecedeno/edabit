const areaOfHexagon = (x) => {
  if (x < 1) return null;
  let area = (3 * Math.sqrt(3) * Math.pow(x, 2)) / 2;
  return +area.toFixed(1);
};

// Tests

console.log(areaOfHexagon(1), 2.6);
console.log(areaOfHexagon(2), 10.4);
console.log(areaOfHexagon(3), 23.4);
console.log(areaOfHexagon(4), 41.6);
console.log(areaOfHexagon(5), 65);
console.log(areaOfHexagon(0), null);
console.log(areaOfHexagon(-1), null);
