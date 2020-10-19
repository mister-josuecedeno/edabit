// ORIGINAL
function change(x, times) {
  for (let i = 0; i < x.length; i++) {
    let j = 1;
    while (j <= times) {
      if (i >= j && i < x.length - j) {
        x[i]--;
      }
      j++;
    }
  }
  return x;
}

// Refactored to not mutate x
function change(x, times) {
  let xCopy = [...x];
  for (let i = 0; i < x.length; i++) {
    let j = 1;
    while (j <= times) {
      if (i >= j && i < x.length - j) {
        xCopy[i]--;
      }
      j++;
    }
  }
  return xCopy;
}
