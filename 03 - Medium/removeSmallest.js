const removeSmallest = (ratings) => {
  let minRating = Math.min(...ratings);
  let indexOfLowest = ratings.indexOf(minRating);
  if (indexOfLowest !== -1) ratings.splice(indexOfLowest,1);
  return ratings;
}

// Tests

console.log(removeSmallest([1, 2, 3, 4, 5]), [2, 3, 4, 5])
console.log(removeSmallest([5, 3, 2, 1, 4]), [5, 3, 2, 4])
console.log(removeSmallest([2, 2, 1, 2, 1]), [2, 2, 2, 1])
console.log(removeSmallest([3, 1, 6, 7, 3, 7, 6]), [3, 6, 7, 3, 7, 6])
console.log(removeSmallest([4, 4, 4, 1]), [4, 4, 4])
console.log(removeSmallest([5, 4, 5, 3, 1, 1]), [5, 4, 5, 3, 1])
console.log(removeSmallest([1, 5, 3]), [5, 3])
console.log(removeSmallest([]), [])
console.log(removeSmallest([6, 2, 5, 4, 8, 6, 3, 2, 7]), [6, 5, 4, 8, 6, 3, 2, 7])
console.log(removeSmallest([3]), [])