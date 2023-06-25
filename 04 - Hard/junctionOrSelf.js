// https://edabit.com/challenge/dpc8d3knJRf2aBkif

function junctionOrSelf(n) {
	const junc = [];
	for (let i = n; i >= -1; i--) {
		if (n === i + [...String(i)].reduce((a, b) => a + +b, 0)) {
			junc.push(i);
		}
	}
	return junc.length ? junc : 'Self';
}

// Tests

console.log(junctionOrSelf(25), [17], 'Example #1');
console.log(junctionOrSelf(818), [805, 796], 'Example #2');
console.log(junctionOrSelf(7), 'Self', 'Example #3');
console.log(junctionOrSelf(309), [303, 294]);
console.log(junctionOrSelf(406), [401, 392]);
console.log(junctionOrSelf(188), [175]);
console.log(junctionOrSelf(20), 'Self');
console.log(junctionOrSelf(1), 'Self');
console.log(junctionOrSelf(2), [1]);
console.log(junctionOrSelf(11), [10]);
console.log(junctionOrSelf(117), [108, 99]);
console.log(junctionOrSelf(165), 'Self');
