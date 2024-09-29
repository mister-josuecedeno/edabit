// https://edabit.com/challenge/6WCXBFrY3jvbJe3xm

const dominoChain = (dominos) => {
  const chain = [];
  
  for (let i = 0; i < dominos.length; i++) {
    let current = dominos[i];
    if (current === " " || current === undefined || current === "/") {
      chain.push(dominos.slice(i));
      break;
    } else {
      chain.push('/');
    }
  }
  return chain.join(''); 
}

// Tests
console.log(dominoChain("||| ||||//| |/"), "/// ||||//| |/")
console.log(dominoChain("|||||"), "/////")
console.log(dominoChain(" ///"), " ///")
console.log(dominoChain(""), "")
console.log(dominoChain(" "), " ")
console.log(dominoChain("||||| |||"), "///// |||")
console.log(dominoChain("|||||/|||"), "//////|||")
