// set-up

const split = (n) => {
  let str = `${n}`;
  let index = Math.floor(str.length / 2);
  let left = str.length < 2 ? 0 : str.slice(0, index);
  let right = str.length % 2 ? str.slice(-(index + 1)) : str.slice(index);

  return [left, right];
};

const isKaprekar = (n) => {
  const squared = Math.pow(n, 2);
  return split(squared);
};

// Tests

console.log(isKaprekar(1), true);
console.log(isKaprekar(2), false);
console.log(isKaprekar(3), false, 'Example #1');
console.log(isKaprekar(5), false, 'Example #2');
console.log(isKaprekar(9), true);
console.log(isKaprekar(65), false);
console.log(isKaprekar(99), true);
console.log(isKaprekar(297), true, 'Example #3');
console.log(isKaprekar(348), false);
console.log(isKaprekar(666), false);
console.log(isKaprekar(1441), false);
console.log(isKaprekar(77778), true);
console.log(isKaprekar(102102), false);
console.log(isKaprekar(533170), true);
