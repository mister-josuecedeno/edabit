// https://edabit.com/challenge/AcL4HiKbC9cYSHmYt

const isNotAlphanumeric = (char) => {
  return /[^a-zA-Z0-9]/.test(char);
}


const specialReverseString = (str) => {

  // Refactor: some characters are not procesing correctly 

  // copy string and reverse with no spaces
  const regex = /[^\s]/g;
  const arr = str.match(regex).reverse() || [];

  const result = [];

  // loop through string and replace with reversed string
  for (let i = 0; i < str.length; i++) {
    let current = str[i];

    // check if character is space or null or undefined
    if (isNotAlphanumeric(current)) {
      result.push(current);
      continue;
    }

    // check if character is uppercase or lowercase    
    if (current === current.toUpperCase()) {
      result.push(arr.shift().toUpperCase());
    } else if (current === current.toLowerCase()) {
      result.push(arr.shift().toLowerCase());
    } else {
      result.push(current);
    }
  }
  return result.join('');
}

// Tests

console.log(specialReverseString('Edabit'), 'Tibade')
console.log(specialReverseString('UPPER lower'), 'REWOL reppu')
console.log(specialReverseString('1 23 456'), '6 54 321')
console.log(specialReverseString('Hello World!'), '!dlro Wolleh')
console.log(specialReverseString("Where's your dog Daisy?"), "?ysiadg odru oys 'erehw")
console.log(specialReverseString('addition(3, 2) ➞ 5'), '5➞)2,3(noit id d a')
console.log(specialReverseString("It's known that CSS means Cascading Style Sheets"), "Stee hsely tsgn IDA csacs Naemsscta Htnwo Nks'ti")