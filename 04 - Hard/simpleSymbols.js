// edabit.com/challenge/rsjKiutZuYaBYeaXt

const simpleSymbols = (str) => {
  const letterRegex = /[a-z]/gi;
  const letters = str.match(letterRegex);
  const regex = /\+[a-z]\+/gi;
  const success = str.match(regex);
  return letters.length === success.length;
};

// Tests
console.log(simpleSymbols('======2+++4+u===+i+'), false);
console.log(simpleSymbols('+u+====3+mmmmm===m++'), false);
console.log(simpleSymbols('==+p+++++++++====8+z++++'), true);
console.log(simpleSymbols('+d+=3=+s+'), true);
console.log(simpleSymbols('f++d+'), false);
