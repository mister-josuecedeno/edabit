// https://edabit.com/challenge/Gfed7xePtBzXLQewA

const erase = (s) => {
  let index = s.indexOf('#');
  if (index === -1) return s;
  const arr = [...s];
  if (index === 0) {
    arr.splice(index, 1);
  } else {
    arr.splice(index - 1, 2);
  }
  return erase(arr.join(''));
};

// Tests

console.log(erase('he##l#hel#llo'), 'hello');
console.log(erase('major# spar##ks'), 'majo spks');
console.log(erase('si###t boy'), 't boy');
console.log(erase('motion #sick'), 'motionsick');
console.log(erase('m#oti#o#n sick##ne#ss##'), 'otn sin');
console.log(erase('courz#i#age'), 'courage');
console.log(erase('aris##### c#r#ti#c'), ' tc');
console.log(erase('beauty##'), 'beau');
console.log(erase('beauty#'), 'beaut');
console.log(erase('b#'), '');
console.log(erase('####'), '');
