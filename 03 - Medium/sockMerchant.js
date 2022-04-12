const sockMerchant = (arr) => {
  const numMap = {};

  for (let i = 0; i < arr.length; i++) {
    numMap[arr[i]] = numMap[arr[i]] + 1 || 1;
  }

  return Object.values(numMap).reduce((acc, cv) => acc + parseInt(cv / 2), 0);
};

// Tests

console.log(sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20]), 3);
console.log(sockMerchant([50, 20, 30, 90, 30, 20, 50, 20, 90]), 4);
console.log(sockMerchant([90, 20, 30, 40, 40, 20, 30, 20, 90]), 4);
console.log(sockMerchant([10, 40, 40, 40, 40, 20, 10, 10, 10]), 4);
console.log(sockMerchant([50, 40, 30, 10, 60, 60, 90, 80, 10]), 2);
console.log(sockMerchant([50, 40, 30, 100, 60, 65, 90, 80, 10]), 0);
