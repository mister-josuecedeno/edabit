const isApocalyptic = (number) => {
  const options = {
    0: 'Safe',
    1: 'Single',
    2: 'Double',
    3: 'Triple',
  };

  const regex = /666/g;
  const n = BigInt(Math.pow(2, number)).toString();
  return options[(n.match(regex) || []).length];
};

// Tests

console.log(isApocalyptic(66), 'Safe', 'Example #1');
console.log(isApocalyptic(157), 'Single', 'Example #2');
console.log(isApocalyptic(220), 'Double', 'Example #3');
console.log(isApocalyptic(931), 'Triple', 'Example #4');
console.log(isApocalyptic(166), 'Safe');
console.log(isApocalyptic(529), 'Double');
console.log(isApocalyptic(443), 'Single');
console.log(isApocalyptic(166), 'Safe');
console.log(isApocalyptic(703), 'Safe');
console.log(isApocalyptic(528), 'Single');
console.log(isApocalyptic(648), 'Double');
