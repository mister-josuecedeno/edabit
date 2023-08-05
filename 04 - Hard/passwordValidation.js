// https://edabit.com/challenge/RCbczQk6jdAd5N46D

function isValidPassword(password) {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(){}[\]:;<>,.?/~_+-=|\\]).{8,}$/;
  return regex.test(password);
}

// Tests

let str1 = 'bbA234c@cy~!';
let str2 = '32Bl4###xxz';
let str3 = '!abcABC9lzD';
let str4 = 'd@!2?%^&ahaZbb';

console.log(isValidPassword(str1), true);
console.log(isValidPassword(str2), true);
console.log(isValidPassword(str3), true);
console.log(isValidPassword(str4), true);
