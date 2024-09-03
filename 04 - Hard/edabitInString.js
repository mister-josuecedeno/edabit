// https://edabit.com/challenge/AdB5SRYzqoiaKKiwm

// Not my solution

const edabitInString = (str) => { 
  const edabit = 'edabit';
  let index = 0;

  for (let char of str) {
    if (char === edabit[index]) {
      index++;
    }
    if (index === edabit.length) {
      return "YES";
    }
  }
  
  return "NO";
}

// Tests

console.log(edabitInString("eddaaabt"), "NO")
console.log(edabitInString("edwardisabletodoittoo"), "YES")
console.log(edabitInString("abecdfghijklmnopqrstuvwxyz"), "NO")
console.log(edabitInString("edisthebestatthis"), "NO")
console.log(edabitInString("teachandlearnbitbybit"), "YES")
console.log(edabitInString("fjkdlkskkkkkdkkdkdedaaakkjkkdkkdklqiieuirooeizooziiciibiiiiifooiioiiuuyeyttgguoosooodiifiufiiodikkjkls"), "YES")