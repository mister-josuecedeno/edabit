const getVodkaBottle = (obj, num) => {
  const alcohol = Object.entries(obj);
  const rammsteinOnly = alcohol.filter((a) => a[0].includes('Rammstein'));
  const result = rammsteinOnly.filter((r) => r[1] === num)[0][0];

  return result;
};

// Tests

const random = Math.random();
const obj = {
  absinth: 100,
  whiskey: 100,
  'Rammstein A': 100,
  'Rammstein B': 50,
  'Rammstein C': random,
};

console.log(getVodkaBottle(obj, 100), 'Rammstein A');
console.log(getVodkaBottle(obj, 50), 'Rammstein B');
console.log(getVodkaBottle(obj, random), 'Rammstein C');
