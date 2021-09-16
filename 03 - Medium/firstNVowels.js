const firstNVowels = (s, n) => {
  const regex = /[aeiou]/gi;
  const match = s.match(regex);
  return match.length >= n ? match.slice(0,n).join('') : 'invalid';
}

// Tests
console.log(firstNVowels("sharpening skills", 3), "aei")
console.log(firstNVowels("major league", 5), "aoeau")
console.log(firstNVowels("crabby patty", 2), "aa")
console.log(firstNVowels("shrimp", 1), "i")
console.log(firstNVowels("shrimpy", 2), "invalid")
console.log(firstNVowels("hostess", 5), "invalid")
