const canCapture = ([myQueen, opponentsQueen]) => {
  if (myQueen[0] === opponentsQueen[0]) return true;
  if (myQueen[1] === opponentsQueen[1]) return true;

  if (
    Math.abs(myQueen[0].charCodeAt(0) - opponentsQueen[0].charCodeAt(0)) ===
    Math.abs(myQueen[1] - opponentsQueen[1])
  )
    return true;

  return false;
};

// Tests

console.log(canCapture(['A1', 'H8']), true);
console.log(canCapture(['A1', 'C2']), false);
console.log(canCapture(['G3', 'E5']), true);
console.log(canCapture(['D3', 'C2']), true);
console.log(canCapture(['F4', 'C1']), true);
console.log(canCapture(['H1', 'A7']), false);
console.log(canCapture(['H1', 'A8']), true);
console.log(canCapture(['G1', 'G2']), true);
console.log(canCapture(['A5', 'G5']), true);
console.log(canCapture(['A5', 'E2']), false);
