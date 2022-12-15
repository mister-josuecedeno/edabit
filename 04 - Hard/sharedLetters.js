// https://edabit.com/challenge/33EsK9mQzGGzRkXQT

const sharedLetters = (str1, str2) => {
  const s1 = [...new Set(str1.toLowerCase())];
  const s2 = [...new Set(str2.toLowerCase())];
  return s1
    .filter((s) => s2.includes(s))
    .sort()
    .join('');
};

// Tests

console.log(sharedLetters('house', 'home'), 'eho');
console.log(sharedLetters('Micky', 'mouse'), 'm');
console.log(sharedLetters('house', 'villa'), '');
console.log(sharedLetters('Aa', 'aA'), 'a');
console.log(
  sharedLetters('https://www.example.com', 'https://www.canada.ca'),
  './:achpstw'
);
console.log(sharedLetters('Edabit', 'Matt'), 'at');
console.log(sharedLetters('🙂😀😄😁', '🙂😞😔😣'), '🙂');
console.log(sharedLetters('Javascript', 'Swift'), 'ist');
console.log(
  sharedLetters('Functional programming', 'Object oriented programming'),
  ' acgimnoprt'
);
console.log(
  sharedLetters('My dog is a GOOD BOY 🐶', 'Do you like ice cream? 🍦'),
  ' adimoy'
);
