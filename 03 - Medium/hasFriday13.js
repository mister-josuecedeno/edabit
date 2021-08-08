const hasFriday13 = (month, year) => {
  const friday13 = new Date(year, month - 1, 13);
  const dayOfWeek = friday13.getDay();
  return dayOfWeek === 5;
};

// Tests

console.log(hasFriday13(3, 2020), true);
console.log(hasFriday13(10, 2017), true);
console.log(hasFriday13(1, 1985), false);
console.log(hasFriday13(5, 1619), false);
console.log(hasFriday13(6, 1614), true);
console.log(hasFriday13(8, 1767), false);
console.log(hasFriday13(6, 1589), false);
console.log(hasFriday13(2, 2015), true);
console.log(hasFriday13(3, 2015), true);
console.log(hasFriday13(11, 2015), true);
console.log(hasFriday13(2, 1759), false);
console.log(hasFriday13(8, 1612), false);
console.log(hasFriday13(8, 1612), false);
console.log(hasFriday13(10, 2029), false);
console.log(hasFriday13(1, 1590), false);
console.log(hasFriday13(7, 1812), false);
console.log(hasFriday13(1, 1785), false);
console.log(hasFriday13(11, 1961), false);
console.log(hasFriday13(9, 1706), false);
console.log(hasFriday13(5, 2016), true);
console.log(hasFriday13(11, 2020), true);
console.log(hasFriday13(1, 2023), true);
console.log(hasFriday13(10, 2023), true);
console.log(hasFriday13(2, 2043), true);
console.log(hasFriday13(4, 2043), false);
console.log(hasFriday13(3, 2043), true);
console.log(hasFriday13(11, 2043), true);
