const flip = (str, spec) => {
  let words = str.split(" ");

  if(spec === "word"){
    return words.map(w => [...w].reverse().join("")).join(" ");
  } else {
    return words.reverse().join(" ");
  }
}

// Tests

str1 = "There's never enough time to do all the nothing you want"
str2 = "I have all these great genes but they're recessive"
str3 = "I like maxims that don't encourage behavior modification"

console.log(flip('Hello', 'word'), 'olleH')
console.log(flip('Hello', 'sentence'), 'Hello')
console.log(flip(str1, 'word'), "s'erehT reven hguone emit ot od lla eht gnihton uoy tnaw")
console.log(flip(str1, 'sentence'), "want you nothing the all do to time enough never There's")
console.log(flip(str2, 'word'), "I evah lla eseht taerg seneg tub er'yeht evissecer")
console.log(flip(str2, 'sentence'), "recessive they're but genes great these all have I")
console.log(flip(str3, 'word'), "I ekil smixam taht t'nod egaruocne roivaheb noitacifidom")
console.log(flip(str3, 'sentence'), "modification behavior encourage don't that maxims like I")

