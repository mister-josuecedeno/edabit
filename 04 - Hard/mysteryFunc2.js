// https://edabit.com/challenge/rbop9mHNAdCLwHK6n

const mysteryFunc = (n) => {
  const str = `${n}`;
  const pattern = /(\d)\1+|\d/g;
  const matches = str.match(pattern);
  return matches.map((n) => `${n.length}${n[0]}`).join('');
};

// Tests

console.log(mysteryFunc(15), '1115');
console.log(mysteryFunc(15212), '1115121112');
console.log(mysteryFunc(111111422), '611422');
console.log(mysteryFunc(1), '11');
console.log(mysteryFunc(513515), '151113151115');
console.log(mysteryFunc(666), '36');
console.log(mysteryFunc(69), '1619');
