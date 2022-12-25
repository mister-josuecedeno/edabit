// https://edabit.com/challenge/ztJZiCZeXATC9KDHX

const noDuplicateLetters = (phrase) => {
  return phrase
    .toLowerCase()
    .split(' ')
    .every((w) => w.length === [...new Set(w)].length);
};

// Tests

console.log(noDuplicateLetters('Easy does it.'), true);
console.log(noDuplicateLetters('So far, so good.'), false);
console.log(noDuplicateLetters('Better late than never.'), false);
console.log(noDuplicateLetters('Beat around the bush.'), true);
console.log(noDuplicateLetters('Give them the benefit of the doubt.'), false);
console.log(noDuplicateLetters('Your guess is as good as mine.'), false);
console.log(noDuplicateLetters('Make a long story short.'), true);
console.log(noDuplicateLetters('Go back to the drawing board.'), true);
console.log(noDuplicateLetters('Wrap your head around something.'), true);
console.log(noDuplicateLetters('Get your act together.'), false);
console.log(noDuplicateLetters('To make matters worse.'), false);
console.log(noDuplicateLetters('No pain, no gain.'), true);
console.log(
  noDuplicateLetters("We'll cross that bridge when we come to it."),
  false
);
console.log(noDuplicateLetters('Call it a day.'), false);
console.log(noDuplicateLetters("It's not rocket science."), false);
console.log(noDuplicateLetters('A blessing in disguise.'), false);
console.log(noDuplicateLetters('Get out of hand.'), true);
console.log(noDuplicateLetters('A dime a dozen.'), true);
console.log(noDuplicateLetters("Time flies when you're having fun."), true);
console.log(noDuplicateLetters('The best of both worlds.'), true);
console.log(noDuplicateLetters('Speak of the devil.'), true);
console.log(noDuplicateLetters('You can say that again.'), false);

console.log(noDuplicateLetters('Always be closing.'), false);
