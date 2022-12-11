// https://edabit.com/challenge/cEcDMjnmdnYYosHzQ

const arrow = (n) => {
  const arrows = [];

  for (let i = 1; i <= n; i++) {
    arrows.push('>'.repeat(i));
  }

  const reverse = [...arrows].reverse();

  return n % 2 === 0
    ? [...arrows, ...reverse]
    : [...arrows, ...reverse.slice(1)];
};

// Tests

console.log(arrow(3), ['>', '>>', '>>>', '>>', '>']);
console.log(arrow(4), ['>', '>>', '>>>', '>>>>', '>>>>', '>>>', '>>', '>']);
console.log(arrow(7), [
  '>',
  '>>',
  '>>>',
  '>>>>',
  '>>>>>',
  '>>>>>>',
  '>>>>>>>',
  '>>>>>>',
  '>>>>>',
  '>>>>',
  '>>>',
  '>>',
  '>',
]);
console.log(arrow(8), [
  '>',
  '>>',
  '>>>',
  '>>>>',
  '>>>>>',
  '>>>>>>',
  '>>>>>>>',
  '>>>>>>>>',
  '>>>>>>>>',
  '>>>>>>>',
  '>>>>>>',
  '>>>>>',
  '>>>>',
  '>>>',
  '>>',
  '>',
]);
console.log(arrow(9), [
  '>',
  '>>',
  '>>>',
  '>>>>',
  '>>>>>',
  '>>>>>>',
  '>>>>>>>',
  '>>>>>>>>',
  '>>>>>>>>>',
  '>>>>>>>>',
  '>>>>>>>',
  '>>>>>>',
  '>>>>>',
  '>>>>',
  '>>>',
  '>>',
  '>',
]);
console.log(arrow(10), [
  '>',
  '>>',
  '>>>',
  '>>>>',
  '>>>>>',
  '>>>>>>',
  '>>>>>>>',
  '>>>>>>>>',
  '>>>>>>>>>',
  '>>>>>>>>>>',
  '>>>>>>>>>>',
  '>>>>>>>>>',
  '>>>>>>>>',
  '>>>>>>>',
  '>>>>>>',
  '>>>>>',
  '>>>>',
  '>>>',
  '>>',
  '>',
]);