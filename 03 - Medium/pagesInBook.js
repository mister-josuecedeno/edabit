const pagesInBook = (total) => {
  return Math.sqrt(8 * total + 1) % 1 == 0;
};

// Tests

console.log(pagesInBook(5), false);
console.log(pagesInBook(4005), true);
console.log(pagesInBook(9453), true);
console.log(pagesInBook(9474), false);
console.log(pagesInBook(125250), true);
console.log(pagesInBook(920046), true);
