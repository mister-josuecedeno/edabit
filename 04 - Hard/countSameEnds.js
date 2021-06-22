const countSameEnds = (sentence) => {
  const regex = /[a-z]+/gi;
  const match = sentence.match(regex);

  const firstLast = (word) => {
    const w = word.toLowerCase();
    if (word.length > 1) {
      return w[0] === w.slice(-1);
    }

    return false;
  };

  return match.filter((word) => firstLast(word)).length;
};

// Tests
console.log(countSameEnds('Pop! the balloon!'), 1);
console.log(countSameEnds('My mom is not a nun.'), 2);
console.log(countSameEnds('A fine morning'), 0);
console.log(countSameEnds('And the crowd goes wild!'), 0);
console.log(countSameEnds('No I am not in a gang.'), 1);
console.log(countSameEnds('Taste the difference'), 0);
