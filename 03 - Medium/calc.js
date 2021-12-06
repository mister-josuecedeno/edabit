const calc = (str) => {
  const num1 = [...str].map(n => n.charCodeAt(0))
                     .join('');

  const regex = /[7]/g;
  let num2 = num1.replace(regex,'1');

  let one = [...num1].reduce((a,c) => a + +c, 0);
  let two = [...num2].reduce((a,c) => a + +c, 0);
  
  return one - two;
}

// Tests

console.log(calc('ABCDabcd'), 12)
console.log(calc('cdefgh'), 0)
console.log(calc('ifkhchlhfde'), 6) 
console.log(calc('aaaaaddddrijkl'), 36) 
console.log(calc('abcdefghijklmnopqrstuvwxyz'), 18)
console.log(calc('AABBCC'), 12) 
console.log(calc('ABCDEFGH'), 24) 
console.log(calc('anmatmudtr'), 18) 
console.log(calc('suwvete'), 6) 
console.log(calc('edabit'), 6) 
console.log(calc('EDABIT'), 6) 
