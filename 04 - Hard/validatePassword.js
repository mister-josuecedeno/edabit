// https://edabit.com/challenge/JYyXdP5WBmDiL8LvT

const validatePassword = (password) => {
  const regex =
    /^(?!.*(.)\1\1)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()+=_\-{}[\]:;"'?<>,.])[A-Za-z0-9!@#$%^&*()+=_\-{}[\]:;"'?<>,.]{6,24}$/;
  return regex.test(password);
};

// Tests

// INVALID PASSWORDS
console.log(validatePassword('P1zz@'), false, 'Too short.');
console.log(validatePassword('P1zz@P1zz@P1zz@P1zz@P1zz@'), false, 'Too long.');
console.log(
  validatePassword('mypassword11'),
  false,
  'Missing uppercase letter.'
);
console.log(
  validatePassword('MYPASSWORD11'),
  false,
  'Missing lowercase letter.'
);
console.log(validatePassword('iLoveYou'), false, 'Missing number.');
console.log(
  validatePassword('Pè7$areLove'),
  false,
  'Special character "è" disallowed.'
);
console.log(
  validatePassword('Repeeea7!'),
  false,
  'Repeated character "eee" disallowed.'
);
// VALID PASSWORDS
console.log(validatePassword('H4(k+x0'), true);
console.log(validatePassword('Fhg93@'), true);
console.log(validatePassword('aA0!@#$%^&*()+=_-{}[]:;"'), true);
console.log(validatePassword("zZ9'?<>,."), true);
