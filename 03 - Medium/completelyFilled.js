const completelyFilled = (strings) => {
  for (const string of strings) {
    if (string.indexOf(' ') > -1) return false;
  }
  return true;
}

// Tests

console.log(completelyFilled([
  "#"
]), true)
console.log(completelyFilled([
  "##", 
  "##"
]), true)
console.log(completelyFilled([
  "###", 
  "#*#", 
  "###"
]), true)
console.log(completelyFilled([
  "######", 
  "#****#", 
  "#****#", 
  "#****#", 
  "#****#", 
  "######"
]), true)
console.log(completelyFilled([
  "#####", 
  "#***#", 
  "#***#", 
  "#***#", 
  "#####"
]), true)
console.log(completelyFilled([
  "#####", 
  "#* *#", 
  "#***#", 
  "#***#", 
  "#####"
]), false)
console.log(completelyFilled([
  "######", 
  "#* **#", 
  "#****#", 
  "#* **#", 
  "#*** #", 
  "######"
]), false)
console.log(completelyFilled([
  "######", 
  "#* **#", 
  "#* **#", 
  "#* **#", 
  "#* **#", 
  "######"
]), false)
