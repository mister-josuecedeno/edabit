// https://edabit.com/challenge/mDtrDtY3JCPmEv9jt

const isCorrectAliases = (names, aliases) => {
  return aliases.every((n, i) => {
    let [first, last] = n.split(' ');
    return names[i][0] === first[0] && names[i][0] === last[0];
  });
};

// Tests

console.log(
  isCorrectAliases(
    ['Adrian M.', 'Harriet S.', 'Mandy T.'],
    ['Amazing Artichoke', 'Hopeful Hedgehog', 'Marvelous Mouse']
  ),
  true
);
console.log(
  isCorrectAliases(
    ['Rachel F.', 'Pam G.', 'Fred Z.', 'Nancy K.'],
    ['Reassuring Rat', 'Peaceful Panda', 'Fantastic Frog', 'Notable Nickel']
  ),
  true
);
console.log(isCorrectAliases(['Beth T.'], ['Brandishing Mimosa']), false);
console.log(
  isCorrectAliases(
    ['Mick S.', 'Sam R.', 'Val W.'],
    ['Magnificent Mint', 'Sly Serpent', 'Victorious Viceroy']
  ),
  true
);
console.log(
  isCorrectAliases(
    ['Bella T.', 'Tom H.', 'Ben C.'],
    ['Beautiful Barn', 'Talented Tapestry', 'Cool Bamboo']
  ),
  false
);
console.log(
  isCorrectAliases(
    ['Bella T.', 'Tom H.', 'Ben C.'],
    ['Beautiful Barn', 'Talented Tapestry', 'Bountiful Bamboo']
  ),
  true
);
