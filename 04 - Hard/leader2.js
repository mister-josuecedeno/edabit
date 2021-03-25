const leader = (arr) => {
  const leaders = [arr[arr.length - 1]];
  let max = arr[arr.length - 1];

  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] > max) {
      leaders.unshift(arr[i]);
      max = arr[i];
    }
  }

  return leaders;
};

// Tests

console.log(leader([2, 3, 20, 15, 8, 3]), [20, 15, 8, 3]);
console.log(leader([2, 3, 20, 15, 26, 3]), [26, 3]);
console.log(leader([1, 2, 3, 4, 3, 10]), [10]);
console.log(leader([500, 400, 300, 200, 100, 50, 10, 5]), [
  500,
  400,
  300,
  200,
  100,
  50,
  10,
  5,
]);
console.log(leader([8, 7, 1, 2, 10, 3, 5]), [10, 5]);
