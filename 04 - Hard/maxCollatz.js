// https://edabit.com/challenge/3xPt246ScpEosiJLF

const maxCollatz = (num) => {
  const numbers = [num];

  while (num > 1) {
    if (num % 2 == 0) {
      num /= 2;
    } else {
      num = num * 3 + 1;
    }

    numbers.push(num);
  }

  return Math.max(...numbers);
};

// Tests

console.log(maxCollatz(161), 9232);
console.log(maxCollatz(23), 160);
console.log(maxCollatz(48), 48);
console.log(maxCollatz(1), 1);
console.log(maxCollatz(70), 160);
console.log(maxCollatz(908), 1024);
