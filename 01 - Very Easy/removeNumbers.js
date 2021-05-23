function removeNumbers(str) {
  return str
    .split('')
    .filter((c) => isNaN(c))
    .join('');
}

// Tests
console.log(removeNumbers('mubashir1'), 'mubashir');
console.log(removeNumbers('12ma23tt'), 'matt');
console.log(removeNumbers('e1d2a3b4i5t6'), 'edabit');
console.log(removeNumbers('pakistan007'), 'pakistan');
console.log(removeNumbers('ai4653rf53or4235ce'), 'airforce');
