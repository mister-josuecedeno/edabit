// Solution
const isRepeated = (strn) => {
  let str = '';
  let count = 0;

  for (let i = 0; i < strn.length; i++) {
    str += strn[i];

    // all answers are divisors of 24
    if (24 % (i + 1) === 0) {
      count = 24 / (i + 1);
    } else {
      continue;
    }

    // Check for a match
    if (str.repeat(count) === strn) break;
  }

  return count === 1 ? false : count;
};

// Tests
console.log(isRepeated('repeated'.repeat(3)), 3);
console.log(isRepeated('repeat'.repeat(4)), 4);
console.log(isRepeated('no'.repeat(12)), 12);
console.log(isRepeated('more'.repeat(6)), 6);
console.log(isRepeated('puns'.repeat(6)), 6);
console.log(isRepeated(','.repeat(24)), 24);
console.log(isRepeated('please'.repeat(4)), 4);
console.log(isRepeated('stop'.repeat(6)), 6);
console.log(isRepeated('now'.repeat(8)), 8);
console.log(isRepeated('overintellectualizations'), false);
console.log(isRepeated('intercomprehensibilities'), false);
console.log(isRepeated('microspectrophotometries'), false);
console.log(isRepeated('accomplished'.repeat(2)), 2);
