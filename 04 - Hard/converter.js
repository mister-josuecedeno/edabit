const converter = (a, b) => {
  const [temp1, n] = a;
  const convert = {
    celsius: { kelvin: n + 273.15, fahrenheit: (n * 9) / 5 + 32 },
    kelvin: { celsius: n - 273.15, fahrenheit: (n - 273.15) * (9 / 5) + 32 },
    fahrenheit: {
      celsius: ((n - 32) * 5) / 9,
      kelvin: (n - 32) * (5 / 9) + 273.15,
    },
  };
  return +convert[temp1][b].toFixed(1);
};

// Tests
console.log(converter(['celsius', 20], 'kelvin'), 293.1);
console.log(converter(['celsius', 5], 'kelvin'), 278.1);
console.log(converter(['celsius', 34], 'fahrenheit'), 93.2);
console.log(converter(['celsius', -2], 'fahrenheit'), 28.4);
console.log(converter(['kelvin', 18], 'fahrenheit'), -427.3);
console.log(converter(['kelvin', -10], 'celsius'), -283.1);
console.log(converter(['fahrenheit', 7], 'kelvin'), 259.3);
console.log(converter(['fahrenheit', 25], 'celsius'), -3.9);
