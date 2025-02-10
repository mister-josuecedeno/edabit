// https://edabit.com/challenge/4cvBphZgxvGTdc3F7

const longestAbecedarian = (second) => {
  return second.filter((word) => {
    return word === word.split('').sort().join('');
  }).sort((a, b) => b.length - a.length)[0] || '';
}

// Tests

console.log(longestAbecedarian(["ace", "spades", "hearts", "clubs"]), "ace")
console.log(longestAbecedarian(["forty", "choppy", "ghost"]), "choppy")
console.log(longestAbecedarian(["one", "two", "three"]), "")
console.log(longestAbecedarian(["almost", "accept", "access"]), "almost")
console.log(longestAbecedarian(["aa", "bbb", "cccc"]), "cccc")