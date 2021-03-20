const evenLast = (arr) => {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += i % 2 === 0 ? arr[i] : 0;
  }

  return total * arr.splice(-1);
};

// Tests
console.log(evenLast([]), 0);
console.log(evenLast([1, 3, 3, 1, 10]), 140);
console.log(evenLast([-11, 3, 3, 1, 10]), 20);
console.log(evenLast([1, 31, 3, 11, 0]), 0);
console.log(evenLast([1, 2, 3, 4, 5, 6, 8]), 136);
console.log(evenLast([2, 3, 4, 5]), 30);
console.log(evenLast([2, 4, 6, 8, 9, 11]), 187);
console.log(evenLast([6, 5, 7, 2, 1]), 14);
console.log(evenLast([2, 2, 2, 2]), 8);
console.log(evenLast([5, 1, 2, 3, 4, 6, 7, 8, 4]), 88);
console.log(evenLast([2, 4, 3, 2, 3, 4, 4, 5]), 60);
console.log(evenLast([7, 23, 22, 6, 8, 2]), 74);
console.log(evenLast([33, 2, -22, 5, -6, 5]), 25);
console.log(evenLast([5, 6, 7, 3, 22, 2]), 68);
console.log(evenLast([3, 4, 5, 6, 7, 8]), 120);
console.log(evenLast([1, 4, 5, 6, 7, 2, 3]), 48);
console.log(evenLast([2, 7, 0, 3, 4, 8, 3]), 27);
console.log(evenLast([9, 3, -6, 2, 7, 8]), 80);
console.log(evenLast([7, 7, 7, 7, 1]), 15);
console.log(evenLast([6, 7, 8, 9, 10, 3, 4]), 112);
console.log(evenLast([9, 8, 7, 6, 5, 4, 3, 2]), 48);
console.log(evenLast([]), 0);
