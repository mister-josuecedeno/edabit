const simpleEquation = (a, b, c) => {
  const ops = ['+', '-', '*', '/'];
  const nums = [a, b, c];
  let result = '';

  const getString = (arr) => {
    for (let op of ops) {
      if (eval(`${arr[0]}${op}${arr[1]}`) === arr[2]) {
        return `${arr[0]}${op}${arr[1]}=${arr[2]}`;
      }
    }
    return '';
  };

  for (let i = 0; i < 2; i++) {
    nums.push(nums.shift()); // push first number to the end

    if (getString(nums) !== '') {
      return getString(nums);
    }
  }

  return result;
};

// Tests
console.log(
  simpleEquation(1, 2, 3) == '1+2=3' ||
    simpleEquation(1, 2, 3) == '2+1=3' ||
    simpleEquation(1, 2, 3) == '3-2=1' ||
    simpleEquation(1, 2, 3) == '3-1=2',
  true
);
console.log(
  simpleEquation(2, 2, 4) == '2+2=4' ||
    simpleEquation(2, 2, 4) == '2*2=4' ||
    simpleEquation(2, 2, 4) == '4-2=2' ||
    simpleEquation(2, 2, 4) == '4/2=2',
  true
);
console.log(
  simpleEquation(6, 2, 3) == '2*3=6' ||
    simpleEquation(6, 2, 3) == '3*2=6' ||
    simpleEquation(6, 2, 3) == '6/2=3' ||
    simpleEquation(6, 2, 3) == '6/3=2',
  true
);
console.log(simpleEquation(6, 5, 4), '');
console.log(simpleEquation(2, 3, 4), '');
