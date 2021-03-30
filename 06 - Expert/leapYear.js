function leapYear(year) {
  let divBy100 = year % 100 === 0;
  let divBy400 = year % 400 === 0;
  let divBy4 = year % 4 === 0;

  let corrects = '0001-0101-1100-1101-1111';
  let result = `${+divBy100}${+divBy400}${+divBy100}${+divBy4}`;

  return corrects.includes(result);
}
