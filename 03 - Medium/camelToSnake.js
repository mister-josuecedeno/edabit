const camelToSnake = (str) => {
  const regex = /[A-Z]/g;
  const replacer = (str) => `_${str.toLowerCase()}`;
  return str.replace(regex, replacer);
};

// Tests

console.log(camelToSnake('magicCarrots'), 'magic_carrots');
console.log(
  camelToSnake('greatApples for aSmellyRhino'),
  'great_apples for a_smelly_rhino'
);
console.log(camelToSnake('th1sSh0uldB3FineT00'), 'th1s_sh0uld_b3_fine_t00');
