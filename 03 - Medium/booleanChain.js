function and(arr) {
	return arr.every(b => b == true);
}

function or(arr) {
	return arr.some(b => b == true);
}

function xor(arr) {
	return Boolean(arr.reduce((acc, cv) => acc ^ cv));
}

// Tests

// AND tests 
console.log(and([true, true, false, true]), false)
console.log(and([true, true, true, true]), true)
console.log(and([false, true, true, true]), false)
console.log(and([false, false, false, false]), false)
console.log(and([false, false, true, true]), false)

// OR tests
console.log(or([true, true, false, false]), true)
console.log(or([true, false, false, false]), true)
console.log(or([false, false, false, true, false]), true)
console.log(or([false, true, false, true, false, true]), true)
console.log(or([false, false, false, false, false]), false)

// XOR tests
console.log(xor([true, true, false, true]), true)
console.log(xor([true, true, false, false]), false)
console.log(xor([true, false, false, false]), true)
console.log(xor([true, false, true, false]), false)
console.log(xor([true, true, true, true]), false)
console.log(xor([false, false, false, false]), false)
console.log(xor([false, false, false, true]), true)
console.log(xor([true, false, false, true]), false)