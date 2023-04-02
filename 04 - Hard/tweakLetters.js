// https://edabit.com/challenge/9bLHfb3wB8QCvtqWK

const tweakLetters = (str, arr) => {
  return [...str]
    .map((l, i) => {
      let current = l.charCodeAt() + arr[i];

      if (current < 'a'.charCodeAt()) {
        current = 'z'.charCodeAt() + 1 + arr[i];
      }

      if (current > 'z'.charCodeAt()) {
        current = 'a'.charCodeAt() - 1 + arr[i];
      }

      return String.fromCharCode(current);
    })
    .join('');
};

// Tests

console.log(tweakLetters('apple', [0, 1, -1, 0, -1]), 'aqold');
console.log(tweakLetters('many', [0, 0, 0, -1]), 'manx');
console.log(tweakLetters('rhino', [1, 1, 1, 1, 1]), 'sijop');
console.log(tweakLetters('xyz', [1, 1, 1]), 'yza');
console.log(tweakLetters('abc', [-1, -1, -1]), 'zab');
