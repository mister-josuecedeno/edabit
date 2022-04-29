// Set-up
const makeWordRiddle = (s) => {
  const regex = /.+in/gi;
  const match = [...s.match(regex)[0]];
  const insert = match.slice(0, -2).join('');
  let str = s.slice(insert.length + 2);
  //return `${str[0]}${insert[0]}${[...str].slice(1,).join('')}`.toUpperCase();
  return [insert, str];
};

// Tests

console.log(makeWordRiddle('Finland'), 'LFAND');
console.log(makeWordRiddle('dinner'), 'NDER');
console.log(makeWordRiddle('tkinter'), 'TTKER');
console.log(makeWordRiddle('STRINGS'), 'GSTRS');
console.log(makeWordRiddle('continue'), 'UCONTE');
console.log(makeWordRiddle('cinematographer'), 'ECMATOGRAPHER');
console.log(makeWordRiddle('distinguishable'), 'GDISTUISHABLE');
console.log(makeWordRiddle('Determination'), 'ADETERMTION');
console.log(makeWordRiddle('plainclothesman'), 'CPLALOTHESMAN');
console.log(makeWordRiddle('attainablities'), 'AATTABLITIES');
console.log(makeWordRiddle('administrations'), 'IADMSTRATIONS');
console.log(makeWordRiddle('chloestyramines'), 'ECHLOESTYRAMS');
console.log(makeWordRiddle('bituminizations'), 'IBITUMZATIONS');
console.log(makeWordRiddle('metalinguistics'), 'GMETALUISTICS');
console.log(makeWordRiddle('choriocarcinoma'), 'OCHORIOCARCMA');
console.log(makeWordRiddle('trinitrotoluene'), 'ITRTROTOLUENE');
console.log(makeWordRiddle('provINcial'), 'CPROVIAL');
console.log(makeWordRiddle('SlingShot'), 'GSLSHOT');
