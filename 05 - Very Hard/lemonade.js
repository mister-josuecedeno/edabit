const lemonade = (arr) => {
  const cost = 5;
  let bank = 0;
  let payment = 0;
  let change = 0;

  for (let i = 0; i < arr.length; i++) {
    payment = arr[i];
    change = payment - cost;

    if (change > bank) {
      return false;
    }

    bank += cost;
    bank -= change;
  }

  return true;
};

// Tests
console.log(lemonade([5, 5, 5, 10, 20]), true);
console.log(lemonade([5, 5, 10]), true);
console.log(lemonade([10, 10]), false);
console.log(lemonade([5, 5, 5, 20]), true);
console.log(lemonade([5, 5, 10, 10, 20]), false);
console.log(lemonade([5, 5, 5, 5, 10, 5, 10, 10, 10, 20]), true);
console.log(lemonade([5, 10, 5, 5, 5, 20, 5, 10, 5, 5, 10, 20]), true);
console.log(lemonade([5, 10, 5, 5, 5, 20, 5, 10, 20, 5, 10, 20, 10]), false);
