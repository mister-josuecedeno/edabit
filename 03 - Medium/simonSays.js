// Not my solution

function simonSays(arr1, arr2) {
	for (var i = 1; i < arr2.length; i++) {
		if (arr1[i-1] != arr2[i]) return false;
	}
	return true;
}

// Tests

console.log(simonSays(
	[1, 2, 3, 4, 5],
	[0, 1, 2, 3, 4]
), true)

console.log(simonSays(
	[1, 2, 3, 4, 5],
	[5, 5, 1, 2, 3]
), false)

console.log(simonSays(
	[1, 2],
	[5, 1]
), true)

console.log(simonSays(
	[1, 2],
	[5, 5]
), false)

console.log(simonSays(
	[1, 2, 3],
	[0, 1, 2]
), true)