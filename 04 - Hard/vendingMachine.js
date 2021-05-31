const vendingMachine = (products, money, productNumber) => {
  const coins = [500, 200, 100, 50, 20, 10];

  const cart = {
    product: '',
    change: [],
  };

  // Get the product
  let product = products.find((p) => p.number == productNumber);

  if (product == undefined) {
    return 'Enter a valid product number';
  }

  cart.product = product.name;

  // Compare price to payment
  let price = product.price;

  if (money < price) return 'Not enough money for this product';

  // Calculate Change
  let changeOwed = money - price;
  let howMany = 0;

  // Add coin n number of times to the array
  const addChange = (c, n) => {
    for (let i = 0; i < n; i++) {
      cart.change.push(c);
    }
  };

  // Loop through coins to see how many are needed
  coins.forEach((c) => {
    if (changeOwed >= c) {
      howMany = Math.floor(changeOwed / c);
      addChange(c, howMany);

      changeOwed = changeOwed % c;
    }
  });

  return cart;
};

// Tests

// Products available
const products = [
  { number: 1, price: 100, name: 'Orange juice' },
  { number: 2, price: 200, name: 'Soda' },
  { number: 3, price: 150, name: 'Chocolate snack' },
  { number: 4, price: 250, name: 'Cookies' },
  { number: 5, price: 180, name: 'Gummy bears' },
  { number: 6, price: 500, name: 'Condoms' },
  { number: 7, price: 120, name: 'Crackers' },
  { number: 8, price: 220, name: 'Potato chips' },
  { number: 9, price: 80, name: 'Small snack' },
];

// Tests
console.log(vendingMachine(products, 500, 8), {
  product: 'Potato chips',
  change: [200, 50, 20, 10],
});
console.log(vendingMachine(products, 500, 1), {
  product: 'Orange juice',
  change: [200, 200],
});
console.log(vendingMachine(products, 200, 7), {
  product: 'Crackers',
  change: [50, 20, 10],
});
console.log(vendingMachine(products, 100, 9), {
  product: 'Small snack',
  change: [20],
});
console.log(vendingMachine(products, 1000, 6), {
  product: 'Condoms',
  change: [500],
});
console.log(vendingMachine(products, 250, 4), {
  product: 'Cookies',
  change: [],
});
console.log(vendingMachine(products, 500, 0), 'Enter a valid product number');
console.log(
  vendingMachine(products, 90, 1),
  'Not enough money for this product'
);
console.log(vendingMachine(products, 0, 0), 'Enter a valid product number');
