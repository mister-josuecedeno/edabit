// https://edabit.com/challenge/P7SoyRXhQrhdZTFak

const canBuild = (arr) => {
  let result = true;

  for (let i = 0; i < arr.length - 1; i++) {
    let current = arr[i];
    let next = arr[i + 1];
    let index = next.indexOf(current);
    if (index === -1 || next.length != current.length + 1) {
      result = false;
      break;
    }
  }

  return result;
};

// Tests

console.log(canBuild(['a', 'at', 'ate', 'late', 'plate', 'plates']), true);
console.log(
  canBuild(['u', 'ut', 'but', 'butt', 'butte', 'butter', 'buttery']),
  true
);
console.log(
  canBuild(['a', 'ka', 'ika', 'pika', 'pikac', 'pikach', 'pikachu']),
  true
);
console.log(
  canBuild(['a', 'at', 'tat', 'stat', 'state', 'estate', 'estates']),
  true
);
console.log(
  canBuild([
    'o',
    'ol',
    'old',
    'bold',
    'bolde',
    'mbolde',
    'embolde',
    'embolden',
  ]),
  true
);
console.log(canBuild(['mean', 'meany']), true);
console.log(canBuild(['at', 'cat', 'cate', 'cater', 'caters']), true);
console.log(
  canBuild(['a', 'at', 'ate', 'late', 'plate', 'plater', 'platter']),
  false
);
console.log(canBuild(['i', 'it', 'bit', 'bite', 'biters']), false);
console.log(
  canBuild(['e', 'tea', 'teac', 'teach', 'teache', 'teacher', 'teachers']),
  false
);
console.log(canBuild(['m', 'ma', 'man', 'many', 'meany']), false);
console.log(canBuild(['o', 'op', 'top', 'stop', 'stops', 'stoops']), false);
console.log(canBuild(['air', 'air', 'airy', 'fairy']), false);
console.log(canBuild(['men', 'mean', 'meany']), false);
