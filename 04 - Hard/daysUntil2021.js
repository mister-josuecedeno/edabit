const daysUntil2021 = (date) => {
  const startDate = new Date(date);
  const endDate = new Date('1/1/2021');
  const timeDiff = endDate.getTime() - startDate.getTime();
  const days = Math.floor(timeDiff / (1000 * 3600 * 24));
  return `${days} day${days > 1 ? 's' : ''}`;
};

// Tests

console.log(daysUntil2021('12/29/2020'), '3 days');
console.log(daysUntil2021('1/1/2020'), '366 days');
console.log(daysUntil2021('2/28/2020'), '308 days');
console.log(daysUntil2021('6/30/2020'), '185 days');
console.log(daysUntil2021('10/22/2020'), '71 days');
console.log(daysUntil2021('12/31/2020'), '1 day');
