// set-up
const evalFactorial = (arr) => {
  const factorial = (n) => {
    if (n === 0 || n === 1) {
      return 1;
    }

    let result = 1;
    for (let i = n; i > 1; i--) {
      result *= i;
    }

    return result;
  };

  return factorial(5);
};

// Tests

console.log(evalFactorial(['2!', '3!']), 8);
console.log(evalFactorial(['5!', '4!', '2!']), 146);
console.log(evalFactorial(['0!', '1!']), 2);
console.log(evalFactorial(['5!', '5!', '10!']), 3629040);
console.log(evalFactorial(['6!', '3!']), 726);
console.log(evalFactorial(['2!', '2!', '1!', '1!']), 6);
