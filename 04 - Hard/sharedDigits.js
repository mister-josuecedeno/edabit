// https://edabit.com/challenge/B5ReG5ZDAvAdsrztL

const sharedDigits = (arr) => { 
  return; 
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