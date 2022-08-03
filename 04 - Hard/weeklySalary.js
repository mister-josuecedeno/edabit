// https://edabit.com/challenge/kageRYgvDLvXAw7As
const getWage = (h, d) => {
  let wage = h <= 8 ? h * 10 : (h - 8) * 15 + 8 * 10;
  if (d < 5) return wage;
  return wage * 2;
};

const weeklySalary = (hours) => {
  const wages = hours.map((h, d) => getWage(h, d));
  return wages.reduce((acc, cv) => acc + cv, 0);
};

// Tests

console.log(weeklySalary([8, 8, 8, 8, 8, 8, 0]), 560);
console.log(weeklySalary([8, 8, 8, 8, 8, 8, 8]), 720);
console.log(weeklySalary([0, 0, 0, 0, 0, 0, 0]), 0);
console.log(weeklySalary([1, 1, 1, 2, 5, 0, 0]), 100);
console.log(weeklySalary([0, 0, 0, 0, 0, 16, 0]), 400);
console.log(weeklySalary([10, 10, 10, 10, 10, 10, 10]), 990);
console.log(weeklySalary([0, 12, 0, 12, 0, 8, 8]), 600);
