const move = (word) => {
  let newWord = '';
  let charCode = 0;
  
  for (const letter of word.split('')) {
    charCode = letter.charCodeAt(0) + 1;
    newWord += String.fromCharCode(charCode);
  }
  
  return newWord;
}


// Tests

console.log(move("hello"), "ifmmp")
console.log(move("lol"), "mpm")
console.log(move("bye"), "czf")