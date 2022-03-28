const getBirthdayCake = (name, age) => {
  const frosting = age % 2 === 0 ? '#' : '*';
  const message = `${age} Happy Birthday ${name}! ${age}`;
  const layer = frosting.repeat(message.length + 4);
  return [layer, `${frosting} ${message} ${frosting}`, layer];
};

// Tests
console.log(getBirthdayCake('Jack', 10), [
  '##############################',
  '# 10 Happy Birthday Jack! 10 #',
  '##############################',
]);
