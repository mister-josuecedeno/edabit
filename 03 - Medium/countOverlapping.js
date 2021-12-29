const countOverlapping = (intervals, point) => {
  return (intervals.filter(i => i.includes(point) || (point > i[0] && point < i[1])) || []).length;
}

// Tests

console.log(countOverlapping([[1, 2], [2, 3], [3, 4]], 5),0)
console.log(countOverlapping([[1, 2], [5, 6], [5, 7]], 5),2)
console.log(countOverlapping([[1, 2], [5, 8], [6, 9]], 7),2)
console.log(countOverlapping([[1, 5], [2, 5], [3, 6], [4, 5], [5, 6]], 5), 5)
console.log(countOverlapping([[1, 5], [2, 5], [3, 6], [4, 5], [5, 6]], 6), 2)
console.log(countOverlapping([[1, 5], [2, 5], [3, 6], [4, 5], [5, 6]], 2), 2)
console.log(countOverlapping([[1, 5], [2, 5], [3, 6], [4, 5], [5, 6]], 1), 1)
