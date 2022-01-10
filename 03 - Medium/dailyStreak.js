// In progress

const dailyStreak = (logs) => {
  let countOfLogs = 0;
  let max = 0;

  for (const log of logs) {
    
  }

  return max;
}

// Tests

console.log(dailyStreak([true, true, false, true]), 2)
console.log(dailyStreak([false, false, false]), 0)
console.log(dailyStreak([true, true, true, false]), 3)
console.log(dailyStreak([true, true, true, false, true, true]), 3)
console.log(dailyStreak([true, false]), 1)
console.log(dailyStreak([true, false, true]), 1)
console.log(dailyStreak([true, false, true, true]), 2)

