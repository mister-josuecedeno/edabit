// https://edabit.com/challenge/4B2hvNaGFvrEgqZEr

const billCount = (money, bills) => {
  bills.sort((a, b) => b - a);
  const counter = {};
  let i = 0;

  while (money > 0) {
    counter[bills[i]] = counter[bills[i]] || 0;

    if (money < bills[i]) {
      i++;
      continue;
    }

    money -= bills[i];
    counter[bills[i]]++;
  }

  return Object.values(counter).reduce((a, b) => a + b, 0);
}

// Tests
console.log(billCount(100, [1, 10, 20]), 5)
console.log(billCount(1050, [1, 10, 20, 100]), 13)
console.log(billCount(3, [1, 10]), 3)
console.log(billCount(555, [1, 10, 100]), 15)
console.log(billCount(222, [1, 10, 100]), 6)
console.log(billCount(60, [1, 10, 20]), 3)
console.log(billCount(55, [1, 5, 10, 50]), 2)