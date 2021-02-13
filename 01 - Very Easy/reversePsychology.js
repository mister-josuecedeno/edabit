function reversePsychology(s = 'do anything') {
  return `Do not ${s}.`;
}

// Tests

console.log(reversePsychology('wash the dishes'), 'Do not wash the dishes.');
console.log(reversePsychology('eat your lunch'), 'Do not eat your lunch.');
console.log(reversePsychology('go to school'), 'Do not go to school.');
console.log(reversePsychology(), 'Do not do anything.');
console.log(reversePsychology('read'), 'Do not read.');
console.log(reversePsychology('learn Python'), 'Do not learn Python.');
console.log(reversePsychology('exercise'), 'Do not exercise.');
console.log(reversePsychology('buy PC parts'), 'Do not buy PC parts.');
console.log(reversePsychology('do your homework'), 'Do not do your homework.');
console.log(reversePsychology('drink water'), 'Do not drink water.');
console.log(reversePsychology('look around'), 'Do not look around.');
