const split = (str) => {
  const regex = /[aeiou]/gi;
  const vowels = str.match(regex);
  const other = [...str].filter(c => !vowels.includes(c));
  return [...vowels, ...other].join('');
}

// Tests

console.log(split("abcde"), "aebcd")
console.log(split("Hello!"), "eoHll!")
console.log(split("What's the time?"), "aeieWht's th tm?")
