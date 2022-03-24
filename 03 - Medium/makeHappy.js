const makeHappy = (str) => {
  const regex = /[:|8|x|;]\(/gi;
  const replacer = (s) => s.replace('(', ')');
  return str.replace(regex, replacer);
};

// Tests

console.log(makeHappy('My current mood: :('), 'My current mood: :)');
console.log(makeHappy('I was hungry 8('), 'I was hungry 8)');
console.log(makeHappy('print("x(")'), 'print("x)")');
console.log(makeHappy("I'm thirsty ;("), "I'm thirsty ;)");
console.log(makeHappy('(((:())))'), '(((:)))))');
console.log(makeHappy('I am :( :( 8( :)'), 'I am :) :) 8) :)');
console.log(makeHappy('l'), 'l');
