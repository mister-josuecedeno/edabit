// https://edabit.com/challenge/7DiEaqrnap9DDXnSo

const twentyFiveOnOne = (cart) => {
  return;
};

// Tests

Test.assertEquals(
  twentyFiveOnOne([
    { name: 'jogging pants', quantity: 1, price: 29.99 },
    { name: 'tennis socks', quantity: 2, price: 5.99 },
    { name: 'sweat shirt', quantity: 1, price: 59.99 },
  ]),
  86.96
);
Test.assertEquals(
  twentyFiveOnOne([
    { name: 'chocolate bar', quantity: 3, price: 1.63 },
    { name: 'chewing gum', quantity: 6, price: 0.25 },
    { name: 'lolly pop', quantity: 1, price: 0.15 },
  ]),
  6.13
);
Test.assertEquals(
  twentyFiveOnOne([
    { name: 'chair', quantity: 4, price: 125 },
    { name: 'table', quantity: 1, price: 450 },
    { name: 'couch', quantity: 1, price: 899.95 },
  ]),
  1624.96
);
Test.assertEquals(
  twentyFiveOnOne([
    { name: 'bag of potatoes', quantity: 4, price: 3.49 },
    { name: 'can of beans', quantity: 1, price: 1.25 },
    { name: 'cauliflower', quantity: 1, price: 2.64 },
  ]),
  16.98
);
Test.assertEquals(
  twentyFiveOnOne([
    { name: 'Iphone 20x', quantity: 1, price: 1350 },
    { name: 'Samsung x30', quantity: 1, price: 1225 },
    { name: 'Nokia 9250', quantity: 1, price: 800 },
    { name: 'Tesla Model Y', quantity: 1, price: 72999 },
  ]),
  58124.25
);
Test.assertEquals(
  twentyFiveOnOne([{ name: 'E-book Surfing Solo', quantity: 1, price: 13.25 }]),
  9.94
);
Test.assertEquals(
  twentyFiveOnOne([
    { name: 'Blue Horse Energy Drink', quantity: 12, price: 2.35 },
  ]),
  27.61
);
