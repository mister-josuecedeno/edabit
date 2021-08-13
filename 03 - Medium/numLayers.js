const numLayers = (folds) => {
  const BASE_THICKNESS = 0.5;

  return `${(BASE_THICKNESS * Math.pow(2, folds)) / 1000}m`;
};

// Tests

console.log(numLayers(0), '0.0005m');
console.log(numLayers(1), '0.001m');
console.log(numLayers(2), '0.002m');
console.log(numLayers(3), '0.004m');
console.log(numLayers(4), '0.008m');
console.log(numLayers(5), '0.016m');
console.log(numLayers(6), '0.032m');
console.log(numLayers(7), '0.064m');
console.log(numLayers(8), '0.128m');
console.log(numLayers(9), '0.256m');
console.log(numLayers(10), '0.512m');
console.log(numLayers(11), '1.024m');
console.log(numLayers(12), '2.048m');
console.log(numLayers(13), '4.096m');
console.log(numLayers(14), '8.192m');
console.log(numLayers(15), '16.384m');
console.log(numLayers(16), '32.768m');
console.log(numLayers(17), '65.536m');
console.log(numLayers(18), '131.072m');
console.log(numLayers(19), '262.144m');
console.log(numLayers(20), '524.288m');
console.log(numLayers(21), '1048.576m');
console.log(numLayers(22), '2097.152m');
console.log(numLayers(23), '4194.304m');
console.log(numLayers(24), '8388.608m');
console.log(numLayers(25), '16777.216m');
console.log(numLayers(26), '33554.432m');
console.log(numLayers(27), '67108.864m');
console.log(numLayers(28), '134217.728m');
console.log(numLayers(29), '268435.456m');
console.log(numLayers(30), '536870.912m');
console.log(numLayers(31), '1073741.824m');
console.log(numLayers(32), '2147483.648m');
console.log(numLayers(33), '4294967.296m');
console.log(numLayers(34), '8589934.592m');
console.log(numLayers(35), '17179869.184m');
console.log(numLayers(36), '34359738.368m');
console.log(numLayers(37), '68719476.736m');
console.log(numLayers(38), '137438953.472m');
console.log(numLayers(39), '274877906.944m');
console.log(numLayers(40), '549755813.888m');
console.log(numLayers(41), '1099511627.776m');
console.log(numLayers(42), '2199023255.552m');
console.log(numLayers(43), '4398046511.104m');
console.log(numLayers(44), '8796093022.208m');
console.log(numLayers(45), '17592186044.416m');
console.log(numLayers(46), '35184372088.832m');
console.log(numLayers(47), '70368744177.664m');
console.log(numLayers(48), '140737488355.328m');
console.log(numLayers(49), '281474976710.656m');
console.log(numLayers(50), '562949953421.312m');
console.log(numLayers(51), '1125899906842.624m');
console.log(numLayers(52), '2251799813685.248m');
console.log(numLayers(53), '4503599627370.496m');
console.log(numLayers(54), '9007199254740.992m');
console.log(numLayers(55), '18014398509481.984m');
console.log(numLayers(56), '36028797018963.97m');
console.log(numLayers(57), '72057594037927.94m');
console.log(numLayers(58), '144115188075855.88m');
console.log(numLayers(59), '288230376151711.75m');
console.log(numLayers(60), '576460752303423.5m');
