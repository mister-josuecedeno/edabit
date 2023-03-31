// https://edabit.com/challenge/neWTApTYread9ZNdP

const products = (r) => {
  return Object.entries(r)
    .filter((p) => p[1] >= 500)
    .sort((a, b) => b[1] - a[1])
    .map((p) => p[0]);
};

// Tests

console.log(products({ Computer: 600, TV: 800, Radio: 100 }), [
  'TV',
  'Computer',
]);
console.log(products({ Bike1: 510, Bike2: 401, Bike3: 501 }), [
  'Bike1',
  'Bike3',
]);
console.log(
  products({ 'Calvin Klein': 500, Armani: 5000, 'Dolce & Gabbana': 2000 }),
  ['Armani', 'Dolce & Gabbana', 'Calvin Klein']
);
console.log(products({ Loafers: 50, Vans: 10, Crocs: 20 }), []);
console.log(products({ Dell: 400, HP: 300, Apple: 1200 }), ['Apple']);
