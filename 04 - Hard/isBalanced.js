// https://edabit.com/challenge/6NSvSLWWix84rRqpD

const isBalanced = (str) => {
  return;
};

// Tests

console.log(isBalanced('()'), true);
console.log(isBalanced('{[()]}'), true);
console.log(isBalanced('{{[[(())]]}}'), true);
console.log(isBalanced('{{[[(())[]]]}}'), true);
console.log(isBalanced('[()]{}{[()()]()}'), true);
console.log(isBalanced('{[([)]]}'), false);
console.log(isBalanced('{[('), false);
console.log(isBalanced('])}'), false);
console.log(isBalanced('[[]'), false);
console.log(isBalanced('{)(}'), false);
console.log(isBalanced('{{[[([())]]]}}'), false);
console.log(isBalanced(), undefined);
