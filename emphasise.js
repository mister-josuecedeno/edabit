// Create a function that returns a capitalized version of the string passed.
// The first letter of each word in the string should be capitalized while the
// rest of each word should be lowercase.

// Solution
const emphasise = (str) => {
  const proper = (str) => {
    if (Number.isInteger(+str)) {
      return str;
    } else {
      return str[0].toUpperCase() + str.slice(1).toLowerCase();
    }
  };

  return str
    .split(' ')
    .map((word) => proper(word))
    .join(' ');
};

// Tests
console.log(emphasise('hello world'), 'Hello World');
console.log(emphasise('GOOD MORNING'), 'Good Morning');
console.log(emphasise('99 red balloons!'), '99 Red Balloons!');
console.log(emphasise('1 2 3 4 5 6 7 8 9'), '1 2 3 4 5 6 7 8 9');
console.log(emphasise(''), '');
console.log(emphasise('joshua senoron'), 'Joshua Senoron');
