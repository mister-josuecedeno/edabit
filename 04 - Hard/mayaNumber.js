// https://edabit.com/challenge/n6ts9wQi6Dcb6bmP7

const mayaNumber = (num) => {
  if (num === 0) return ["@"];

  const result = [];

  // Step 1: Convert to base-20
  while (num > 0) {
    let digit = num % 20;
    result.unshift(digit);
    num = Math.floor(num / 20);
  }

  // Step 2: Convert each digit to Mayan symbols
  return result.map(digit => {
    if (digit === 0) return "@";

    const lines = Math.floor(digit / 5);
    const dots = digit % 5;
    return `${"o".repeat(dots).trim()}${dots && lines ? "" : ""}${"—".repeat(lines).trim()}`;
  });
}

// Tests

console.log(mayaNumber(39), ["o", "oooo———"], "Example #1")
console.log(mayaNumber(815), ["oo", "@", "———"], "Example #2")
console.log(mayaNumber(16125), ["oo", "@", "o—", "—"], "Example #3")
console.log(mayaNumber(0), ["@"])
console.log(mayaNumber(1985), ["oooo", "oooo———", "—"])
console.log(mayaNumber(86420), ["——", "o———", "o", "@"])
console.log(mayaNumber(13579), ["o", "ooo——", "ooo———", "oooo———"])
console.log(mayaNumber(666), ["o", "ooo——", "o—"])