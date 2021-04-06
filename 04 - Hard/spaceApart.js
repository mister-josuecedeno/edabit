const spaceApart = (arr) => {

  let ones = arr.filter(el => el === '1').length;
  let neg = arr.filter(el => el < 0).length;

  if(ones !== 2 || neg > 0) return 'invalid';

  let first = arr.findIndex(el => el === '1') + 1;
  let last = arr.lastIndexOf('1');
  let sum = arr.slice(first, last)
               .filter(el => typeof el === 'number')
               .reduce((acc, cv) => acc + cv, 0);

  return sum;
}

// Tests

console.log(spaceApart([1, 0, 1, "1", 4, 3, 2, 3, 2, "1"]), 14)
console.log(spaceApart(["1", 9, 20, 38, "1"]), 67)
console.log(spaceApart([3, 2, 9, "1", 0, 0, -1, "1"]), "invalid")
console.log(spaceApart(["1"]), "invalid")
console.log(spaceApart([4, 3, "1", "2", 4, "1", "2", "9"]), 4)
console.log(spaceApart(["1", -593, 1, "1", 4, 3, 2, 33, 2]), "invalid")
console.log(spaceApart(["2", "a", 1, "1", 1, 3, 49, "1"]), 53)
