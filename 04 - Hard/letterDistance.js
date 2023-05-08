// https://edabit.com/challenge/SgmaKy8e8X7ibaGYM

const letterDistance = (str1, str2) => {
  const arr1 = [...str1].map((l) => l.charCodeAt(0));
  const arr2 = [...str2].map((l) => l.charCodeAt(0));
  const minLength = Math.min(arr1.length, arr2.length);
  let total = 0;

  for (let i = 0; i < minLength; i++) {
    total += Math.abs(arr1[i] - arr2[i]);
  }

  total += Math.abs(arr1.length - arr2.length);

  return total;
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
