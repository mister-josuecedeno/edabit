// https://edabit.com/challenge/nbBxCfxPNy4ovFoqQ

// Not my answer
function danielLikes(str) {
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    result += str.charCodeAt(i);
  }
  return (result + '')[0] == 5;
}

// Tests
console.log(danielLikes('Daniel'), true);
console.log(danielLikes('Holly'), true);
console.log(danielLikes('Renata'), false);
console.log(danielLikes('Katelyn'), false);
console.log(danielLikes('Charli'), true);
