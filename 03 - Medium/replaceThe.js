const replaceThe = (str) => {
  return str.replace(/the/g, 'a').replace(/a(?= [aeiou])/g, 'an');
};

// Tests

console.log(replaceThe('the dog and the envelope'), 'a dog and an envelope');
console.log(replaceThe('the boy ran at the wall'), 'a boy ran at a wall');
console.log(
  replaceThe('the egg, the spoon and the espionage'),
  'an egg, a spoon and an espionage'
);
console.log(replaceThe('where is the spoon'), 'where is a spoon');
console.log(
  replaceThe('the quick brown fox jumps over the lazy dog'),
  'a quick brown fox jumps over a lazy dog'
);
console.log(
  replaceThe('this edabit thing is quite neat'),
  'this edabit thing is quite neat'
);
console.log(
  replaceThe('the lion, witch and the wardrobe'),
  'a lion, witch and a wardrobe'
);
console.log(
  replaceThe('enter the correct password to access the epic program'),
  'enter a correct password to access an epic program'
);
console.log(
  replaceThe('the man blew the final candle out and all was dark'),
  'a man blew a final candle out and all was dark'
);
console.log(
  replaceThe(
    'the ant ate the egg salad which the eel had been intending to eat over the weekend'
  ),
  'an ant ate an egg salad which an eel had been intending to eat over a weekend'
);
console.log(
  replaceThe('this the random english sentence which you have to pass'),
  'this a random english sentence which you have to pass'
);
