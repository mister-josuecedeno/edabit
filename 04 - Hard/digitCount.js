// https://edabit.com/challenge/TCEYq7KYJE3ogvt9j

const countInstances = (digit, number) => {
  const regex = new RegExp(digit, 'g');
  return (`${number}`.match(regex) || []).length;
};

const digitCount = (num) => {
  return +num
    .toString()
    .split('')
    .map((n) => countInstances(n, num))
    .join('');
};

// Tests

console.log(digitCount(221333), 221333);
console.log(digitCount(136116), 312332);
console.log(digitCount(2), 1);
console.log(digitCount(3410515780), 1122222112);
console.log(digitCount(24677734541), 13133313131);
console.log(digitCount(79825929634), 13121323111);
console.log(digitCount(36123594675), 22112211212);
console.log(digitCount(62849835970), 11212211211);
console.log(digitCount(29081455325), 21111133123);
console.log(digitCount(94717270184), 12323131212);
console.log(digitCount(72017589759), 31113212322);
console.log(digitCount(53569357419), 32312231112);
console.log(digitCount(33879999825), 22214444211);
console.log(digitCount(33600360627), 33333333311);
console.log(digitCount(12594580129), 22221211222);
console.log(digitCount(36852564216), 13122231213);
console.log(digitCount(34415793631), 32221113132);
console.log(digitCount(76384607724), 32112213312);
console.log(digitCount(8604519582), 2111211221);
console.log(digitCount(70209476552), 22221121222);
console.log(digitCount(20036302062), 34422243423);
console.log(digitCount(77674727011), 55151515122);
console.log(digitCount(17597066090), 12122322323);
console.log(digitCount(79082080537), 21321323112);
console.log(digitCount(30187177000), 14213233444);
console.log(digitCount(72916170033), 21121222222);
console.log(digitCount(11314637247), 33232122122);
console.log(digitCount(69095956141), 23132322212);
console.log(digitCount(66117263379), 33222132221);
console.log(digitCount(30491133624), 31212233112);
