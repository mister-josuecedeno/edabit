// https://edabit.com/challenge/yfRLRFYF8sdr7kRRq

const realType = (value) => {
  const type = Object.prototype.toString.call(value);
  return type.split(' ')[1].slice(0, -1).toLowerCase();
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
