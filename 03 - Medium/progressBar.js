const progressBar = (bar, progress) => {
  let n = (progress/100) * 10;
  let repeater = bar.repeat(n);
  let space = ' '.repeat(10 - n);
  let result = progress === 100 ? 'Completed!' : `Progress: ${progress}%`;
  return `|${repeater}${space}| ${result}`;
}

// Tests

console.log(progressBar("=", 10), "|=         | Progress: 10%")
console.log(progressBar("#", 90), "|######### | Progress: 90%")
console.log(progressBar("*", 100), "|**********| Completed!")
console.log(progressBar("#", 50), "|#####     | Progress: 50%")
console.log(progressBar("*", 60), "|******    | Progress: 60%")
console.log(progressBar("#", 100), "|##########| Completed!")
console.log(progressBar("*", 60), "|******    | Progress: 60%")
console.log(progressBar("=", 30), "|===       | Progress: 30%")
console.log(progressBar(">", 70), "|>>>>>>>   | Progress: 70%")
console.log(progressBar("=", 40), "|====      | Progress: 40%")
console.log(progressBar(">", 20), "|>>        | Progress: 20%")
console.log(progressBar("*", 0), "|          | Progress: 0%")
