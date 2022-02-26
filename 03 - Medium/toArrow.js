const toArrow = (f) => {
  const arr = f.split(' ')[1];
  const name = arr.split('(')[0];
  const params = arr.split('(')[1].slice(0, -1);
  return `const ${name} = (${params}) =>`;
};

// Tests

console.log(toArrow(`function test(a) {}`), `const test = (a) =>`);
console.log(toArrow(`function twoArgs(a,b) {}`), `const twoArgs = (a,b) =>`);
console.log(
  toArrow(`function restArgs(...a) {}`),
  `const restArgs = (...a) =>`
);
console.log(
  toArrow(`function restArgsArg(...a,b) {}`),
  `const restArgsArg = (...a,b) =>`
);
console.log(
  toArrow(`function threeArgs(a,b,c) {}`),
  `const threeArgs = (a,b,c) =>`
);
