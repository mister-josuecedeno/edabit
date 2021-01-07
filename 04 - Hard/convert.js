const convert = (temp) => {
  let n = parseInt(temp);
  let type = temp.slice(-1);

  const conv = {
    C: [(n * 9) / 5 + 32, 'F'],
    F: [((n - 32) * 5) / 9, 'C'],
  };

  if (!conv[type]) return 'Error';

  return `${conv[type][0].toFixed(0)}°${conv[type][1]}`;
};

// Tests
console.log(convert('35°C'), '95°F');
console.log(convert('18°C'), '64°F');
console.log(convert('0°F'), '-18°C');
console.log(convert('100°C'), '212°F');
console.log(convert('69°F'), '21°C');
console.log(convert('159°C'), '318°F');
console.log(convert('-40°C'), '-40°F');
console.log(convert('-40°F'), '-40°C');
console.log(convert('16°C'), '61°F');
console.log(convert('500°C'), '932°F');
console.log(convert('33'), 'Error');
console.log(convert('19°F'), '-7°C');
console.log(convert('85°C'), '185°F');
console.log(convert('0°C'), '32°F');
console.log(convert('1777°F'), '969°C');
console.log(convert('-90°C'), '-130°F');
console.log(convert('16°F'), '-9°C');
console.log(convert('180°C'), '356°F');
console.log(convert('7K'), 'Error');
console.log(convert('100°F'), '38°C');
