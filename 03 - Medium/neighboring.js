// set-up
// loop to compare prior and next
const neighboring = (str) => {
  const isValidNeighbor = (current, neighbor) => {
    let currentCode = current.charCodeAt(0);
    let neighborCode = neighbor.charCodeAt(0);
    return Math.abs(neighborCode - currentCode) === 1;
  };

  return isValidNeighbor('b', 'a');
};

// Tests

console.log(neighboring('abcdedcba'), true);
console.log(neighboring('aba'), true);
console.log(neighboring('efghihfe'), false);
console.log(neighboring('xyzyx'), true);
console.log(neighboring('mnopqrstsrqponm'), true);
console.log(neighboring('zyz'), true);
console.log(neighboring('aeiou'), false);
console.log(neighboring('cdefg'), true);
console.log(neighboring('qrstuv'), true);
console.log(neighboring('aaaaa'), false);
