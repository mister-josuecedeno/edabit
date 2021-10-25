const flash = ([num1, op, num2]) => {
	if (op == '/' && num2 == 0) return undefined;
	let operator = op === 'x' ? '*' : op;
  return +eval(`${num1} ${operator} ${num2}`).toFixed(2);
}

// Tests

console.log(flash([3, 'x', 7]), 21);
console.log(flash([5, '+', 7]), 12);
console.log(flash([10, '-', 9]), 1);
console.log(flash([10, '/', 0]), undefined);
console.log(flash([10, '/', 3]), 3.33);
console.log(flash([2, 'x', 0]), 0);
console.log(flash([0, '/', 5]), 0);
console.log(flash([0, '+', 0]), 0);
console.log(flash([0, '-', 0]), 0);
console.log(flash([8, '-', 0]), 8);
console.log(flash([0, '/', 0]), undefined);
console.log(flash([3, '/', 8]), 0.38);
