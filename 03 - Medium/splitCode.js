const splitCode = (str) => {
  const regex = /\d+|\D+/gi;
  const [s, n] = str.match(regex);
  return [s, +n];
};

// Tests
console.log(splitCode('TEWA8392'), ['TEWA', 8392]);
console.log(splitCode('MMU778'), ['MMU', 778]);
console.log(splitCode('SRPE5532'), ['SRPE', 5532]);
console.log(splitCode('SKU8977'), ['SKU', 8977]);
console.log(splitCode('MCI5589'), ['MCI', 5589]);
console.log(splitCode('WIEB3921'), ['WIEB', 3921]);
