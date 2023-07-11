// https://edabit.com/challenge/ZSiHm257pcdv9QiXa

// refactor
const calculateDigits = (num, calculation, start = 0) => {
    const numbers = [...`${num}`];
    return numbers.reduce((acc, cv) => eval(`${acc} ${calculation} ${cv}`), start);
}
  
const digitalDivision = (n) => {
    // divisible by each digit
    const divisibleByEachNumber = [...`${n}`].every(dig => Number.isInteger(n / dig));

    // divisible by sum of digits
    const sumOfDigitsIsDivisble = Number.isInteger(n / calculateDigits(n, '+', 0));
    
    // divisible by product of digits
    const productOfDigitsIsDivisble = Number.isInteger(n / calculateDigits(n, '*', 1));
    return [divisibleByEachNumber, sumOfDigitsIsDivisble, productOfDigitsIsDivisble];
}

// Tests

console.log(digitalDivision(21), 1, "Example #1")
console.log(digitalDivision(128), 2, "Example #2")
console.log(digitalDivision(100), 2, "Example #3")
console.log(digitalDivision(12), "Perfect", "Example #4")
console.log(digitalDivision(31), "Indivisible", "Example #5")
console.log(digitalDivision(111), "Perfect")
console.log(digitalDivision(40), 2)
console.log(digitalDivision(35), "Indivisible")
console.log(digitalDivision(666), 2)
console.log(digitalDivision(735), "Perfect")
console.log(digitalDivision(1890), 1)
console.log(digitalDivision(444268), "Indivisible")
console.log(digitalDivision(123456789), "Indivisible")
console.log(digitalDivision(1), "Perfect")