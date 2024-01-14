// https://edabit.com/challenge/nbBxCfxPNy4ovFoqQ

const danielLikes = (girl) => {
  const regex = /[aeiou]/gi;
  const vowels = (girl.match(regex) || []).length;
  return girl.length - vowels === vowels;
};

// Tests
