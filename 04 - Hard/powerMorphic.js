const powerMorphic = (num) => {
  let count = 0;

  const morphs = {
    9: 'Polymorphic',
    4: 'Quadrimorphic',
    2: 'Dimorphic',
    1: 'Enamorphic',
    0: 'Amorphic',
  };

  for (let i = 2; i <= 10; i++) {
    (BigInt(num) ** BigInt(i)).toString().endsWith(parseInt(num)) && count++;
  }

  return morphs[count];
};

// Tests
console.log(powerMorphic(0n), 'Polymorphic');
console.log(powerMorphic(1n), 'Polymorphic');
console.log(powerMorphic(4n), 'Quadrimorphic');
console.log(powerMorphic(7n), 'Dimorphic');
console.log(powerMorphic(10n), 'Amorphic');
console.log(powerMorphic(68n), 'Dimorphic');
console.log(powerMorphic(121n), 'Amorphic');
console.log(powerMorphic(501n), 'Quadrimorphic');
console.log(powerMorphic(625n), 'Polymorphic');
console.log(powerMorphic(3376n), 'Enamorphic');
console.log(powerMorphic(2030n), 'Amorphic');
console.log(powerMorphic(3751n), 'Quadrimorphic');
console.log(powerMorphic(9376n), 'Polymorphic');
console.log(powerMorphic(9999n), 'Quadrimorphic');
