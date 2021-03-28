const pigLatinSentence = (words) => {
  const result = [];

  // starts with a vowel
  const vowel = (word) => {
    return `${word}way`;
  };

  // starts with a consonant
  const consonant = (word) => {
    const regex = /[aeiou]/i;
    const vowel = word.match(regex)[0];
    const arr = [...word];
    const index = arr.findIndex((ltr) => ltr === vowel);

    const before = arr.splice(0, index).join('');
    return arr.join('') + before + 'ay';
  };

  // traverse words
  for (let word of words.split(' ')) {
    const regex = /[aeiou]/i;
    if (regex.test(word[0])) {
      result.push(vowel(word));
    } else {
      result.push(consonant(word));
    }
  }

  return result.join(' ');
};

// Tests
console.log(
  pigLatinSentence('this is pig latin'),
  'isthay isway igpay atinlay'
);
console.log(
  pigLatinSentence('wall street journal'),
  'allway eetstray ournaljay'
);
