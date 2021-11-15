const freeThrows = (success, throws) => {
  let percent = Math.pow((parseInt(success)/100), throws)
                    .toFixed(2);
  return `${percent * 100}%`;
}

// Tests

console.log(freeThrows("50%", 5), "3%")
console.log(freeThrows("75%", 10), "6%")
console.log(freeThrows("25%", 3), "2%")
console.log(freeThrows("90%", 30), "4%")