const squarePatch = (n) => {
  const patch = [];

  for (let i = 0; i < n; i++) {
    let square = Array(n);  
    square.fill(n);
    patch.push(square);
  }
  
  return patch;
}

// Tests

console.log(squarePatch(3), [
	[3, 3, 3],
	[3, 3, 3],
	[3, 3, 3]
])

console.log(squarePatch(2), [
	[2, 2],
	[2, 2]
])

console.log(squarePatch(4), [
	[4, 4, 4, 4],
	[4, 4, 4, 4],
	[4, 4, 4, 4],
	[4, 4, 4, 4]
])

console.log(squarePatch(6), [
	[6, 6, 6, 6, 6, 6],
	[6, 6, 6, 6, 6, 6],
	[6, 6, 6, 6, 6, 6],
	[6, 6, 6, 6, 6, 6],
	[6, 6, 6, 6, 6, 6],
	[6, 6, 6, 6, 6, 6]
])

console.log(squarePatch(5), [
	[5, 5, 5, 5, 5],
	[5, 5, 5, 5, 5],
	[5, 5, 5, 5, 5],
	[5, 5, 5, 5, 5],
	[5, 5, 5, 5, 5]
])

console.log(squarePatch(1), [[1]])

console.log(squarePatch(0), [])
