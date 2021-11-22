const mostExpensiveItem = (obj) => {
  return Object.entries(obj)
               .sort((a,b) => b[1] - a[1])[0][0];
}

// Tests
console.log(mostExpensiveItem({
  tv: 30,
  skate: 20,
  stereo: 50,
}), "stereo")

console.log(mostExpensiveItem({
  skate: 20,
}), "skate")

console.log(mostExpensiveItem({
  tv: 30,
  skate: 20,
}), "tv")
