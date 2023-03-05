// https://edabit.com/challenge/xE7TGwocj5YvnftCH

const numbers = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
};

const digitalVowelBan = (n, ban) => {
  return (
    +n
      .toString()
      .split('')
      .filter((n) => !numbers[n].includes(ban))
      .join('') || 'Banned Number'
  );
};

// Tests

console.log(digitalVowelBan(143, 'o'), 3, 'Example #1');
console.log(digitalVowelBan(14266330, 'e'), 4266, 'Example #2');
console.log(digitalVowelBan(4020, 'u'), 20, 'Example #3');
console.log(digitalVowelBan(586, 'i'), 'Banned Number', 'Example #4');
console.log(digitalVowelBan(123456789, 'i'), 12347);
console.log(digitalVowelBan(20442, 'o'), 'Banned Number');
console.log(digitalVowelBan(1100, 'u'), 1100);
console.log(digitalVowelBan(1993, 'e'), 'Banned Number');
console.log(digitalVowelBan(90160350102, 'e'), 62);
console.log(digitalVowelBan(79284426, 'o'), 7986);
console.log(digitalVowelBan(123456789, 'a'), 123456789, 'triviAl test');
