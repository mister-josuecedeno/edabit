const trueEquations = (arr) => {
  return arr.filter((f) => eval(f.split('=')[0]) == f.split('=')[1]);
};

// Tests

console.log(trueEquations(['2*2=4']), ['2*2=4']);
console.log(trueEquations(['1+1=3', '3-1=1']), []);
console.log(trueEquations(['1+1=2', '2+2=3', '5*5=10', '3/3=1']), [
  '1+1=2',
  '3/3=1',
]);
console.log(trueEquations(['4/2=2', '8-4=2', '5*5=25', '3/3=14']), [
  '4/2=2',
  '5*5=25',
]);
console.log(trueEquations(['1-1=0', '2/2=1', '13+9=22', '1*9=9']), [
  '1-1=0',
  '2/2=1',
  '13+9=22',
  '1*9=9',
]);
console.log(trueEquations(['1/41=3', '2+19=14', '13*9=22', '1-9=9']), []);
console.log(
  trueEquations([
    '82/41=2',
    '21-17=3',
    '3+99=2',
    '9*9=81',
    '7*6=42',
    '101+10=111',
    '2*3=5',
    '143/11=13',
  ]),
  ['82/41=2', '9*9=81', '7*6=42', '101+10=111', '143/11=13']
);

// Author : Luis Pereira
