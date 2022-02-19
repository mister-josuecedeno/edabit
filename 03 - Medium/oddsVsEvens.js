// Set-up
const oddsVsEvens = (num) => {
  const str = [...`${num}`];
  return str;
};

// Tests

console.log(oddsVsEvens(44547), 'equal');
console.log(oddsVsEvens(412420), 'even');
console.log(oddsVsEvens(128797), 'odd');
console.log(oddsVsEvens(838768), 'even');
console.log(oddsVsEvens(371910), 'odd');
console.log(oddsVsEvens(769431), 'odd');
