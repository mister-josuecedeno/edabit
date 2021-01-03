const nthEven = (n) => {
  let i = -1;
  let count = 0;

  while (count !== n) {
    i++;
    if (i % 2 === 0) count++;
  }

  return i;
};

// Tests
console.log(nthEven(1), 0);
console.log(nthEven(2), 2);
console.log(nthEven(3), 4);
console.log(nthEven(100), 198);
console.log(nthEven(1298734), 2597466);
