// https://edabit.com/challenge/RdHCBE4GXzdAEFQug

const swap = (s) => {
  const [a, b, c, d] = [...s];
  return c + d + a + b;
};

const swapTwo = (s) => {
  if (s.length < 4) return s;
  const regex = /(.){4}/g;
  const match = s.match(regex);
  const swapped = match.map((c) => swap(c)).join('');
  const leftover =
    s.length % 4 !== 0 ? s.slice(-(s.length - swapped.length)) : '';
  return `${swapped}${leftover}`;
};

// Tests

console.log(swapTwo('ABCDEFGH'), 'CDABGHEF');
console.log(swapTwo('AABBCCDDEEFF'), 'BBAADDCCFFEE');
console.log(swapTwo('oompaloompa'), 'mpooooalmpa');
console.log(swapTwo('munchkins'), 'ncmuinhks');
console.log(swapTwo('FFGGHHI'), 'GGFFHHI');
console.log(swapTwo('FFG'), 'FFG');
console.log(swapTwo(''), '');
