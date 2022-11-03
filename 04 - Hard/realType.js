// https://edabit.com/challenge/yfRLRFYF8sdr7kRRq

// Refactor

const realType = (value) => {
  if (value instanceof Date) return 'date';
  if (value instanceof RegExp) return 'regexp';
  if (value === null) return 'null';
  return typeof value;
};

// Tests

const values = [
  [],
  {},
  '',
  1,
  function () {},
  new RegExp(),
  true,
  null,
  undefined,
  Date,
  new Date(),
  NaN,
  Infinity,
  Error,
  new Error(),
  new String(),
  new Number(),
  0xff,
];
const answers = [
  'array',
  'object',
  'string',
  'number',
  'function',
  'regexp',
  'boolean',
  'null',
  'undefined',
  'function',
  'date',
  'number',
  'number',
  'function',
  'error',
  'string',
  'number',
  'number',
];

for (var i = 0; i < values.length; i++) {
  console.log(realType(values[i]), answers[i]);
}
