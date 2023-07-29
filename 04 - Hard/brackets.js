// https://edabit.com/challenge/AcN98uNF2MmQ7jJJH

const brackets = (str) => {
  return;
};

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
