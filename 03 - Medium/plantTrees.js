// This is NOT my solution, but I am using it as a learning tool
function plantTrees(w, l, g) {
  let len = 2 * w + 2 * l - 4;
  return +!(len % ++g) && len / g;
}

// Tests

console.log(plantTrees(3, 3, 1), 4);
console.log(plantTrees(3, 3, 3), 2);
console.log(plantTrees(3, 3, 2), 0);
console.log(plantTrees(7, 7, 3), 6);
console.log(plantTrees(3, 3, 0), 8);
console.log(plantTrees(3, 3, 10), 0);
