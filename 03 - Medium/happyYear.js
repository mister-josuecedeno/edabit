const happyYear = (year) => {
  const isHappyYear = (year) => {
    const distinct = new Set(`${year}`.split(''));
    return distinct.size === 4;
  };

  let isHappy = false;

  while (!isHappy) {
    year++;
    isHappy = isHappyYear(year);
  }

  return year;
};

// Tests

console.log(happyYear(1990), 2013);
console.log(happyYear(2017), 2018);
console.log(happyYear(2021), 2031);
console.log(happyYear(1001), 1023);
console.log(happyYear(1123), 1203);
console.log(happyYear(2001), 2013);
console.log(happyYear(2334), 2340);
console.log(happyYear(3331), 3401);
console.log(happyYear(1987), 2013);
console.log(happyYear(5555), 5601);
console.log(happyYear(7712), 7801);
console.log(happyYear(8088), 8091);
console.log(happyYear(8999), 9012);
