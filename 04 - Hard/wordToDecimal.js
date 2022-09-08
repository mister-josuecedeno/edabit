// https://edabit.com/challenge/fxMe9pKFgfHgujahQ

// Solution

const wordToDecimal = (word) => {
  let base = [...word.toLowerCase()].sort()[word.length - 1];
  return parseInt(word, base.charCodeAt(0) - 86);
};

/*
const getPosition = (letter) => {
  return letter.charCodeAt() - 96;
};

const wordToDecimal = (word) => {
  return [...word.toLowerCase()].map((l) => getPosition(l));
};
*/

// Tests

console.log(wordToDecimal('Edabit'), 351010469, 'Example #1');
console.log(wordToDecimal('JavaScript'), 680575028284221, 'Example #2');
console.log(wordToDecimal('ZERO'), 1652100, 'Example #3');
console.log(wordToDecimal('oNe'), 15589);
console.log(wordToDecimal('TwO'), 32661);
console.log(wordToDecimal('THRee'), 23973734);
console.log(wordToDecimal('Four'), 470886);
console.log(wordToDecimal('fIVe'), 510958);
console.log(wordToDecimal('SIx'), 33013);
console.log(wordToDecimal('seven'), 29851095);
console.log(wordToDecimal('eigHt'), 11840939);
