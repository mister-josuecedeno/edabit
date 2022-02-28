// Set-up - position in the alphbet NOT ascii code
const isAlpha = (word) => {
  return word.match(/[a-zA-Z]/g).map((l) => l.charCodeAt(0)); //.reduce((acc,cv) => acc + cv.charCodeAt(0), 0);
};

// Tests

console.log(isAlpha("i'am king"), true);
console.log(isAlpha('True'), true);
console.log(isAlpha('alexa'), false);
