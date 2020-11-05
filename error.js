// Solution
const error = (n) => {
  const error = {
    1: 'Check the fan',
    2: 'Emergency stop',
    3: 'Pump Error',
    4: 'c',
    5: 'Temperature Sensor Error',
  };

  if (error[n] === undefined) return 101;

  return `${error[n]}: e${n}`;
};

// Tests

console.log(error(1), 'Check the fan: e1');
console.log(error(2), 'Emergency stop: e2');
console.log(error(3), 'Pump Error: e3');
console.log(error(4), 'c: e4');
console.log(error(5), 'Temperature Sensor Error: e5');
console.log(error(-1000), 101);
