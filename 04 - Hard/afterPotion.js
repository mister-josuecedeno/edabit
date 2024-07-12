// https://edabit.com/challenge/8L62AipTvCLPQKtFH

const afterPotion = (str) => {
  const isNumber = !isNaN(str) && !isNaN(parseFloat(str));
  if (isNumber) return str;

  const result = [];

  for (let i = 0; i < str.length; i++) {
    let current = str[i];
    let next = str[i + 1];
    if (current === 'A' || current === 'B') continue;
    if (next === 'A') current++;
    if (next === 'B') current--;
    result.push(current);
  }

  return result.join('');
};

// Tests

console.log(afterPotion('567'), '567', 'Should work without any potions.');
console.log(afterPotion('3A78B51'), '47751', 'Should work with both potions.');
console.log(afterPotion('9999B'), '9998');
console.log(afterPotion('9A123'), '10123');
console.log(afterPotion('1A2A3A4A'), '2345');
console.log(afterPotion('9B8B7B6A'), '8767');
