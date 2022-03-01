const isAlpha = (word) => {
  let sum = word
    .toLowerCase()
    .match(/[a-z]/g)
    .map((l) => l.charCodeAt(0) - 96)
    .reduce((acc, cv) => acc + cv, 0);

  return sum % 2 === 0;
};

// Tests

console.log(isAlpha("i'am king"), true);
console.log(isAlpha('True'), true);
console.log(isAlpha('alexa'), false);
