const repeatString = (str, n) => {
  return typeof str === 'string' ? str.repeat(n) : 'Not A String !!';
};

// Tests
console.log(repeatString('Mubashir', 2), 'MubashirMubashir');
console.log(repeatString('Matt', 3), 'MattMattMatt');
console.log(repeatString(1990, 7), 'Not A String !!');
console.log(repeatString('*', 3), '***');
console.log(
  repeatString('Hello', 11),
  'HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello'
);
console.log(
  repeatString('243624', 22),
  '243624243624243624243624243624243624243624243624243624243624243624243624243624243624243624243624243624243624243624243624243624243624'
);
console.log(repeatString([], 3), 'Not A String !!');
console.log(repeatString({}, 3), 'Not A String !!');
console.log(repeatString(24, 3), 'Not A String !!');
console.log(repeatString(true, 3), 'Not A String !!');
console.log(repeatString('Hello', 0), '');
