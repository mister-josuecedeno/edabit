// https://edabit.com/challenge/74z6ajLYX4oLAF5zb

const addBill = (second) => { return; }

// Tests

console.log(addBill("$200, £40, £60, $1k"), 1200)
console.log(addBill("$10, $40, £60, $200"), 250)
console.log(addBill("$10k"), 10000)
console.log(addBill("£400, $200, £40, £60"), 200)
console.log(addBill("$20k, $100, £40"), 20100)
console.log(addBill("$100"), 100)
console.log(addBill("$100k"), 100000)