const capSpace = (str) => {
  const regex = /[A-Z]/;
  let newString = '';

  for (let i = 0; i < str.length; i++) {
    if (regex.test(str[i])) {
      newString += ' ' + str[i].toLowerCase();
    } else {
      newString += str[i];
    }
  }

  return newString;
};

// Tests

console.log(capSpace('helloWorld'), 'hello world');
console.log(capSpace('iLoveMyTeapot'), 'i love my teapot');
console.log(capSpace('stayIndoors'), 'stay indoors');
