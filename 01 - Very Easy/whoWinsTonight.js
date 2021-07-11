const whoWinsTonight = (BILL_MAX_COINS, WILL_MAX_SPACE, price, size) => {
  const bill = Math.floor(BILL_MAX_COINS / price);
  const will = Math.floor(WILL_MAX_SPACE / size);

  if (bill === will) {
    winner = 'Tie';
  } else if (bill > will) {
    winner = 'Bill';
  } else if (bill < will) {
    winner = 'Will';
  } else {
    ('Something went wrong!');
  }

  return winner;
};

// Tests
console.log(whoWinsTonight(20, 20, 5, 10), 'Bill');
console.log(whoWinsTonight(30, 100, 1, 50), 'Bill');
console.log(whoWinsTonight(90, 10, 2, 5), 'Bill');

console.log(whoWinsTonight(10, 2, 20, 1), 'Will');
console.log(whoWinsTonight(40, 100, 5, 10), 'Will');
console.log(whoWinsTonight(5, 5, 5, 2), 'Will');

console.log(whoWinsTonight(3, 7, 2, 5), 'Tie');
console.log(whoWinsTonight(50, 50, 49, 26), 'Tie');
console.log(whoWinsTonight(100000, 100000, 1, 1), 'Tie');
