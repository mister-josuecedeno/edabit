const unstretch = (word) => {
  const regex = /(.)\1+/g;
  const firstLetter = match => match.slice(0,1);
  return word.replace(regex, firstLetter);
}

// Tests

console.log(unstretch('llossttttt'), 'lost')
console.log(unstretch('cccccaaaaannnnne'), 'cane')
console.log(unstretch('hhoooneestttt'), 'honest')
console.log(unstretch('ppppooowwddddeeerrrr'), 'powder')
console.log(unstretch('eexxpppppeeccctt'), 'expect')
console.log(unstretch('rrrrepooooorrttt'), 'report')
console.log(unstretch('pppaaaaattteeeennnntt'), 'patent')
console.log(unstretch('mmmeeemoooryy'), 'memory')
console.log(unstretch('vvvvviiiiisssuuaaalll'), 'visual')
console.log(unstretch('eeeennnnsuuurrre'), 'ensure')
console.log(unstretch('iiinncclludddddeee'), 'include')