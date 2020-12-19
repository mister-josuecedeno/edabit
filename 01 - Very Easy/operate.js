// Some basic arithmetic operators are +, -, *, /, and %.
// In this challenge you will be given three parameters,
// num1, num2, and an operator. Use the operator on number 1 and 2.

// Key terms:
// Template literal
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

// Eval
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
// Warning: Executing JavaScript from a string is an enormous security risk. It is far too easy for a bad actor to run arbitrary code when you use eval(). See Never use eval()!, below.

// Solution
const operate = (num1, num2, operator) => {
  return eval(`${num1} ${operator} ${num2}`); // Template literal, eval (security risk)
};

// Tests
console.log(operate(1, 1, '+'), 2);
console.log(operate(1, 1, '-'), 0);
console.log(operate(1, 1, '*'), 1);
console.log(operate(1, 1, '/'), 1);
console.log(operate(1, 1, '%'), 0);
console.log(operate(2, 1, '+'), 3);
console.log(operate(2, 1, '-'), 1);
console.log(operate(2, 1, '*'), 2);
console.log(operate(2, 1, '/'), 2);
console.log(operate(2, 1, '%'), 0);
