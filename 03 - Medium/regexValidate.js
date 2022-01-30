function validate(zip) {
  let x = /^([A-Z][0-9][A-Z])(\s|\-){0,1}([0-9][A-Z][0-9])$/i;
  return zip.match(x);
}

// Tests

console.log(validate('M3M 0A9'), 'M3M 0A9 is a valid zip.');
console.log(validate('M3M-0A9'), 'M3M-0A9 is a valid zip.');
console.log(validate('M3M0A9'), 'M3M0A9 is a valid zip.');
console.log(validate('m4c 1t1'), 'm4c 1t1 is a valid zip.');
console.log(validate('m4c-1t1'), 'm4c-1t1 is a valid zip.');
console.log(validate('m4c1t1'), 'm4c1t1 is a valid zip.');
console.log(!validate('m45 1t1'), 'm45 1t1 is not in the correct format.');
console.log(!validate('M4F 1TY'), 'M4F 1TY is not in the correct format.');
console.log(!validate('M4C A1T'), 'M4C A1T is not in the correct format.');
console.log(!validate('M4C-1T1Z'), 'M4C-1T1Z is too long.');
console.log(!validate('M4C1T1Z'), 'M4C1T1Z is too long.');
console.log(!validate('M4C 1T'), 'M4C 1T is too short.');
console.log(!validate('M4C  1T2'), 'M4C  1T2 has too many whitespaces.');
console.log(!validate('M3M ?A9'), 'M3M ?A9 uses an unacceptable character.');
console.log(!validate('M3M~8A9'), 'M3M~8A9 uses an unacceptable delimiter.');
console.log(!validate('M3M^ 8A9'), 'M3M^ 8A9 uses an unacceptable delimiter.');
