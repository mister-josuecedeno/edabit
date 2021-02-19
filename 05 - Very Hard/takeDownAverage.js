const takeDownAverage = (arr) => {
  let sum1 = arr.reduce((acc, cv) => acc + parseInt(cv), 0);
  let ct1 = arr.length;
  let avg1 = sum1 / ct1;

  let ct2 = ct1 + 1;
  let avg2 = avg1 - 5;
  let sum2 = avg2 * ct2;

  // console.log(sum2 - sum1);
  return `${parseInt(Math.round(sum2 - sum1))}%`;
};

// Tests

let [actualParam, expectedParam] = [
  [
    ['95%', '83%', '90%', '87%', '88%', '93%'],
    ['10%'],
    ['74%', '76%', '58%', '50%', '99%', '70%'],
    ['64%', '95%', '89%', '69%', '96%', '59%', '84%', '93%'],
    ['77%', '77%'],
    ['73%', '98%'],
    ['96%', '87%', '66%'],
    ['94%', '79%', '54%', '62%'],
    ['56%', '50%'],
    ['100%', '51%', '98%'],
    ['85%', '74%', '61%', '70%', '56%', '67%', '53%', '53%'],
    ['67%', '91%', '93%', '87%', '81%', '79%', '88%', '69%', '92%', '69%'],
    ['75%', '100%'],
  ],
  [
    '54%',
    '0%',
    '36%',
    '36%',
    '62%',
    '71%',
    '63%',
    '47%',
    '38%',
    '63%',
    '20%',
    '27%',
    '73%',
  ],
];
for (let i in actualParam)
  console.log(takeDownAverage(actualParam[i]), expectedParam[i]);
