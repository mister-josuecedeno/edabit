const bestFriend = (str, a, b) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === a && str[i + 1] !== b) return false;
  }
  return true;
};

// Tests
console.log(bestFriend('he headed to the store', 'h', 'e'), true);
console.log(bestFriend('i found an ounce with my hound', 'o', 'u'), true);
console.log(bestFriend('those were their thorns they said', 't', 'h'), true);

console.log(bestFriend('we found your dynamite', 'd', 'y'), false);
console.log(bestFriend('look they took the cookies', 'o', 'o'), false);
console.log(bestFriend('go to edabit and meditate', 'e', 'd'), false);
