const chosenWine = (wines) => {
  wines.sort((a, b) => a.price - b.price);

  if (wines.length === 0) return null;
  return wines.length === 1 ? wines[0].name : wines[1].name;
};

// Tests
console.log(
  chosenWine([
    { name: 'Wine A', price: 8.99 },
    { name: 'Wine 32', price: 13.99 },
    { name: 'Wine 9', price: 10.99 },
  ]),
  'Wine 9'
);
console.log(
  chosenWine([
    { name: 'Wine A', price: 8.99 },
    { name: 'Wine B', price: 9.99 },
  ]),
  'Wine B'
);
console.log(chosenWine([{ name: 'Wine A', price: 8.99 }]), 'Wine A');
console.log(chosenWine([]), null);
console.log(
  chosenWine([
    { name: 'Wine A', price: 8.99 },
    { name: 'Wine 389', price: 109.99 },
    { name: 'Wine 44', price: 38.44 },
    { name: 'Wine 72', price: 22.77 },
  ]),
  'Wine 72'
);
