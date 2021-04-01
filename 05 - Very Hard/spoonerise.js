const spoonerise = (words) => {
  const regex = /^[^aeiou]+/gi;
  const pairs = [];

  for (let word of words.split(' ')) {
    let prefix = word.match(regex) || [''];
    prefix = prefix.join('');

    let suffix = [...word].slice(prefix.length).join('');
    pairs.push([prefix, suffix]);
  }

  return `${pairs[1][0]}${pairs[0][1]} ${pairs[0][0]}${pairs[1][1]}`;
};

// Tests
console.log(spoonerise('crushing failure'), 'fushing crailure');
console.log(spoonerise('christmas eve'), 'istmas chreve');
console.log(spoonerise('highlighter fluid'), 'flighlighter huid');
console.log(spoonerise('chocolate biscuits'), 'bocolate chiscuits');
console.log(spoonerise('edabit rules!'), 'redabit ules!');
