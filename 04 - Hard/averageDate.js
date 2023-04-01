// https://edabit.com/challenge/kBDrADkw28RHim74Q

const averageDate = (dates) => {
  if (dates.length === 0) return null;
  const sum = dates.reduce((acc, cv) => acc + cv.getTime(), 0);
  return new Date(sum / dates.length).toISOString();
};

// Tests

console.log(averageDate([]), null);

console.log(
  averageDate([new Date(Date.UTC(1970, 0, 1))]),
  '1970-01-01T00:00:00.000Z'
);

console.log(
  averageDate([new Date(Date.UTC(1970, 0, 1)), new Date(Date.UTC(1971, 0, 1))]),
  '1970-07-02T12:00:00.000Z'
);

console.log(
  averageDate([new Date(Date.UTC(1970, 0, 1)), new Date(Date.UTC(1970, 0, 1))]),
  '1970-01-01T00:00:00.000Z'
);

console.log(
  averageDate([
    new Date(Date.UTC(1970, 0, 1)),
    new Date(Date.UTC(1971, 0, 1)),
    new Date(Date.UTC(1972, 0, 1)),
  ]),
  '1971-01-01T00:00:00.000Z'
);

console.log(
  averageDate([
    new Date(Date.UTC(2010, 12, 30)),
    new Date(Date.UTC(2006, 12, 1)),
    new Date(Date.UTC(2006, 11, 4)),
    new Date(Date.UTC(2003, 4, 21)),
  ]),
  '2007-02-05T06:00:00.000Z'
);

console.log(
  averageDate([
    new Date(Date.UTC(2018, 10, 2)),
    new Date(Date.UTC(2006, 8, 24)),
    new Date(Date.UTC(2005, 1, 31)),
    new Date(Date.UTC(2007, 11, 7)),
    new Date(Date.UTC(2009, 6, 19)),
    new Date(Date.UTC(2005, 6, 1)),
    new Date(Date.UTC(2013, 3, 8)),
    new Date(Date.UTC(2005, 7, 1)),
    new Date(Date.UTC(2012, 7, 8)),
    new Date(Date.UTC(2013, 6, 29)),
  ]),
  '2009-11-15T09:36:00.000Z'
);
