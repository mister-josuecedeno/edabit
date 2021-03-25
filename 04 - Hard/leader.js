const leader = (arr) => {
  const leaders = [];
  const ct = arr.length;
  let max;
  let first;

  for (let i = 0; i < ct; i++) {
    max = Math.max(...arr);
    first = arr[0];
    if (arr[0] === max) leaders.push(arr[0]);
    arr.shift();
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
