const chessBoard = (position) => {
  const column = position[0].charCodeAt(0) - 96;
  const colIsEven = column % 2 === 0;

  const row = position[1];
  const rowIsEven = row % 2 === 0;

  let result = '';

  if (rowIsEven) {
    result = colIsEven ? 'black' : 'white';
  } else {
    result = colIsEven ? 'white' : 'black';
  }

  return result;
};

// Tests

console.log(chessBoard('a1'), 'black');
console.log(chessBoard('e5'), 'black');
console.log(chessBoard('d1'), 'white');
console.log(chessBoard('c7'), 'black');
console.log(chessBoard('h5'), 'white');
console.log(chessBoard('g2'), 'white');
console.log(chessBoard('b3'), 'white');
console.log(chessBoard('f6'), 'black');
console.log(chessBoard('g5'), 'black');
