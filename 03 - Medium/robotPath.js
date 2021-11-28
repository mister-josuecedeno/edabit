function robotPath(commands){
  var a=0, b=0;
  for (var i=0; i<commands.length; ++i)
  {
    if (commands[i]=="n") a++;
    if (commands[i]=="s") a--;
    if (commands[i]=="e") b++;
    if (commands[i]=="w") b--;
  }
  return (a==2 && b==3)||(a==3 && b==-4)
}

// Tests

console.log(robotPath(['s', 'e', 'e', 'n', 'n', 'e', 'n']), true)
console.log(robotPath(['n', 's', 'n', 'n', 'e', 'n', 'w', 'w', 's', 'w', 'w', 'w', 'n']), true)
console.log(robotPath(['n', 's', 'n', 'n', 'n', 'e', 'n', 'w', 'n', 'w', 's', 'w', 'w', 'w', 'n']), false)
console.log(robotPath(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's', 'e', 'w', 'w']), false)
console.log(robotPath(['n', 'e', 's', 'w', 'n', 'e', 's', 'w', 'w', 's', 'n', 'e']), false)

