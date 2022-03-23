const partition = (str, n) => {
  const regex = new RegExp(`.{1,${n}}`, 'g');
  return str.match(regex);
};

// Tests

console.log(partition('them', 2), ['th', 'em']);
console.log(partition('thematic', 4), ['them', 'atic']);
console.log(partition('movement', 2), ['mo', 've', 'me', 'nt']);
console.log(partition('python', 2), ['py', 'th', 'on']);
console.log(partition('c++', 2), ['c+', '+']);
