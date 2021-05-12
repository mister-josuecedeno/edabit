const stringExpansion = (txt) => {
  let newTxt = '';

  // Split text into regex groups
  const regex = /([0-9]?[a-z]+)/gi;
  const groups = txt.match(regex) === null ? [''] : txt.match(regex);

  // Extract n and repeat
  const repeatTxt = (txt) => {
    if (txt.length === 1 || isNaN(+txt[0])) return txt;

    let n = txt[0];
    let ltrs = [...txt].splice(1);

    return ltrs.map((l) => l.repeat(n)).join('');
  };

  // loop regex pattern matches
  for (const g of groups) {
    newTxt += repeatTxt(g);
  }

  return newTxt;
};

// tests
console.log(stringExpansion('3M2u5b2a1s1h2i1r'), 'MMMuubbbbbaashiir');
console.log(stringExpansion('3Mat'), 'MMMaaattt');
console.log(stringExpansion('3M123u42b12a'), 'MMMuuubbaa');
console.log(stringExpansion('3n6s7f3n'), 'nnnssssssfffffffnnn');
console.log(stringExpansion('0d4n8d2b'), 'nnnnddddddddbb');
console.log(stringExpansion('0c3b1n7m'), 'bbbnmmmmmmm');
console.log(stringExpansion('7m3j4ik2a'), 'mmmmmmmjjjiiiikkkkaa');
console.log(stringExpansion('3A5m3B3Y'), 'AAAmmmmmBBBYYY');
console.log(stringExpansion('5M0L8P1'), 'MMMMMPPPPPPPP');
console.log(stringExpansion('2B'), 'BB');
console.log(stringExpansion('7M1n3K'), 'MMMMMMMnKKK');
console.log(stringExpansion('A4g1b4d'), 'Aggggbdddd');
console.log(stringExpansion('111111'), '');
console.log(stringExpansion('4d324n2'), 'ddddnnnn');
console.log(stringExpansion('5919nf3u'), 'nnnnnnnnnfffffffffuuu');
console.log(stringExpansion('2n1k523n4i'), 'nnknnniiii');
console.log(stringExpansion('6o23M32d'), 'ooooooMMMdd');
console.log(stringExpansion('1B44n3r'), 'Bnnnnrrr');
console.log(stringExpansion('M21d1r32'), 'Mdr');
console.log(stringExpansion('23M31r2r2'), 'MMMrrr');
console.log(stringExpansion('8494mM25K2A'), 'mmmmMMMMKKKKKAA');
console.log(stringExpansion('4A46D6B3C'), 'AAAADDDDDDBBBBBBCCC');
console.log(stringExpansion('23D42B3A'), 'DDDBBAAA');
console.log(stringExpansion('143D36C1A'), 'DDDCCCCCCA');
console.log(stringExpansion('asdf'), 'asdf');
console.log(stringExpansion('23jbjl1eb'), 'jjjbbbjjjllleb');
console.log(stringExpansion('43ibadsr3'), 'iiibbbaaadddsssrrr');
console.log(
  stringExpansion('123p9cdbjs'),
  'pppcccccccccdddddddddbbbbbbbbbjjjjjjjjjsssssssss'
);
console.log(stringExpansion('2309ew7eh'), 'eeeeeeeeewwwwwwwwweeeeeeehhhhhhh');
console.log(
  stringExpansion('312987rfebd'),
  'rrrrrrrfffffffeeeeeeebbbbbbbddddddd'
);
console.log(stringExpansion('126cgec'), 'ccccccggggggeeeeeecccccc');
console.log(stringExpansion('1chwq3rfb'), 'chwqrrrfffbbb');
console.log(stringExpansion('389fg21c'), 'fffffffffgggggggggc');
console.log(
  stringExpansion('239vbsac'),
  'vvvvvvvvvbbbbbbbbbsssssssssaaaaaaaaaccccccccc'
);
console.log(stringExpansion('davhb327vuc'), 'davhbvvvvvvvuuuuuuuccccccc');
console.log(
  stringExpansion('cvyb239bved2dv'),
  'cvybbbbbbbbbbvvvvvvvvveeeeeeeeedddddddddddvv'
);
console.log(stringExpansion(''), '');
// Mubashir
