// https://edabit.com/challenge/HwC7ryWNW6qvc5cN7

const parseLetter = (str) => {
  const regex = /[a-z]/g;
  let letter = str.match(regex).join('');
  return letter;
};

const sortByLetter = (arr) => {
  return arr.sort((a, b) => {
    a = parseLetter(a);
    b = parseLetter(b);
    return a.localeCompare(b);
  });
};

// Tests

console.log(sortByLetter(['932c', '832u32', '2344b']), [
  '2344b',
  '932c',
  '832u32',
]);
console.log(sortByLetter(['99a', '78b', 'c2345', '11d']), [
  '99a',
  '78b',
  'c2345',
  '11d',
]);
console.log(sortByLetter(['572z', '5y5', '304q2']), ['304q2', '5y5', '572z']);
console.log(sortByLetter([]), []);
