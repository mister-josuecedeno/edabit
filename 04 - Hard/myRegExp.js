const myRegExp = (str) => {
  const regex = /^[0-9]{4}$|^[0-9]{6}$/;

  // Tests
  const tests = [
    ['123456', true],
    ['4512a5', false],
    ['', false],
    ['21904', false],
    ['9451', true],
    ['213132', true],
    [' 4520', false],
    ['15632 ', false],
    ['000000', true],
  ];

  for (const i of tests) {
    console.log(regex.test(i[0]), i[1]);
  }
};

myRegExp();
