const countTowers = (towers) => {
  const regex = /\#\#/gi;
  const match = towers.map(t => t[0].match(regex));
  const count = match.map(m => m ? m.length : 0);
  return Math.max(...count);
}

// Tests

console.log(countTowers([
	["     ##          "],
	["##   ##        ##"],
	["##   ##   ##   ##"],
	["##   ##   ##   ##"]
]), 4)

console.log(countTowers([
	["                         ##"],
	["##             ##   ##   ##"],
	["##        ##   ##   ##   ##"],
	["##   ##   ##   ##   ##   ##"]
]), 6)

console.log(countTowers([
	["##"],
	["##"]
]), 1)

console.log(countTowers([
	[""]
]), 0)

console.log(countTowers([
	["                                              "],
	["##   ##   ##   ##   ##   ##   ##   ##   ##   ##"],
	["##   ##   ##   ##   ##   ##   ##   ##   ##   ##"],
	["##   ##   ##   ##   ##   ##   ##   ##   ##   ##"]
]), 10)

console.log(countTowers([
	["##   ##          "],
	["##   ##          "],
	["##   ##   ##   ##"],
	["##   ##   ##   ##"]
]), 4)
