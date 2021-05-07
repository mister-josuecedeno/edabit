const monkeyTalk = (str) => {
  const monkeySays = [
    ['Ook', 'ook'],
    ['Eek', 'eek'],
  ];

  const words = str.split(' ');
  const regex = /[aeiou]/i;
  const isEek = (word) => +regex.test(word[0][0]);

  const monkeyWords = words.map((w, i) => {
    let index = isEek(w);
    return i === 0 ? monkeySays[index][0] : monkeySays[index][1];
  });

  return `${monkeyWords.join(' ')}.`;
};

// Tests
console.log(monkeyTalk('Mubashir Hassan'), 'Ook ook.');
console.log(monkeyTalk('Edabit is Amazing'), 'Eek eek eek.');
console.log(monkeyTalk('Matt'), 'Ook.');
console.log(monkeyTalk('Hello'), 'Ook.');
console.log(monkeyTalk('you are so beautiful'), 'Ook eek ook ook.');
console.log(monkeyTalk('Everyone'), 'Eek.');
console.log(monkeyTalk('Hello Everyone'), 'Ook eek.');
console.log(monkeyTalk('Everyone Hello'), 'Eek ook.');
