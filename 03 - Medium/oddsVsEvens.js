const oddsVsEvens = (num) => {
  const str = [...`${num}`];
  const even = str.filter((e) => e % 2 === 0).reduce((acc, cv) => acc + +cv, 0);
  const odd = str.filter((e) => e % 2 !== 0).reduce((acc, cv) => acc + +cv, 0);
  if (even === odd) return 'equal';
  if (even > odd) return 'even';
  return 'odd';
};

// Tests

console.log(oddsVsEvens(44547), 'equal');
console.log(oddsVsEvens(412420), 'even');
console.log(oddsVsEvens(128797), 'odd');
console.log(oddsVsEvens(838768), 'even');
console.log(oddsVsEvens(371910), 'odd');
console.log(oddsVsEvens(769431), 'odd');
