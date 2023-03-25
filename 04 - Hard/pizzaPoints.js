// https://edabit.com/challenge/raWPf5nZyRKEEH6ZQ

const pizzaPoints = (customers, minOrders, minPrice) => {
  const result = [];

  for (const customer in customers) {
    let orders = customers[customer];
    let qualifiedOrders = orders.filter((p) => p >= minPrice) || [];
    if (qualifiedOrders.length >= minOrders) result.push(customer);
  }

  return result.sort();
};

// Tests

let obj1 = {
  Batman: [22, 30, 11, 17, 15, 52, 27, 12],
  'Spider-Man': [5, 17, 30, 33, 40, 22, 26, 10, 11, 45],
};

let obj2 = {
  'Captain America': [10, 10, 54, 14, 51, 33, 42, 73, 66, 33, 55, 42, 47],
  'Iron Man': [30, 56, 38, 14, 17],
  Hulk: [53, 25, 13, 7, 61, 16, 17, 29, 64, 8],
  Superman: [27, 28],
};

let obj3 = {
  Zorro: [13, 53, 10, 51],
  Wolverine: [16],
  'Elon Musk': [
    26, 61, 23, 61, 39, 50, 53, 54, 45, 46, 42, 49, 18, 75, 11, 73, 42, 61, 15,
    60, 70, 67, 8, 9, 63, 55, 55, 35, 24, 59, 13, 49, 46, 26, 7, 8, 8, 34, 73,
    60, 27, 28, 28, 48, 10,
  ],
};

console.log(pizzaPoints(obj1, 5, 20), ['Spider-Man']);
console.log(pizzaPoints(obj2, 1, 5), [
  'Captain America',
  'Hulk',
  'Iron Man',
  'Superman',
]);
console.log(pizzaPoints(obj3, 7, 15), ['Elon Musk']);
console.log(pizzaPoints(obj1, 10, 5), ['Spider-Man']);
console.log(pizzaPoints(obj2, 2, 35), ['Captain America', 'Hulk', 'Iron Man']);
console.log(pizzaPoints(obj3, 3, 25), ['Elon Musk']);
console.log(pizzaPoints(obj3, 4, 12), ['Elon Musk']);
console.log(pizzaPoints(obj2, 1, 75), []);
console.log(pizzaPoints(obj1, 100, 1), []);
console.log(pizzaPoints(obj3, 2, 67), ['Elon Musk']);
