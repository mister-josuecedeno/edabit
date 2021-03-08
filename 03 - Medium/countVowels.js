const countVowels = (str, index = 0) => {
  const vowels = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1,
  };

  if (index > str.length) return 0;
  return (vowels[str[index]] || 0) + countVowels(str, index + 1);
};

// Tests
console.log(countVowels('apple'), 2);
console.log(countVowels('cheesecake'), 5);
console.log(countVowels('martini'), 3);
console.log(countVowels('rhythm'), 0);
console.log(countVowels(''), 0);
console.log(countVowels('b'), 0);
console.log(countVowels('a'), 1);
console.log(countVowels('bbbbbb'), 0);
console.log(countVowels('bbbbba'), 1);
console.log(countVowels('abbbb'), 1);
console.log(countVowels('bbbab'), 1);
console.log(countVowels('bbaab'), 2);
console.log(countVowels('baabab'), 3);
