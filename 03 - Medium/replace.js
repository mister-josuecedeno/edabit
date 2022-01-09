const replace = (str, r) => {
  const regex = new RegExp(`[${r}]`, 'g');
  return str.replace(regex, '#');
}

// Tests

console.log(replace("abcdef", "c-e"), "ab###f")
console.log(replace("rattle", "r-z"), "#a##le")
console.log(replace("microscopic", "i-i"), "m#croscop#c")
console.log(replace("bountiful", "a-o"), "##u#t##u#")
console.log(replace("zebra", "a-z"), "#####")
console.log(replace("mount", "a-e"), "mount")
console.log(replace("", "a-z"), "")
