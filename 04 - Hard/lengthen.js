// https://edabit.com/challenge/i5ZanfQWsJ8EGheW8

const lengthen = (s1, s2) => {
  let longer = s1;
  let shorter = s2;

  if (s1.length < s2.length) {
    longer = s2;
    shorter = s1;
  }

  const div = longer.length / shorter.length;
  const repeat = shorter.repeat(Math.ceil(div));
  return repeat.slice(0, longer.length);
};

// Tests

console.log(lengthen('abcdefg', 'ab'), 'abababa');
console.log(lengthen('ingenius', 'forest'), 'forestfo');
console.log(lengthen('skipping', 'clap'), 'clapclap');
console.log(lengthen('k', 'champagne'), 'kkkkkkkkk');
console.log(lengthen('DUH', 'champagne'), 'DUHDUHDUH');
