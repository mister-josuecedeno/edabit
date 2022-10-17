const parseCode = (str) => {
  const [f, l, i] = str.split('0').filter((w) => w !== '');
  return { firstName: f, lastName: l, id: i };
};

// Tests

console.log(parseCode('John000Doe000123'), {
  firstName: 'John',
  lastName: 'Doe',
  id: '123',
});
console.log(parseCode('Michael0Smith004331'), {
  firstName: 'Michael',
  lastName: 'Smith',
  id: '4331',
});
console.log(parseCode('Thomas0000Lee0000045553'), {
  firstName: 'Thomas',
  lastName: 'Lee',
  id: '45553',
});
console.log(parseCode('a0b01'), { firstName: 'a', lastName: 'b', id: '1' });
