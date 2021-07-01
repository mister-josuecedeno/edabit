const fiftyThirtyTwenty = (ati) => {
  const result = {
    Needs: ati * 0.5,
    Wants: ati * 0.3,
    Savings: ati * 0.2,
  };

  return result;
};

// Tests
console.log(fiftyThirtyTwenty(10000), {
  Needs: 5000,
  Wants: 3000,
  Savings: 2000,
});
console.log(fiftyThirtyTwenty(50000), {
  Needs: 25000,
  Wants: 15000,
  Savings: 10000,
});
console.log(fiftyThirtyTwenty(13450), {
  Needs: 6725,
  Wants: 4035,
  Savings: 2690,
});
console.log(fiftyThirtyTwenty(27800), {
  Needs: 13900,
  Wants: 8340,
  Savings: 5560,
});
console.log(fiftyThirtyTwenty(19000), {
  Needs: 9500,
  Wants: 5700,
  Savings: 3800,
});
console.log(fiftyThirtyTwenty(17610), {
  Needs: 8805,
  Wants: 5283,
  Savings: 3522,
});
console.log(fiftyThirtyTwenty(25000), {
  Needs: 12500,
  Wants: 7500,
  Savings: 5000,
});
console.log(fiftyThirtyTwenty(100000), {
  Needs: 50000,
  Wants: 30000,
  Savings: 20000,
});
console.log(fiftyThirtyTwenty(347100), {
  Needs: 173550,
  Wants: 104130,
  Savings: 69420,
});

// Author: comecheckoutmycode
