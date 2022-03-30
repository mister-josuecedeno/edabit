const res = [
  'tall height',
  'tall height',
  'short height',
  'medium height',
  'tall height',
];

function countTall(res) {
  const REGEXP = /(?<=tall)/;
  return res.filter((x) => REGEXP.test(x)).length;
}
