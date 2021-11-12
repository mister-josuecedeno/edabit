const stmid = (str) => {

  const getFirst = (word) => {
    return word.slice(0,1);
  }

  const getMiddle = (word) => {
    let middle = Math.floor([...word].length / 2);
    return [...word][middle];
  }
  
  return str.split(' ')
            .map(w => w.length % 2 ? getMiddle(w) : getFirst(w))
            .join('');
}

// Tests

console.log(stmid("Alexa have to paid"), "ehtp")
console.log(stmid("Th3 0n3 4nd 0n1y") , "hnn0")
console.log(stmid("who is the winner"), "hihw")
