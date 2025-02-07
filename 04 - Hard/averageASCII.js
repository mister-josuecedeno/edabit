// https://edabit.com/challenge/qfFpvDpeKb9f68x64

const averageASCII = (str) => {
  // Get sum of the ASCII values for each word
  const sums = str.split(' ').map(word => {
    return word.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  });

  // Get average of the ASCII values for each word
  const avg = sums.reduce((acc, sum) => acc + sum, 0) / sums.length;

  // If the ASCII value is greater than the average, convert the word to uppercase 
  const words = str.split(' ').map((word, index) => {
    if (sums[index] > avg) {
      return word.toUpperCase();
    }
    return word;
  });

  // Join the array with a space
  return words.join(' ');
}

// Tests

console.log(averageASCII("Edabit helps you learn in bitesize chunks"), "EDABIT HELPS you learn in BITESIZE CHUNKS")
console.log(averageASCII("To be or not to be"), "To be or NOT to be")
console.log(averageASCII("What you egg"), "WHAT you egg")
console.log(averageASCII("Made by Harith Shah"), "Made by HARITH Shah")
console.log(averageASCII("Boom"), "Boom")
console.log(averageASCII("The most addictive way to learn"), "The most ADDICTIVE way to LEARN")
console.log(averageASCII("Tell me the time"), "The most ADDICTIVE way to LEARN")