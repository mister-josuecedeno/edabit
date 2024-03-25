// https://edabit.com/challenge/ejzLBYvAtAiKk9HnP

const transform = (number, numbers) => {
  return numbers.reduce((acc, cv) => acc + Math.abs(number - cv), 0);
};

const smallestTransform = (num) => {
  const numbers = [...`${num}`];
  const transforms = [];

  for (const number of numbers) {
    let changes = transform(number, numbers);
    transforms.push(changes);
  }

  return Math.min(...transforms);
};

// Tests

console.log(smallestTransform(399), 6);
console.log(smallestTransform(1234), 4);
console.log(smallestTransform(153), 4);
console.log(smallestTransform(33338), 5);
console.log(smallestTransform(7777), 0);
console.log(smallestTransform(977), 2);
console.log(smallestTransform(589), 4);
