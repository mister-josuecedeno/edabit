const secret = (params) => {
  const [el, ...classes] = params.split(".");
  return `<${el} class="${classes.join(' ')}"></${el}>`;
}

// Tests

console.log(secret("p.one.two.three"), `<p class="one two three"></p>`)
console.log(secret("p.one"), `<p class="one"></p>`)
console.log(secret("h3.one"), `<h3 class="one"></h3>`)
console.log(secret("p.four.five"), `<p class="four five"></p>`)
console.log(secret("h1.four.five"), `<h1 class="four five"></h1>`)
console.log(secret("p.a.b.c.d"), `<p class="a b c d"></p>`)
