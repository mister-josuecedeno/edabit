const flickSwitch = (arr) => {
  let _switch = true;

  return arr.map(el => {
    if(el === "flick"){
      _switch = !_switch;
    }

    return _switch;
  });
}

// Tests
console.log(flickSwitch(['edabit', 'flick', 'eda', 'bit']), [true, false, false, false])
console.log(flickSwitch(['flick', 11037, 3.14, 53]), [false, false, false, false])
console.log(flickSwitch([false, false, 'flick', 'sheep', 'flick']), [true, true, false, false, true])
console.log(flickSwitch([flickSwitch]), [true])
console.log(flickSwitch([('john', 'smith', 'susan'), 'flick']), [true, false])
console.log(flickSwitch(['flick', 'flick', 'flick', 'flick', 'flick']), [false, true, false, true, false])
console.log(flickSwitch([]), [])

// Author: Joshua Señoron
