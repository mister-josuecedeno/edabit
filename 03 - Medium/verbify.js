const verbify = (str) => {
  const [verb, item] = str.split(' ');
  let suffix = 'ed';

  if(verb.endsWith('ed')) {
    suffix = '';
  } else if (verb.endsWith('e')) {
    suffix = 'd';
  }
  
  return `${verb}${suffix} ${item}`;
}

// Tests

console.log(verbify("cheese burger"), "cheesed burger")
console.log(verbify("bean toast"), "beaned toast")
console.log(verbify("orange juice"), "oranged juice")
console.log(verbify("verb noun"), "verbed noun")
console.log(verbify("apple sauce"), "appled sauce")
console.log(verbify("girl friend"), "girled friend")
console.log(verbify("shredded cheese"), "shredded cheese")
console.log(verbify("cheese cake"), "cheesed cake")
console.log(verbify("lemon cheesecake"), "lemoned cheesecake")
console.log(verbify("air plane"), "aired plane")
console.log(verbify("pumpkin pie"), "pumpkined pie")
console.log(verbify("salt water"), "salted water")