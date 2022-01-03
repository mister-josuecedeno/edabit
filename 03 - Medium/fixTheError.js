function calculateSum(txt) {
  return [...txt].reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
}

function reverseString(txt) {
	return [...txt].reduce((acc, ch) => ch + acc);
}

// Tests

console.log(calculateSum("orange"), 636)
console.log(calculateSum("lime"), 423)
console.log(calculateSum("mushroom"), 890)
console.log(reverseString("Think"), "knihT")
console.log(reverseString("world"), "dlrow")
console.log(reverseString("people"), "elpoep")