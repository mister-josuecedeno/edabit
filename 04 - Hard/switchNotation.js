// https://edabit.com/challenge/ufYYJX5CsmSbXazcr

const getNormal = (num) => {
  let result = `${num}`.split('');
  let convert = result.reduce((acc, curr) => {
    return acc + parseInt(curr);
  }, 0);

  return convert;
}

const getTally = (num) => {
  let repeat = Math.floor(num / 5);
  let prefix = '5'.repeat(repeat);
  let suffix = num % 5;
  let result = suffix == 0 ? prefix : prefix + suffix;

  return parseInt(result);
}

const switchNotation = (scores, desired_notation) => {

  const result = [];

  for (let i = 0; i < scores.length; i++) {
    if (desired_notation === 'normal') {
      result.push(getNormal(scores[i]));
    }
    else {
      result.push(getTally(scores[i]));
    };
  }

  return result;
}

// Tests

console.log(switchNotation([3, 55, 55551], 'normal'), [3, 10, 21])
console.log(switchNotation([553, 55, 51], 'normal'), [13, 10, 6])
console.log(switchNotation([51], 'normal'), [6])
console.log(switchNotation([555, 55, 5], 'normal'), [15, 10, 5])
console.log(switchNotation([15, 29, 5, 3], 'tally'), [555, 555554, 5, 3])
console.log(switchNotation([3, 8, 8, 6], 'tally'), [3, 53, 53, 51])
console.log(switchNotation([3, 44, 8, 21], 'tally'), [3, 555555554, 53, 55551])