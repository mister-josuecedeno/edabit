// https://edabit.com/challenge/skaEqSDppmQqApNQu

const toStarShorthand = (str) => {
  // Character Map
  const charMap = {};

  for (const char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
};

// Tests

console.log(toStarShorthand('abbccc'), 'ab*2c*3');
console.log(toStarShorthand('haaaappyyyyy'), 'ha*4p*2y*5');
console.log(toStarShorthand('77777geff'), '7*5gef*2');
console.log(toStarShorthand('11223344'), '1*22*23*24*2');
console.log(toStarShorthand('abc'), 'abc');
console.log(toStarShorthand(''), '');
