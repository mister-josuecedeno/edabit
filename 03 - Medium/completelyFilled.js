const completelyFilled = (arr) => {
  return;
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
