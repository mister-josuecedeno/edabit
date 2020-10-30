// Given an array of user objects.
// Push the first names of all users in the names array.

// Notes
// You only have to change the "for...of" loop parameters.
// Ignore the const str assignment. This is only used for validation purposes.

let names = [];

let users = [
  { name: 'John', email: 'john@example.com' },
  { name: 'Jason', email: 'jason@example.com' },
  { name: 'Jeremy', email: 'jeremy@example.com' },
  { name: 'Jacob', email: 'jacob@example.com' },
];

for (let { name, email } of users) {
  names.push(name);
}

console.log(names);
