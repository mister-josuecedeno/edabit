// https://edabit.com/challenge/fw8qrxpz2iGWh5QcE

const isSuperD = (n) => {
  const bigN = BigInt(n);

  for (let i = 2; i <= 9; i++) {
    const rep = i.toString().repeat(i);
    const num = BigInt(i) * bigN ** BigInt(i);
    if (num.toString().includes(rep)) {
      return `Super-${i} Number`;
    }
  }

  return 'Normal Number';
};


// Tests

console.log(isSuperD(19), "Super-2 Number", "Example #1");
console.log(isSuperD(753), "Super-3 Number", "Example #2");
console.log(isSuperD(1168), "Super-4 Number", "Example #3");
console.log(isSuperD(24), "Normal Number", "Example #4");
console.log(isSuperD(20379), "Super-5 Number");
console.log(isSuperD(185423), "Super-8 Number");
console.log(isSuperD(1170), "Normal Number");
console.log(isSuperD(118), "Normal Number");
console.log(isSuperD(93568867), "Super-9 Number");
console.log(isSuperD(333), "Super-2 Number");
console.log(isSuperD(107), "Super-2 Number");
console.log(isSuperD(1184321), "Super-7 Number");
console.log(isSuperD(10098023246), "Normal Number");
console.log(isSuperD(1045361), "Super-6 Number");
console.log(isSuperD(0), "Normal Number", "Paradoxical Test");