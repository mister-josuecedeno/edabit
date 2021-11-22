function duplicates(str) {
	const charMap = {};
	for (const char of [...str]) {
		charMap[char] = charMap[char] + 1 || 1;
	}
	return (Object.entries(charMap).filter(c => c[1] > 1) || [])
						.reduce((acc,cv) => acc + (cv[1] - 1), 0);
}

// Tests

console.log(duplicates("Hello World!"), 3)
console.log(duplicates("birthday"), 0)
console.log(duplicates("helicopter"), 1)
console.log(duplicates("foobar"), 1)
console.log(duplicates("The Quick Brown Fox Jumps Over the Lazy Dog"), 14)
console.log(duplicates("donald trump"), 1)
console.log(duplicates("Row, row, row your boat Gently down the stream Merrily merrily, merrily, merrily Life is but a dream."), 77)
console.log(duplicates("Gen'rals gathered in their masses,Just like witches at black masses"), 45)
console.log(duplicates("Evil minds that plot destruction,Sorcerer of death's construction"), 43)
console.log(duplicates("gamer"), 0)
console.log(duplicates("gamer gang"), 3)