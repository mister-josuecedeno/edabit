// Solution
const operation = (n1, n2, oper) => {
  const operations = {
    add: '+',
    subtract: '-',
    divide: '/',
    multiply: '*',
  };

  if (oper === 'divide' && n2 === '0') return 'undefined';

  return eval(n1 + operations[oper] + n2);
};

// Tests
console.log(operation('1', '2', 'add'), 3);

console.log(operation('4', '5', 'subtract'), -1);

console.log(operation('6', '3', 'divide'), 2);
