// https://edabit.com/challenge/GLYHkz9eDh3rMugwu

const wrapAround = (second) => {
  return;
};

// Tests

console.log(wrapAround('Hello, World!', 2), 'llo, World!He');
console.log(wrapAround('From what I gathered', -4), 'eredFrom what I gath');
console.log(wrapAround('No Changes', 0), 'No Changes');
console.log(wrapAround('S', -60), 'S');
console.log(wrapAround('Subordinating', 2), 'bordinatingSu');
console.log(wrapAround('Assemblywomen', -6), 'ywomenAssembl');
console.log(wrapAround('Pedantic', 4), 'nticPeda');
console.log(wrapAround('Nonscience', -116), 'cienceNons');
console.log(wrapAround('Excelsior', 30), 'elsiorExc');
console.log(wrapAround('Incomprehensibilities', 50), 'hensibilitiesIncompre');
