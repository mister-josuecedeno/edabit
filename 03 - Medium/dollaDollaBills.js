const dollaDollaBills = (money) => {
  return money.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};

// Tests

console.log(dollaDollaBills(10), '$10.00');
console.log(dollaDollaBills(31.4159), '$31.42');
console.log(dollaDollaBills(-56.99), '-$56.99');
console.log(dollaDollaBills(-0.008), '-$0.01');
console.log(dollaDollaBills(0.05), '$0.05');
console.log(dollaDollaBills(1000000), '$1,000,000.00');
console.log(dollaDollaBills(-314159.2653), '-$314,159.27');
