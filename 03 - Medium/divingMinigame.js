const divingMinigame = (arr) => {
  let breathMeter = 10;
  let airLoss = 2;
  let result = true;

  const increaseBreath = () => {
    breathMeter += 4;
    if (breathMeter > 10) breathMeter = 10;
  }
  
  for (const item of arr) {
    if(item < 0) breathMeter -= airLoss;
    if(item > 0) increaseBreath();
    if(breathMeter <= 0) {
      return false;
    }
  }

  return result;
}

// Tests

console.log(divingMinigame([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), true)
console.log(divingMinigame([-5, -15, -4, 0, 5]), true)
console.log(divingMinigame([0, -4, 0, -4, -5, -2]), true)
console.log(divingMinigame([-4, -3, -4, -3, 5, 2, -5, -20, -42, -4, 5, 3, 5]), true)

console.log(divingMinigame([-3, -6, -2, -6, -2]), false)
console.log(divingMinigame([-4, -5, -2, -7, 2, -1000, -2000, -1]), false)
console.log(divingMinigame([1, 2, 1, 2, 1, 2, 1, 2, 1, -3, -4, -5, -3, -4]), false)
console.log(divingMinigame([-5, -5, -5, -5, -5, 2, 2, 2, 2, 2, 2, 2, 2]), false)

