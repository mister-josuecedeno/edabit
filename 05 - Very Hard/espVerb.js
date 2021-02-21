const espVerb = (verbo) => {
  const prefix = verbo.slice(0, -2);
  const vowel = verbo.slice(-2, -1);
  const iVowel = vowel === 'i' ? 'e' : vowel;
  const accents = {
    a: 'ái',
    e: 'éi',
    i: 'í',
  };

  return `Yo ${prefix}o, tú ${prefix}${iVowel}s, él ${prefix}${iVowel}, nosotros ${prefix}${vowel}mos, vosotros ${prefix}${accents[vowel]}s, ellos ${prefix}${iVowel}n.`;
};

// Tests
console.log(
  espVerb('pasar'),
  'Yo paso, tú pasas, él pasa, nosotros pasamos, vosotros pasáis, ellos pasan.'
);
console.log(
  espVerb('deber'),
  'Yo debo, tú debes, él debe, nosotros debemos, vosotros debéis, ellos deben.'
);
console.log(
  espVerb('abrir'),
  'Yo abro, tú abres, él abre, nosotros abrimos, vosotros abrís, ellos abren.'
);
console.log(
  espVerb('hablar'),
  'Yo hablo, tú hablas, él habla, nosotros hablamos, vosotros habláis, ellos hablan.'
);
console.log(
  espVerb('correr'),
  'Yo corro, tú corres, él corre, nosotros corremos, vosotros corréis, ellos corren.'
);
console.log(
  espVerb('vivir'),
  'Yo vivo, tú vives, él vive, nosotros vivimos, vosotros vivís, ellos viven.'
);
console.log(
  espVerb('quedar'),
  'Yo quedo, tú quedas, él queda, nosotros quedamos, vosotros quedáis, ellos quedan.'
);
console.log(
  espVerb('comprender'),
  'Yo comprendo, tú comprendes, él comprende, nosotros comprendemos, vosotros comprendéis, ellos comprenden.'
);
console.log(
  espVerb('unir'),
  'Yo uno, tú unes, él une, nosotros unimos, vosotros unís, ellos unen.'
);
