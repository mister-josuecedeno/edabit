const sharedLetters = (str1, str2) => {
  let unique1 = [...new Set(str1)];
  let unique2 = [...new Set(str2)];
  return [...unique1].filter(l => [...unique2].includes(l)).length;
}

// Tests

console.log(sharedLetters("apple", "meaty"), 2)
console.log(sharedLetters("fan", "forsook"), 1)
console.log(sharedLetters("spout", "shout"), 4)
console.log(sharedLetters("took", "taken"), 2)
console.log(sharedLetters("mentor", "terminal"), 5)
console.log(sharedLetters("class", "last"), 3)
