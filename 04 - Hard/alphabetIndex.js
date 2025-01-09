// https://edabit.com/challenge/zujgM52Xr4MogBjgH

const alphabetIndex = (alphabet, str) => {

  let max = 0;

  for (let i = 0; i < str.length; i++) {
    let index = alphabet.indexOf(str[i].toLowerCase());
    if (index > max) {
      max = index;
    }
  }

  return max + 1 + alphabet[max];
}

// Tests
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

console.log(alphabetIndex(alphabet, "Oscar"), "19s")
console.log(alphabetIndex(alphabet, "Lucas"), "21u")
console.log(alphabetIndex(alphabet, "Marko"), "18r")
console.log(alphabetIndex(alphabet, "Esley"), "25y")
console.log(alphabetIndex(alphabet, "Rogei"), "18r")
console.log(alphabetIndex(alphabet, "Nicolas"), "19s")
console.log(alphabetIndex(alphabet, "Flavio"), "22v")
console.log(alphabetIndex(alphabet, "Andrey"), "25y")
console.log(alphabetIndex(alphabet, "Hello"), "15o")