const averageWordLength = (str) => {
  const regex = /\b\w+\b/gi;
  const words = str.match(regex) || [];
  const wordLengths = words.map((w) => w.length);
  const sumOfLength = wordLengths.reduce((acc, cv) => acc + cv, 0);
  return +(sumOfLength / wordLengths.length).toFixed(2);
};

// Tests

console.log(averageWordLength('A B C.'), 1.0);
console.log(averageWordLength('What a gorgeous day.'), 4.0);
console.log(averageWordLength('Dude, this is so awesome!'), 3.8);
console.log(averageWordLength('Working on my tan right now.'), 3.67);
console.log(averageWordLength('Having a blast partying in Las Vegas.'), 4.29);
console.log(
  averageWordLength('Have you ever wondered what Saturn looks like?'),
  4.75
);
console.log(
  averageWordLength(
    'I just planted a young oak tree, wonder how tall it will grow in a few years?'
  ),
  3.47
);
