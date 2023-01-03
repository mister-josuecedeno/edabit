// https://edabit.com/challenge/i5ZanfQWsJ8EGheW8

// refactor - where to truncate
const lengthen = (s1, s2) => {
  const div = s1.length / s2.length;
  const repeat = s2.repeat(Math.ceil(div));
  return [div, repeat];
};

// Tests

console.log(lengthen('abcdefg', 'ab'), 'abababa');
console.log(lengthen('ingenius', 'forest'), 'forestfo');
console.log(lengthen('skipping', 'clap'), 'clapclap');
console.log(lengthen('k', 'champagne'), 'kkkkkkkkk');
console.log(lengthen('DUH', 'champagne'), 'DUHDUHDUH');
