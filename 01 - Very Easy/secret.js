// Create a function based on the input and output.

// Solution

const secret = (element) => {
  const [el, n] = element.split('*');
  return `<${el}></${el}>`.repeat(n);
};

// Tests
console.log(secret('div*2'), `<div></div><div></div>`);
console.log(secret('p*1'), `<p></p>`);
console.log(secret('li*3'), `<li></li><li></li><li></li>`);
console.log(secret('h1*4'), `<h1></h1><h1></h1><h1></h1><h1></h1>`);
console.log(secret('ul*2'), `<ul></ul><ul></ul>`);
