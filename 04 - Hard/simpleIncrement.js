function simpleIncrement(n, iterations, step) {
  let pos = 0;
  for (var i = 0; i < iterations; i++) {
    let len = n.toString().length;
    pos = (pos + step) % len;
    n += Math.pow(10, len - pos - 1);
    if (n.toString().length > len) {
      pos += 1;
    }
  }
  return n;
}

// Tests
console.log(simpleIncrement(143726, 16, 3), 243826);
console.log(simpleIncrement(1673, 2, 16), 3673);
console.log(simpleIncrement(99, 99, 99), 198);
console.log(simpleIncrement(99, 99, 98), 4734);

// const simpleIncrement = (n, iterations, step) => {
//   // n = starting point (0-index)

//   let number = `${n}`;
//   let lastIndex = number.length - 1;
//   let start = 0;
//   let increment = 0;

//   const getStart = (currentIndex, maxIndex, step) => {
//     if (currentIndex + step <= maxIndex) return currentIndex + step;

//     // continue until start is <= maxIndex
//     while (currentIndex + step > maxIndex) {
//       step = currentIndex + step - maxIndex - 1;
//       currentIndex = 0;
//     }

//     return currentIndex + step;
//   };

//   for (let i = 0; i < iterations; i++) {
//     // Which number should we change
//     start = getStart(start, lastIndex, step);

//     // increment number
//     increment = 10 ** (lastIndex - start);
//     //console.log([i, number, start, +number[start], increment]);

//     number = `${+number + increment}`;
//     //console.log('new number', number);

//     // move the start by 1 for overflow
//     if (number.length - 1 > lastIndex) {
//       start = start + 1;
//     }
//   }

//   return +number;
// };
