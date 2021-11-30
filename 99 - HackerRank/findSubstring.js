const findSubstring = (s, x) => {
  //return s.indexOf(x);P
  return s.contains('abcde');
};

console.log(findSubstring('xabcdey', 'abcde'));
