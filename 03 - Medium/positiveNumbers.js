const list = '23 -43 34 -44 45 -55 56';

const positiveNumbers = (numbers) => {
  const regex = /(?<!-)\d+/g;
  return numbers.match(regex);
};

console.log(positiveNumbers(list), ['23', '34', '45', '56']);
