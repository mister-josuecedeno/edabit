// https://edabit.com/challenge/ceEEZioNmxuMJFMxi

// num must be between 14-19 digits
// num must pass the Luhn test
/* 
    Luhn Test
    1. Remove the last digit (this is the "check digit").
    2. Reverse the number.
    3. Double the value of each digit in odd-numbered positions. If the doubled value has more than 1 digit, add the digits together (e.g. 8 x 2 = 16 ➞ 1 + 6 = 7).
    4. Add all digits.
    5. Subtract the last digit of the sum (from step 4) from 10. The result should be equal to the check digit from step 1.
*/
const validateCard = (num) => {

  // num must be between 14-19 digits
  if (num.toString().length < 14 || num.toString().length > 19) return false;

  // Luhn Test
  // Remove the last digit (check digit)
  const checkDigit = num % 10;

  // Reverse the number.
  const reversedDigits = num.toString().slice(0, -1).split('').reverse().map(Number);

  // Double the value of each digit in odd-numbered positions. 
  // If the doubled value has more than 1 digit, add the digits together (e.g. 8 x 2 = 16 ➞ 1 + 6 = 7).
  const processedDigits = reversedDigits.map((digit, index) => {
    if (index % 2 === 0) {
      const doubled = digit * 2;
      return doubled > 9 ? Math.floor(doubled / 10) + (doubled % 10) : doubled;
    }
    return digit;
  });

  // Add all digits.
  const sum = processedDigits.reduce((acc, digit) => acc + digit, 0);

  //  Subtract the last digit of the sum (from step 4) from 10. 
  // The result should be equal to the check digit from step 1.
  const calculatedCheckDigit = (10 - (sum % 10)) % 10;
  return calculatedCheckDigit === checkDigit;
}

// Tests

console.log(validateCard(79927398714), false)
console.log(validateCard(79927398713), false, 'Passes Luhn test, but too short.')
console.log(validateCard(709092739800713), true)
console.log(validateCard(1234567890123456), false)
console.log(validateCard(12345678901237), true)
console.log(validateCard(5496683867445267), true)
console.log(validateCard(4508793361140566), false)
console.log(validateCard(376785877526048), true)
console.log(validateCard(36717601781975), false)