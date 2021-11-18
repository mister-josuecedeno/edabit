const isSumEqual = (arr) => {
  const sumDigits = (num) => {
    return [...`${num}`].reduce((acc,cv) => acc + +cv, 0);
  }
  
  return sumDigits(arr[0]) === sumDigits(arr[1]);
}

// Tests

console.log(isSumEqual([11, 20]), true)
console.log(isSumEqual([14, 21]), false)
console.log(isSumEqual([0, 0]), true)
console.log(isSumEqual([01, 10]), true)
console.log(isSumEqual([101, 201]), false)
