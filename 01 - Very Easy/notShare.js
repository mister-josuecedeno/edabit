// Solution

// function notShare(arr1, arr2) {
//   for (let i of arr1) {
//     for (let j of arr2) {
//       if (i === j) return false;
//     }
//   }
//   return true;
// }

const notShare = (arr1, arr2) => {
  return arr1.filter((n) => arr2.includes(n)).length === 0;
};

// Tests
console.log(notShare([1, 2, 3], [4, 5, 6]), true);
console.log(notShare([1, 2, 3], [3, 4, 5]), false);
console.log(notShare([3, 3, 3], [4, 5, 6]), true);
console.log(notShare([3, 3, 3], [1, 2, 3]), false);
console.log(notShare([1, 2, 3, 4, 5, 6], [7]), true);
console.log(notShare([1, 2, 3, 4, 5, 6], [6]), false);
console.log(notShare([1], [2, 3, 4, 5, 6, 7]), true);
console.log(notShare([1], [1, 2, 3, 4, 5, 6]), false);
