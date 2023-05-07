// https://edabit.com/challenge/SgmaKy8e8X7ibaGYM

const letterDistance = (str1, str2) => {
  const arr1 = [...str1].map((l) => l.charCodeAt(0));
  const arr2 = [...str2].map((l) => l.charCodeAt(0));
  //return arr1.reduce((acc, cv, i) => acc + Math.abs(cv - arr2[i]) || 0, 0);
};

// Tests

console.log(letterDistance('house', 'fly'), 11);
console.log(letterDistance('sharp', 'sharq'), 1);
console.log(letterDistance('abcde', 'bcdef'), 5);
console.log(letterDistance('abcde', 'a'), 4);
console.log(letterDistance('abcde', 'e'), 8);
console.log(letterDistance('abcde', 'Abcde'), 32);
console.log(letterDistance('abcde', 'A'), 36);
console.log(letterDistance('very', 'fragile'), 67);
