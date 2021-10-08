const accum = (str) => {
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    let cap = [...str][i].toUpperCase();
    let repeat = [...str][i].toLowerCase().repeat(i);
    newStr += `${cap}${repeat}`
    newStr += i == str.length - 1 ? '' : '-';
  }

  return newStr;
}

// Tests

console.log(accum("abcd"), "A-Bb-Ccc-Dddd");
console.log(accum("RqaEzty"), "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy");
console.log(accum("cwAt"), "C-Ww-Aaa-Tttt");
console.log(accum("VgyCdnQa"), "V-Gg-Yyy-Cccc-Ddddd-Nnnnnn-Qqqqqqq-Aaaaaaaa");
console.log(accum("nRBSdNOsMl"), "N-Rr-Bbb-Ssss-Ddddd-Nnnnnn-Ooooooo-Ssssssss-Mmmmmmmmm-Llllllllll");
console.log(accum("nuE"), "N-Uu-Eee");
console.log(accum("RlDrhZuQaqsoHEfziByObtMxkFCJVe"), "R-Ll-Ddd-Rrrr-Hhhhh-Zzzzzz-Uuuuuuu-Qqqqqqqq-Aaaaaaaaa-Qqqqqqqqqq-Sssssssssss-Oooooooooooo-Hhhhhhhhhhhhh-Eeeeeeeeeeeeee-Fffffffffffffff-Zzzzzzzzzzzzzzzz-Iiiiiiiiiiiiiiiii-Bbbbbbbbbbbbbbbbbb-Yyyyyyyyyyyyyyyyyyy-Oooooooooooooooooooo-Bbbbbbbbbbbbbbbbbbbbb-Tttttttttttttttttttttt-Mmmmmmmmmmmmmmmmmmmmmmm-Xxxxxxxxxxxxxxxxxxxxxxxx-Kkkkkkkkkkkkkkkkkkkkkkkkk-Ffffffffffffffffffffffffff-Ccccccccccccccccccccccccccc-Jjjjjjjjjjjjjjjjjjjjjjjjjjjj-Vvvvvvvvvvvvvvvvvvvvvvvvvvvvv-Eeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
console.log(accum("EXpzPFx"), "E-Xx-Ppp-Zzzz-Ppppp-Ffffff-Xxxxxxx");
console.log(accum("NU"), "N-Uu");
console.log(accum("g"), "G");
