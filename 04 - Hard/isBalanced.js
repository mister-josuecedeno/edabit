// https://edabit.com/challenge/6NSvSLWWix84rRqpD

// Solution (not mine)
const isBalanced = (s) =>
  s === undefined
    ? s
    : /\(\)|\[\]|{}/.test(s)
    ? isBalanced(s.replace(/\(\)|\[\]|{}/g, ''))
    : !s.length;

const _isBalanced = (str) => {
  if (str === undefined) return undefined;
  if (str.length % 2 != 0) return false;

  const arr = [...str];
  const match = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  while (arr.length > 0) {
    let start = arr.shift();
    let end = arr.indexOf(match[start]);
    if (end === -1) return false;
    arr.splice(end, 1);
  }
  return true;
};

// Tests

// console.log(isBalanced('()'), true);
// console.log(isBalanced('{[()]}'), true);
// console.log(isBalanced('{{[[(())]]}}'), true);
// console.log(isBalanced('{{[[(())[]]]}}'), true);
// console.log(isBalanced('[()]{}{[()()]()}'), true);
console.log(isBalanced('{[([)]]}'), false);
// console.log(isBalanced('{[('), false);
// console.log(isBalanced('])}'), false);
// console.log(isBalanced('[[]'), false);
// console.log(isBalanced('{)(}'), false);
// console.log(isBalanced('{{[[([())]]]}}'), false);
// console.log(isBalanced(), undefined);
