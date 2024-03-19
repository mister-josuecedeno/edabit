// https://edabit.com/challenge/W4EAzp255xTenaYu7

// Not my solution
function mySub(a, b) {
  // Continue looping until there's no carry left
  while (b !== 0) {
    // Borrow contains common set bits of a and ~b
    const borrow = ~a & b;

    // Subtract common bits from a
    a = a ^ b;

    // Borrow is shifted by one so that subtracting it from a gives the required difference
    b = borrow << 1;
  }

  return a;
}

// Tests
console.log(mySub(5, 9), 4);
console.log(mySub(10, 30), 20);
console.log(mySub(0, 0), 0);
