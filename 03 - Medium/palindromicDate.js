const palindromicDate = (date) => {
  const [m, d, y] = date.split('/');
  const dmy = `${d}${m}${y}` === `${d}${m}${y}`.split('').reverse().join('');
  const mdy = `${m}${d}${y}` === `${m}${d}${y}`.split('').reverse().join('');
  return dmy && mdy;
};

// Tests

console.log(palindromicDate('02/02/2020'), true);
console.log(palindromicDate('11/12/2019'), false);
console.log(palindromicDate('11/02/2011'), false);
console.log(palindromicDate('06/10/1469'), false);
console.log(palindromicDate('06/05/3133'), false);
console.log(palindromicDate('12/12/2121'), true);
console.log(palindromicDate('09/09/9090'), true);
console.log(palindromicDate('11/04/2203'), false);
console.log(palindromicDate('07/07/7070'), true);
