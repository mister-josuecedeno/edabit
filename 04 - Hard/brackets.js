// https://edabit.com/challenge/AcN98uNF2MmQ7jJJH

function brackets(str) {
  let stack = [];

  for (let char of str) {
    if (char === '(') {
      stack.push(char);
    } else if (char === ')') {
      if (stack.length === 0) {
        // If there's a closing bracket without a matching opening bracket
        return false;
      } else {
        // If there's a matching opening bracket for the closing bracket
        stack.pop();
      }
    }
  }

  // If all opening brackets have matching closing brackets
  return stack.length === 0;
}

// Tests

console.log(brackets('(a*(b-c)     )'), true);
console.log(brackets(' ) (a-b-45/7*(a-34))'), false);
console.log(brackets('sin(90       )+      cos1)'), false);
console.log(brackets(' (...). .%_.(.... )'), true);
console.log(brackets(' (...)...(..(...).... )  '), true);
console.log(brackets(') .. .() (        ).. . ('), false);
console.log(brackets(')))((('), false);
console.log(brackets('  (...).!.)...('), false);
console.log(brackets('a+b'), true);
console.log(brackets(''), true);
console.log(brackets('(a+f).`!£=.)...) '), false);
