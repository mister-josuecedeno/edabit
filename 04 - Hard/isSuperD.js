// https://edabit.com/challenge/fw8qrxpz2iGWh5QcE

// Refactor
const isSuperD = (n) => {

  for (let i = 2; i <= 9; i++) {
    let rep = i.toString().repeat(i);
    let num = i * Math.pow(n, i);
    if (num.toString().includes(rep)) {
      let sup = `Super-${i} Number`;
      return sup;
    }
  }

  return 'Normal Number';
}

// Tests

console.log(isSuperD(19), "Super-2 Number", "Example #1");
console.log(isSuperD(753), "Super-3 Number", "Example #2");
console.log(isSuperD(1168), "Super-4 Number", "Example #3");
console.log(isSuperD(24), "Normal Number", "Example #4");
console.log(isSuperD(20379), "Super-5 Number");
console.log(isSuperD(185423), "Super-8 Number");
console.log(isSuperD(1170), "Normal Number");