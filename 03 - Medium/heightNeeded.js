// not my solution

function heightNeeded(volume) {
	const radiusInCm = 5;
	const height = 3 * (volume / (Math.PI * (radiusInCm ** 2)));
	return +(height * 1000).toFixed(2);						
}

// Tests

console.log(heightNeeded(1), 38.2)
console.log(heightNeeded(3), 114.59)
console.log(heightNeeded(0.5), 19.1)
console.log(heightNeeded(10), 381.97)
console.log(heightNeeded(5), 190.99)