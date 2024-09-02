// https://edabit.com/challenge/hEdPafen6dTL32Q5c

const getLeastPositiveElements = (numbers) => { 

  const positiveNumbers = numbers.filter(n => n > 0);
  const result = [];

  for (let i = Math.min(...positiveNumbers); i < Math.max(...positiveNumbers); i++) {
    if(!positiveNumbers.includes(i)){
      result.push(i);
    }
  }

  return result; 
}

// Tests

console.log(getLeastPositiveElements([3, 4, -1, 1]), [2])
console.log(getLeastPositiveElements([3, 4, 6, -1, -3,1]), [2, 5])
console.log(getLeastPositiveElements([1, 8, 6, -1, -9,1]), [2, 3, 4, 5, 7])