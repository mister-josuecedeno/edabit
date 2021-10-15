const variableValid = (variable) => {
  const regex = /^[a-zA-Z][\w]*$/gi;
  return regex.test(variable);
}

// Tests

console.log(variableValid("result"), true)
console.log(variableValid("odd_nums"), true)
console.log(variableValid("2TimesN"), false)
console.log(variableValid("rather_long_variable_name"), true)
console.log(variableValid("count spaces"), false)
console.log(variableValid("nTimes2"), true)
