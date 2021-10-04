const grabNumberSum = (str) => {
  const regex = /\d+/g;
  const match = str.match(regex);
  return match.reduce((acc,cv) => acc + +cv, 0);
}

// Tests

console.log(grabNumberSum("aeiou5abc10"), 15)
console.log(grabNumberSum("75shugeb15hvyff15"), 105)
console.log(grabNumberSum("900uwu50uwuuwuuwu25uwu25"), 1000)
console.log(grabNumberSum("one1two2twenty20"), 23)
console.log(grabNumberSum("1s1s11"), 13)
console.log(grabNumberSum("75"), 75)
console.log(grabNumberSum("aeiou250abc10"), 260)
