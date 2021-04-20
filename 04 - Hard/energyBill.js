const energyBill = (startDate, endDate, startRead, endRead, tariff, stand) => {
  const UK_TAX = 0.05;
  const days = numDays(startDate, endDate);
  if (days < 0) return 'Invalid date';
  if (endRead < startRead) return 'Invalid meter readings';

  const unitsUsed = endRead - startRead;
  const unitCost = unitsUsed * tariff;
  const standingCharge = days * stand;
  const cost = standingCharge + unitCost;
  const taxOnEnergy = cost * UK_TAX;
  const bill = cost + taxOnEnergy;
  return bill
    .toLocaleString('en-GB', {
      style: 'currency',
      currency: 'GBP',
    })
    .replace(',', '');
};

const numDays = (startDate, endDate) => {
  const [sYear, sMonth, sDay] = startDate.split(',');
  const [eYear, eMonth, eDay] = endDate.split(',');
  const date1 = new Date(`${sMonth}/${sDay}/${sYear}`);
  const date2 = new Date(`${eMonth}/${eDay}/${eYear}`);

  const diffTime = date2.getTime() - date1.getTime();
  return Math.ceil(diffTime / (1000 * 3600 * 24));
};

// Tests

console.log(
  energyBill('2020,01,01', '2020,04,01', 1000, 2000, 0.188, 0.243),
  '£220.62'
);
console.log(
  energyBill('1987,11,01', '1989,02,21', 874, 6253, 0.061, 0.124),
  '£406.76'
);
console.log(
  energyBill('2011,09,02', '2012,09,05', 3297, 4721, 0.151, 0.176),
  '£293.97'
);
console.log(
  energyBill('1970,01,01', '2020,11,22', 0, 22456, 0.0213, 0.1671),
  '£3763.59'
);
console.log(
  energyBill('1980,06,15', '1980,12,25', 7650, 9912, 0.0534, 0.054),
  '£137.77'
);
console.log(
  energyBill('2010,01,01', '2020,01,01', 2000, 2000, 0.171, 0.213),
  '£816.77'
);
console.log(
  energyBill('2010,01,01', '2020,01,01', 2785, 12874, 0.128, 0.148),
  '£1923.48'
);
console.log(
  energyBill('2017,03,01', '2017,06,01', 6348, 7559, 0.142, 0.2),
  '£199.88'
);
console.log(
  energyBill('1984,04,19', '1991,04,10', 2000, 1000, 0.61, 0.074),
  'Invalid meter readings'
);
console.log(
  energyBill('2020,01,01', '2019,01,01', 1000, 2000, 0.171, 0.243),
  'Invalid date'
);
