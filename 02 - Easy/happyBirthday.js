const happyBirthday = (age) => {
  return `Mubashir is just ${20 + (age % 2)}, in base ${Math.floor(age / 2)}!`;
};

// Tests

console.log(happyBirthday(32), 'Mubashir is just 20, in base 16!');
console.log(happyBirthday(39), 'Mubashir is just 21, in base 19!');
console.log(happyBirthday(22), 'Mubashir is just 20, in base 11!');
console.log(happyBirthday(65), 'Mubashir is just 21, in base 32!');
console.log(happyBirthday(83), 'Mubashir is just 21, in base 41!');
console.log(happyBirthday(95), 'Mubashir is just 21, in base 47!');
console.log(happyBirthday(100), 'Mubashir is just 20, in base 50!');
console.log(happyBirthday(120), 'Mubashir is just 20, in base 60!');
console.log(happyBirthday(147), 'Mubashir is just 21, in base 73!');
