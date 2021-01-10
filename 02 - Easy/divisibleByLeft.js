const divisibleByLeft = (n) => {
  let arr = [...`${n}`];
  let last = arr.length - 1;
  let result = [];

  if (arr.length < 2) return [false];

  for (last; last >= 0; last--) {
    result.unshift(arr[last] % arr[last - 1] === 0);
  }

  return result;
};

// Tests
console.log(divisibleByLeft(1), [false]);
console.log(divisibleByLeft(1248), [false, true, true, true]);
console.log(divisibleByLeft(4321), [false, false, false, false]);
console.log(divisibleByLeft(73312), [false, false, true, false, true]);
console.log(divisibleByLeft(2026), [false, true, false, true]);
console.log(divisibleByLeft(635), [false, false, false]);
console.log(divisibleByLeft(1337), [false, true, true, false]);
console.log(divisibleByLeft(135028), [false, true, false, true, false, true]);
