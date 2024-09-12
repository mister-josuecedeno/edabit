// https://edabit.com/challenge/B5ReG5ZDAvAdsrztL

const compare = (num1, num2) => { 
  const numbers1 = [...`${num1}`];
  const numbers2 = [...`${num2}`];
  const result = numbers1.some(n => numbers2.includes(n));
  return result; 
}

const sharedDigits = (arr) => { 
  
  const result = [];

  for (let i = 0; i < arr.length - 1; i++) {
    let shares = compare(arr[i], arr[i + 1]);
    result.push(shares);
  }
  
  return result.every(r => r); 
}

// Tests

console.log(sharedDigits([33, 53, 6351, 12, 2242, 44]), true)
console.log(sharedDigits([1, 11, 12, 13, 14, 15, 16]), true)
console.log(sharedDigits([33, 44, 55, 66, 77]), false)
console.log(sharedDigits([1, 12, 123, 1234, 1235, 6789]), false)
console.log(sharedDigits([5789, 798, 98, 995, 599, 699]), true)
console.log(sharedDigits([5, 4, 44, 444]), false)
console.log(sharedDigits([5, 65, 66, 76, 78]), true)
console.log(sharedDigits([5, 55, 665, 66665555, 65, 66, 76, 78, 989]), true)
console.log(sharedDigits([5, 55, 665, 4444, 65, 66, 76, 78, 989]), false)