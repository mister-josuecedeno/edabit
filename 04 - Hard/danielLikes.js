// https://edabit.com/challenge/nbBxCfxPNy4ovFoqQ

const danielLikes = (girl) => {
  return [...girl].map((l) => l.charCodeAt(0));
};

// Tests
console.log(danielLikes('Daniel'), false);
console.log(danielLikes('Renata'), false);
console.log(danielLikes('Charli'), true);
console.log(danielLikes('Holly'), true);
