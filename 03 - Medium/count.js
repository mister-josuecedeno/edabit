const count = (deck) => {
  const lookup = (card) => {
    if (card < 7) return 1;
    if ([10, 'J', 'Q', 'K', 'A'].includes(card)) return -1;
    return 0;
  }

  return deck.reduce((acc, cv) => acc + lookup(cv), 0);
}

// Tests

console.log(count([5, 9, 10, 3, 'J', 'A', 4, 8, 5]), 1, 'Example 1')
console.log(count(['A', 'A', 'K', 'Q', 'Q', 'J']), -6, 'Example 2')
console.log(count(['A', 5, 5, 2, 6, 2, 3, 8, 9, 7]), 5, 'Example 3')
console.log(count([2, 2, 2, 2, 2, 2, 2, 2]), 8)
console.log(count([]), 0)
console.log(count(['A', 'A', 'A', 'A', 'A', 'A', 'A']), -7)
console.log(count(['A', 'K', 'Q', 'J', 10, 9, 8, 7, 6, 5, 4, 3, 2]), 0)
