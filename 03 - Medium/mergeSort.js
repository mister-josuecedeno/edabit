const mergeSort = (arr1, arr2) => {
  const order = arr1[0] < arr1[1] ? 'asc' : 'desc';
  const numbers = [...arr1, ...arr2].flat(1);
  return order == 'asc' ? numbers.sort((a,b) => a-b) : numbers.sort((a,b) => b-a);
}

// Tests

console.log(mergeSort([1, 2, 3], [5, 4, 6]), [1, 2, 3, 4, 5, 6])
console.log(mergeSort([8, 6, 4, 2], [-2, -6,  0, -4 ]), [8, 6, 4, 2, 0, -2, -4, -6])
console.log(mergeSort([120, 180, 200], [190, 175, 130]), [120, 130, 175, 180, 190, 200])
console.log(mergeSort([25, 21, 17, 13], []), [25, 21, 17, 13])
console.log(mergeSort([1024, 2048], [512, 128, 64]), [64, 128, 512, 1024, 2048])
console.log(mergeSort([0, 1], [1, 1, 1, 1, 0, 0, 0, 0]), [0, 0, 0, 0, 0, 1, 1, 1, 1, 1])
console.log(mergeSort([-1, -3], [11, -5, 7, -11]), [11, 7, -1, -3, -5, -11])
console.log(mergeSort([10, 20, 30, 40, 50, 60, 80, 90], [70]), [10, 20, 30, 40, 50, 60, 70, 80, 90])
