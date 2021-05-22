const mubashirFunction = (a, b) => {
  if (a < 10 && b < 10) return a * b;
  if (a % 10 === 0 && b % 10 === 0) {
    return +`${a * b}`[0];
  }

  const flip = (n) => {
    return +[...`${n}`].reverse().join('');
  };

  return a < b ? flip(a) : flip(b);
};

// Tests

//0 * 1 = 0
console.log(mubashirFunction(0, 1), 0);

//Obviously, 1 * 2 = 2
console.log(mubashirFunction(1, 2), 2);

//That was easy, 5 * 6 = 30
console.log(mubashirFunction(5, 6), 30);

//Wait.. What? 10 * 10 = 1 ?
console.log(mubashirFunction(10, 10), 1);

//What's happening ? 200 * 200 = 4, 0 was omitted ?
console.log(mubashirFunction(200, 200), 4);

//One more...
console.log(mubashirFunction(12, 34), 21);

//You can guess from this..
console.log(mubashirFunction(123, 45), 54);

//Mubashir
