const firstTuesdayOfTheMonth = (year, month) => {
  let d = new Date();
  d.setFullYear(year, month - 1, 1);

  // If it's Tuesday
  if (d.getDay === 2) return d.toISOString().slice(0, 10);

  // Add 1 day until we reach Tuesday
  while (d.getDay() !== 2) {
    d.setDate(d.getDate() + 1);
  }

  return d.toISOString().slice(0, 10);
};

// Tests
console.log(firstTuesdayOfTheMonth(1997, 1), '1997-01-07');
console.log(firstTuesdayOfTheMonth(2021, 2), '2021-02-02');
console.log(firstTuesdayOfTheMonth(2020, 3), '2020-03-03');
console.log(firstTuesdayOfTheMonth(1998, 4), '1998-04-07');
console.log(firstTuesdayOfTheMonth(1992, 5), '1992-05-05');
console.log(firstTuesdayOfTheMonth(2009, 6), '2009-06-02');
console.log(firstTuesdayOfTheMonth(1987, 7), '1987-07-07');
console.log(firstTuesdayOfTheMonth(2026, 8), '2026-08-04');
console.log(firstTuesdayOfTheMonth(2020, 9), '2020-09-01');
console.log(firstTuesdayOfTheMonth(2009, 10), '2009-10-06');
console.log(firstTuesdayOfTheMonth(1998, 11), '1998-11-03');
console.log(firstTuesdayOfTheMonth(1981, 12), '1981-12-01');
