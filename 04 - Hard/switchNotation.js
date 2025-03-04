// https://edabit.com/challenge/ufYYJX5CsmSbXazcr

const getNormal = (num) => { return; }
const getTally = (num) => { return; }

const switchNotation = (scores, desired_notation) => {
  return;
}

// Tests

console.log(switchNotation([3, 55, 55551], 'normal'), [3, 10, 21])
console.log(switchNotation([553, 55, 51], 'normal'), [13, 10, 6])
console.log(switchNotation([51], 'normal'), [6])
console.log(switchNotation([555, 55, 5], 'normal'), [15, 10, 5])
console.log(switchNotation([15, 29, 5, 3], 'tally'), [555, 555554, 5, 3])
console.log(switchNotation([3, 8, 8, 6], 'tally'), [3, 53, 53, 51])
console.log(switchNotation([3, 44, 8, 21], 'tally'), [3, 555555554, 53, 55551])