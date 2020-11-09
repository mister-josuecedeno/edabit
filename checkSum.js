// Create a function that takes an array of numbers arr and a number n.
// Return true if the sum of any two elements is equal to the given number.
// Otherwise, return false.

// Solution
const checkSum = (arr, n) => {
  const filtered = arr.filter((num) => num < n);
  if (filtered.length === 0) return false;

  let index1 = 0;
  let index2 = 1;

  while (index1 < filtered.length - 2) {
    // console.log(`${filtered[index1]} + ${filtered[index2]} = ${n}`);
    if (filtered[index1] + filtered[index2] === n) {
      return true;
    }

    if (index2 === filtered.length - 1) {
      ++index1;
      index2 = index1 + 1;
    } else {
      index2++;
    }
  }

  return false;
};

// Tests
console.log(checkSum([10, 15, 3, 7], 17), true);
console.log(checkSum([4, 5, 6, 7, 8, 9], 13), true);
console.log(checkSum([2, 8, 9, 12, 45, 78], 1), false);
console.log(checkSum([10, 12, 4, 7, 9, 11], 16), true);
console.log(checkSum([0, 98, 76, 23], 174), true);
console.log(checkSum([0, 9, 7, 23, 19, 18, 17, 66], 39), false);
