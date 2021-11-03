const add = (numberOne, numberTwo) => {
  
  const isInvalid = (n) => {
    return ["",undefined,null].includes(n);  
  }
  
  let invalid = isInvalid(numberOne) || isInvalid(numberTwo);
  
  return invalid ? "Invalid Operation" : `${+numberOne + +numberTwo}`;
}

// Tests

console.log(add('91', '19'), '110');
console.log(add('123456789', '987654322'), '1111111111');
console.log(add('9999999', '1'), '10000000');
console.log(add('300', '3000'), '3300');
console.log(add('1000', '6200'), '7200');
console.log(add('-10', '-20'), '-30');
console.log(add('-100', '100'), '0');
console.log(add('0', '6200'), '6200');
console.log(add('', '6'), 'Invalid Operation');
console.log(add('', undefined), 'Invalid Operation');
console.log(add(null, '23'), 'Invalid Operation');
console.log(add('', '20'),"Invalid Operation");
