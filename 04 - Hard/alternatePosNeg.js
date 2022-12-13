// https://edabit.com/challenge/SZnDZpQeBwhGXMBPW

const alternatePosNeg = (arr) => {
  if (arr.length < 2 && arr[0] === 0) return false;
  if (arr.length < 2) return true;

  const signs = arr.map((n) => Math.sign(n));
  let result = false;

  for (let i = 0; i < signs.length - 1; i++) {
    if (signs[i] === 0) {
      result = false;
      break;
    }

    if (signs[i] + signs[i + 1] === 0) {
      result = true;
    } else {
      result = false;
      break;
    }
  }

  return result;
};

// Tests

console.log(alternatePosNeg([3, -2, 5, -5, 2, -8]), true);
console.log(alternatePosNeg([-6, 1, -1, 4, -3]), true);
console.log(alternatePosNeg([4, 4, -2, 3, -6, 10]), false);
console.log(alternatePosNeg([34, 49, 33, 17, -47]), false);
console.log(alternatePosNeg([22]), true);
console.log(
  alternatePosNeg([41, 11, 37, -30, -29, 39, -45, 15, -41, 7]),
  false
);
console.log(alternatePosNeg([3, -7, 15, 18]), false);
console.log(alternatePosNeg([40]), true);
console.log(alternatePosNeg([40, 27, -44, -13, -31]), false);
console.log(alternatePosNeg([40, 50, -7, 45, -7]), false);
console.log(alternatePosNeg([-23, -16, -9, -15, 16]), false);
console.log(alternatePosNeg([0, 0, 0, 0]), false);
console.log(alternatePosNeg([50, 28, -5, 25, -14, -2, 20, 26, -32]), false);
console.log(alternatePosNeg([24, -10]), true);
console.log(alternatePosNeg([-2, 4, 16, -15, 24, 2]), false);
console.log(alternatePosNeg([19, -12, -37, 44, -43, 44, 47]), false);
console.log(alternatePosNeg([-21, 42, -11, 27, -16, 36, 37]), false);
console.log(alternatePosNeg([30]), true);
console.log(alternatePosNeg([3, -7, 15, -18]), true);
console.log(alternatePosNeg([9, -4, 8, -16]), true);
console.log(alternatePosNeg([3, -7, 15, -18, 0]), false);
console.log(alternatePosNeg([0]), false);
console.log(alternatePosNeg([0, 2, -5, 8, -12]), false);
