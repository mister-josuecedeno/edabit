const seesaw = (n = 0) => {
  let str = `${n}`;
  if (str.length === 1 || n === 0) return 'balanced';

  const sum = (str) => [...str].reduce((acc, cv) => acc + +cv, 0);

  let middle = Math.floor(str.length / 2);
  let left = sum(str.slice(0, middle));
  let right = sum(str.slice(-middle));

  return left > right ? 'left' : right > left ? 'right' : 'balanced';
};

// Tests

console.log(seesaw(3449), 'right');
console.log(seesaw(1143113), 'left');
console.log(seesaw(585585), 'balanced');
console.log(seesaw(11), 'balanced');
console.log(seesaw(111), 'balanced');
console.log(seesaw(1), 'balanced');
console.log(seesaw(5855), 'left');
console.log(seesaw(5558), 'right');
console.log(seesaw(null), 'balanced', 'Return balanced when null.');
console.log(seesaw(undefined), 'balanced', 'Return balanced when undefined.');
