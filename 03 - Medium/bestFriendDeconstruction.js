// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring

const str = `
function bio({first, last, bestFriend: {first: best}}) {
  // Do not edit the return statement below
  return "Hi, my name is " + first + " " + last + ". " + best + " is my best friend."  
 }
`