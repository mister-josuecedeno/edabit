const billSplit = (spicy, cost) => {
  let me = spicy.reduce((acc, cv, i) => acc + (cv == 'S' ? cost[i] : cost[i]/2),0);
  let total = cost.reduce((acc, cv) => acc + cv, 0);
  return [me, total - me];
}

// Tests

console.log(billSplit(['N', 'S', 'N'], [10, 10, 20]), [25, 15])
console.log(billSplit(['N', 'N'], [10, 10]), [10, 10])
console.log(billSplit(['S', 'N'], [41, 10]), [46, 5])
console.log(billSplit(['S', 'S', 'S', 'N', 'N'], [8, 9, 8, 7, 7]), [32, 7])
console.log(billSplit(['N', 'N', 'N', 'S'], [40, 20, 20, 10]), [50, 40])
