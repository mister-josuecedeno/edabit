// https://edabit.com/challenge/QdiAZBBr59u5PXJaM

const filterArray = (second) => { return; }

// Tests

console.log(filterArray([1, 2, 3, 4, 5], [1, 2, (num) => num % 2 === 1]), [1, 3, 5])
console.log(filterArray([1, 2, 3, 4, 5], [(num) => num % 2 === 1], ""), [1, 3, 5])
console.log(filterArray(["apple", "kiwi", "grape"], [2, (txt) => txt.indexOf("a") > -1], 12), ["apple", "grape"])
console.log(filterArray(["nepal", "radar", "madam", "civic"], [(txt) => txt === [...txt].reverse().join("")]), ["radar", "madam", "civic"])
console.log(filterArray(["balkot", "naxal", "dalu", "gwarko"], [1, 2, (txt) => txt.length > 4, "a", "b"]), ["balkot", "naxal", "gwarko"])