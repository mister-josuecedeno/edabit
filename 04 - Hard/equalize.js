// https://edabit.com/challenge/6xfeFywjKqinKsmwd

// Not my solution
const equalize = (arr, c) => {
  var min = Infinity, s = new Set(arr)
  for (let el of s) {
    let local = 0, j = 0
    while (j < arr.length) {
      if (arr[j] == el) j += 1
      else[j, local] = [j + c, local + 1]
      if (j >= arr.length) break
    }
    if (local < min) min = local
  }
  return min

  // Tests

  console.log(equalize([1, 2, 2, 1, 2, 1, 2, 2, 2, 1, 1, 1], 2), 4)
  console.log(equalize([5, 2, 3, 5, 2, 2, 3, 5, 1, 2, 5, 1, 2, 5, 3], 7), 2)
  console.log(equalize([1, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1], 9), 1)
