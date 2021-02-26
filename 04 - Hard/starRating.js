const starRating = (arr) => {
  const weighted = arr.reduce((a, b, i) => a + b * i, 0);
  const total = arr.reduce((a, b) => a + b, 0);
  const wAvg = (weighted / total + 1).toFixed(2);
  return `[${wAvg}] ${'*'.repeat(Math.round(+wAvg))}`;
};

// Tests
console.log(starRating([55, 67, 98, 115, 61]), '[3.15] ***');
console.log(starRating([75, 79, 50, 55, 25]), '[2.56] ***');
console.log(starRating([0, 2, 0, 1, 23]), '[4.73] *****');
console.log(starRating([16, 17, 23, 40, 45]), '[3.57] ****');
console.log(starRating([175, 790, 550, 1550, 1245]), '[3.67] ****');
console.log(starRating([0, 0, 0, 0, 5]), '[5.00] *****');
console.log(starRating([6713, 7809, 5350, 5005, 6250]), '[2.88] ***');
console.log(starRating([80, 79, 82, 155, 325]), '[3.79] ****');
