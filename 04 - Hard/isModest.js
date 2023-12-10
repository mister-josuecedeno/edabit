// https://edabit.com/challenge/Z5tC9uqQrNioT2dLm

const isModest = (num) => {
  let str = `${num}`;
  for (let i = 0; i < str.length; i++) {
    let left = str.slice(0, i + 1);
    let right = str.slice(i + 1);

    if (num % +right == +left) return true;
  }

  return false;
};

// Tests

console.log(isModest(2036), true, 'Example #1');
console.log(isModest(3412), false, 'Example #2');
console.log(isModest(21333), true, 'Example #3');
console.log(isModest(8), false, 'Example #4');
console.log(isModest(13), true);
console.log(isModest(329), false);
