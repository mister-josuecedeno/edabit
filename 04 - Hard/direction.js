const direction = (arr) => {
  const letters = {
    e: 'w',
    a: 'e',
    s: 's',
    t: 't',
    E: 'W',
    A: 'E',
    S: 'S',
    T: 'T',
  };

  const change = (word) => {
    let result = '';

    for (let char of word) {
      result += letters[char] || char;
    }

    return result;
  };

  return arr.map((word) => change(word));
};

// Tests
console.log(direction(['east', 'EAST', 'eastEAST']), [
  'west',
  'WEST',
  'westWEST',
]);
console.log(direction(['eAsT EaSt', 'EaSt eAsT']), ['wEsT WeSt', 'WeSt wEsT']);
console.log(direction(['east EAST', 'e a s t', 'E A S T']), [
  'west WEST',
  'w e s t',
  'W E S T',
]);
