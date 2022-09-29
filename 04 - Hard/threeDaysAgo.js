// https://edabit.com/challenge/LvhSTYCbRDS4XTNmx

// Here's a better solution
/*
const threeDaysAgo = date =>
  new Date(date.setDate(date.getDate() - 3)).toISOString().slice(0, 10);
*/

const threeDaysAgo = (date) => {
  date.setDate(date.getDate() - 3);
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, 0);
  const day = `${date.getDate()}`.padStart(2, 0);
  return `${year}-${month}-${day}`;
};

// Tests

console.log(threeDaysAgo(new Date(2017, 1, 1)), '2017-01-29');
console.log(threeDaysAgo(new Date(1950, 6, 8)), '1950-07-05');
console.log(threeDaysAgo(new Date(1965, 3, 15)), '1965-04-12');
console.log(threeDaysAgo(new Date(2025, 4, 24)), '2025-05-21');
console.log(threeDaysAgo(new Date(1965, 3, 15)), '1965-04-12');
console.log(threeDaysAgo(new Date(2015, 5, 17)), '2015-06-14');
