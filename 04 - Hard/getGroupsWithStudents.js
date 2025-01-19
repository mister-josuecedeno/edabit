// https://edabit.com/challenge/Ps7nX3XdCLDN4Z33y

const reverse = (str) => {
  const regex = /[a-zA-Z]/g;
  const letters = str.match(regex).reverse();
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (+str[i] >= 0) {
      result += str[i];
    } else {
      result += letters.shift();
    }
  }

  return result;
}

// Tests

console.log(reverse("ab89c"), "cb89a")
console.log(reverse("jkl5mn923o"), "onm5lk923j")
console.log(reverse("123a45"), "123a45")
console.log(reverse("a1b1c"), "c1b1a")

