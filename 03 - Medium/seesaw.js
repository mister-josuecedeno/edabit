// set-up
const seesaw = (n) => {
  // odd ignore the middle number (remove)
  // even split
  return;
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
