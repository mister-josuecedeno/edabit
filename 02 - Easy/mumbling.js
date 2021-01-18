// Version 1: for of loop, toUpperCase, toLoweerCase, repeat, slice (11 lines)
// const mumbling1 = (str) => {
//   let result = '';
//   let n = 0;

//   for (let chr of str) {
//     result += chr.toUpperCase() + chr.toLowerCase().repeat(n) + '-';
//     n++;
//   }

//   return result.slice(0, -1);
// };

// Refactored spread, map (using index), toUpperCase, repeat, join (5 lines)
const mumbling = (str) => {
  return [...str]
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join('-');
};

// Tests
console.log(
  mumbling('MubAshIr'),
  'M-Uu-Bbb-Aaaa-Sssss-Hhhhhh-Iiiiiii-Rrrrrrrr'
);
console.log(mumbling('maTT'), 'M-Aa-Ttt-Tttt');
console.log(
  mumbling('airForce'),
  'A-Ii-Rrr-Ffff-Ooooo-Rrrrrr-Ccccccc-Eeeeeeee'
);
console.log(mumbling('EdaBit'), 'E-Dd-Aaa-Bbbb-Iiiii-Tttttt');
console.log(
  mumbling('PaKiStAn'),
  'P-Aa-Kkk-Iiii-Sssss-Tttttt-Aaaaaaa-Nnnnnnnn'
);
