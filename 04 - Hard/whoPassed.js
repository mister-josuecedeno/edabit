// https://edabit.com/challenge/jq6Ra5ms4hPTk9GNi

const whoPassed = (students) => {
  return Object.entries(students)
    .filter((s) => s[1].every((g) => eval(g) === 1))
    .map((n) => n[0])
    .sort();
};

// Tests

console.log(
  whoPassed({
    John: ['5/5', '50/50', '10/10', '10/10'],
    Sarah: ['4/5', '50/50', '10/10', '10/10'],
    Adam: ['3/5', '46/50', '9/10', '10/10'],
    Barry: ['5/5', '50/50', '10/10', '10/10'],
  }),
  ['Barry', 'John']
);

console.log(
  whoPassed({
    Zara: ['10/10'],
    Kris: ['10/10'],
    Charlie: ['10/10'],
    Alex: ['10/10'],
  }),
  ['Alex', 'Charlie', 'Kris', 'Zara']
);

console.log(
  whoPassed({
    Zach: ['10/10', '2/4'],
    Fred: ['10/10', '3/4'],
  }),
  []
);

console.log(
  whoPassed({
    John: ['5/5', '50/50', '10/10', '10/10'],
    Sarah: ['4/8', '50/57', '7/10', '10/18'],
    Adam: ['8/10', '22/25', '3/5', '5/5'],
    Barry: ['3/3', '20/20', '5/5', '2/2'],
  }),
  ['Barry', 'John']
);

console.log(
  whoPassed({
    Zara: ['10/10'],
    Kris: ['30/30'],
    Charlie: ['100/100'],
    Alex: ['1/1'],
  }),
  ['Alex', 'Charlie', 'Kris', 'Zara']
);

console.log(
  whoPassed({
    Zach: ['10/10', '2/4'],
    Fred: ['7/9', '2/3'],
  }),
  []
);

console.log(
  whoPassed({
    Halina: [
      '51/86',
      '45/83',
      '41/57',
      '49/96',
      '28/36',
      '26/88',
      '47/59',
      '72/100',
    ],
    Jacob: ['65/65', '87/87', '54/54', '42/42', '72/72', '57/57'],
    Grover: ['58/77', '29/35', '85/95'],
    Claudia: ['81/81', '35/35', '93/93'],
    Deandra: ['72/98'],
    Lon: ['19/27', '44/96', '5/74', '3/3'],
  }),
  ['Claudia', 'Jacob']
);
console.log(
  whoPassed({
    Claudia: ['8/8', '79/79', '93/93', '99/99', '1/1', '59/59'],
    Debra: ['20/22', '68/86', '76/91', '32/55', '23/55'],
    Fernanda: [
      '63/84',
      '46/75',
      '11/94',
      '49/74',
      '31/82',
      '29/95',
      '31/99',
      '43/50',
    ],
    Jacob: ['58/58', '21/21', '1/1', '36/36'],
    Alayna: ['66/95', '83/85', '18/25'],
    Collene: ['9/27'],
    Grover: ['62/64', '2/96', '44/79', '28/81', '62/87'],
    Franklin: ['22/27'],
  }),
  ['Claudia', 'Jacob']
);
console.log(
  whoPassed({
    Deandra: [
      '76/76',
      '42/42',
      '61/61',
      '2/2',
      '21/21',
      '23/23',
      '89/89',
      '46/46',
    ],
    Luba: ['35/100', '5/73'],
    Suzette: ['22/38', '4/83', '28/74', '97/98', '30/81'],
    Kathie: ['30/30', '19/100', '51/58', '4/94'],
    Halina: ['19/20', '8/66', '12/43', '24/51', '58/89'],
    Rudolf: ['70/75'],
  }),
  ['Deandra']
);
console.log(
  whoPassed({
    Ramona: ['100/100', '27/27'],
    Fernanda: ['40/86', '3/38'],
    Frankie: ['61/61'],
    Carmelia: ['61/96', '27/70', '19/68', '1/83', '8/78'],
    Suzette: ['15/58', '51/73', '23/26', '30/87', '15/43'],
    Merilyn: ['93/93', '13/13', '19/19', '2/2', '53/53', '74/74'],
    Jacob: ['29/29', '18/18', '19/19'],
    Debra: ['26/26', '62/62', '44/44'],
  }),
  ['Debra', 'Frankie', 'Jacob', 'Merilyn', 'Ramona']
);
console.log(
  whoPassed({
    Raquel: ['17/17'],
    Griselda: ['15/49'],
    Kathie: ['80/81', '26/80', '83/84'],
    Merilyn: ['99/99', '2/2', '99/99', '28/28', '19/19', '14/14', '95/95'],
  }),
  ['Merilyn', 'Raquel']
);
console.log(
  whoPassed({
    Rudolf: ['1/24', '1/43', '20/57', '44/90', '15/45'],
    Mohammad: ['2/2', '35/35', '69/69', '57/57'],
    Ronna: ['24/73', '79/84', '52/78', '58/99', '16/30', '23/55'],
  }),
  ['Mohammad']
);
console.log(
  whoPassed({
    Collene: ['0/1', '53/53', '11/11', '86/86', '65/65', '93/93'],
    Dennis: ['63/97'],
    Frankie: ['17/17', '88/88', '57/57', '74/74', '57/57', '89/89'],
  }),
  ['Frankie']
);
console.log(
  whoPassed({
    Helen: ['87/87', '89/89', '65/65', '96/96', '37/37'],
    Griselda: ['2/2', '100/100', '40/40'],
    Claudia: ['45/45', '54/54', '95/95', '51/51'],
    Ira: ['79/87'],
    Antionette: ['5/13', '61/95'],
  }),
  ['Claudia', 'Griselda', 'Helen']
);
console.log(whoPassed({ Meghann: ['64/64', '65/65', '6/6'] }), ['Meghann']);
console.log(
  whoPassed({
    Deandra: [
      '69/69',
      '43/43',
      '59/59',
      '67/67',
      '32/32',
      '51/51',
      '5/5',
      '95/95',
    ],
  }),
  ['Deandra']
);
console.log(
  whoPassed({
    Morgan: ['0/47', '92/94', '21/55', '81/92', '26/36'],
    Halina: ['17/17', '92/92', '86/86', '6/6', '48/48', '1/1'],
    Clint: ['80/84', '36/39', '30/63'],
    Erin: ['3/81', '68/76', '50/59', '70/82', '49/62', '35/64', '25/35'],
  }),
  ['Halina']
);
console.log(
  whoPassed({
    Albina: ['88/88', '12/12', '90/90', '17/17', '24/24', '32/32', '28/28'],
    Grover: ['13/26', '18/41'],
    Fernanda: [
      '17/17',
      '25/25',
      '70/70',
      '26/26',
      '95/95',
      '18/18',
      '94/94',
      '64/64',
    ],
    Luba: ['27/88', '77/97', '28/92'],
    Franklin: ['3/37', '30/72'],
    Mohammad: ['58/58', '99/99', '31/31', '15/15'],
    Janina: ['58/58', '68/68', '31/31'],
  }),
  ['Albina', 'Fernanda', 'Janina', 'Mohammad']
);
console.log(
  whoPassed({
    Ferne: [
      '86/86',
      '22/22',
      '24/24',
      '72/72',
      '95/95',
      '61/61',
      '2/2',
      '66/66',
    ],
    Ramona: ['76/76', '27/27'],
  }),
  ['Ferne', 'Ramona']
);
console.log(whoPassed({ Erin: ['25/59'], Fernanda: ['84/84'] }), ['Fernanda']);
console.log(
  whoPassed({
    Moses: ['11/25', '1/61', '25/77', '4/24'],
    Meghann: ['73/73'],
    Shonda: ['10/25', '19/97'],
    Ferne: ['15/15'],
  }),
  ['Ferne', 'Meghann']
);
console.log(
  whoPassed({
    Mohammad: ['25/41'],
    Frankie: ['39/75', '7/27', '2/35', '10/41', '66/78', '6/77', '79/79'],
    Dennis: ['50/75', '28/86', '26/90', '61/73', '38/74'],
    Janina: ['12/53', '53/55', '4/78', '52/85', '3/65', '8/87'],
  }),
  []
);
console.log(whoPassed({ Morgan: ['68/81', '9/71', '9/58', '93/97'] }), []);
console.log(
  whoPassed({
    Maryellen: ['27/93', '3/70'],
    Kathie: ['71/71', '39/39', '64/64'],
    Clint: ['59/93', '38/61', '20/85'],
    Griselda: ['62/98', '30/73', '67/70', '82/97', '19/78', '16/54'],
    Jan: ['17/50', '5/74', '25/68', '7/12', '8/99', '29/83', '6/93', '12/84'],
  }),
  ['Kathie']
);
console.log(whoPassed({ Marilu: ['87/87', '40/40', '22/22'] }), ['Marilu']);
console.log(whoPassed({ Collene: ['58/58', '8/8', '4/4', '48/48', '56/56'] }), [
  'Collene',
]);
console.log(
  whoPassed({
    Halina: ['35/61', '3/69'],
    Shanika: ['98/98'],
    Luba: ['3/3', '82/82'],
    Debra: ['25/25', '70/70', '66/66'],
    Karissa: ['54/66', '24/31', '65/99', '41/47'],
    Jacob: ['3/3', '65/65'],
    Deandra: ['100/100', '32/32', '41/41'],
  }),
  ['Deandra', 'Debra', 'Jacob', 'Luba', 'Shanika']
);
console.log(
  whoPassed({
    Frankie: ['18/64', '19/37'],
    Collene: ['29/29', '22/22', '34/34', '2/2', '50/50'],
    Jan: ['56/56', '80/80', '6/6', '69/69'],
    Marilu: ['13/81', '8/72', '74/76', '62/89'],
    Moses: ['14/14', '78/78', '8/8', '62/62', '19/19'],
    Merilyn: [
      '39/83',
      '18/27',
      '24/34',
      '46/55',
      '6/98',
      '89/96',
      '59/76',
      '13/60',
    ],
    Ira: ['66/66', '25/25', '100/100', '19/19', '37/37'],
  }),
  ['Collene', 'Ira', 'Jan', 'Moses']
);
console.log(
  whoPassed({
    Amos: ['44/95', '31/55', '18/37', '2/16', '21/68', '9/31', '22/100'],
    Fallon: ['30/86', '16/85', '45/78', '57/92', '35/80', '69/100'],
    Collene: ['98/98', '23/23'],
    Clint: ['15/25', '7/15', '31/84'],
    Karissa: ['29/29', '82/82'],
    Margurite: ['3/38', '30/45', '34/64'],
  }),
  ['Collene', 'Karissa']
);
console.log(
  whoPassed({
    Helen: ['48/48'],
    Rudolf: ['15/16', '47/71', '53/100', '42/69', '52/68', '27/82', '66/100'],
    Erin: ['4/4', '74/74'],
    Jacob: ['94/94', '36/36', '100/100', '99/99'],
    Franklin: ['0/18', '35/40', '31/56', '19/74', '53/94', '10/48', '50/66'],
    Kathie: ['55/81'],
    Suzette: ['55/55', '45/45', '38/38', '16/16'],
    Alayna: ['70/70', '46/46', '68/68', '43/43'],
  }),
  ['Alayna', 'Erin', 'Helen', 'Jacob', 'Suzette']
);
console.log(
  whoPassed({
    Charla: [
      '64/100',
      '15/57',
      '41/75',
      '39/80',
      '64/91',
      '5/42',
      '57/99',
      '22/46',
    ],
    Halina: ['40/40', '84/84', '19/19', '47/47', '47/47', '76/76', '95/95'],
    Fallon: [
      '99/99',
      '47/47',
      '14/14',
      '43/43',
      '58/58',
      '7/7',
      '24/24',
      '81/81',
    ],
    Ferne: ['7/74', '19/83', '68/86', '65/93', '1/17'],
    Marilu: ['19/41', '28/60', '1/96', '65/93', '70/77', '15/16'],
  }),
  ['Fallon', 'Halina']
);
console.log(
  whoPassed({
    Collene: [
      '45/45',
      '82/82',
      '15/15',
      '25/25',
      '14/14',
      '3/3',
      '92/92',
      '50/50',
    ],
    Amos: ['2/2', '78/78', '12/12', '2/2', '83/83', '10/10', '97/97', '4/4'],
    Shanika: ['40/40', '9/9', '1/1', '97/97', '10/10'],
    Grover: ['15/15'],
    Antionette: ['65/65', '31/31', '91/91', '38/38', '91/91', '4/4'],
    Clint: ['37/37', '29/29', '0/1', '18/18'],
    Debra: ['39/39'],
  }),
  ['Amos', 'Antionette', 'Collene', 'Debra', 'Grover', 'Shanika']
);
console.log(
  whoPassed({ Fallon: ['3/84'], Chang: ['47/69', '50/96', '0/76'] }),
  []
);
console.log(
  whoPassed({
    Erin: ['42/42', '10/10', '72/72'],
    Shanika: ['24/46', '51/90', '32/99', '34/53', '47/70', '38/71', '12/36'],
    Shonda: ['5/5'],
    Dennis: ['64/97', '17/26', '59/80', '29/93', '78/88', '22/87', '32/69'],
    Collene: ['59/91', '33/92'],
    Ronna: ['82/82', '2/2', '94/94', '34/34', '5/5', '71/71', '7/7'],
  }),
  ['Erin', 'Ronna', 'Shonda']
);
console.log(
  whoPassed({
    Mohammad: ['94/94', '42/42'],
    Karissa: ['3/29', '38/72', '81/95', '16/52', '45/95'],
  }),
  ['Mohammad']
);
console.log(
  whoPassed({
    Ferne: ['3/50'],
    Grover: [
      '2/64',
      '76/84',
      '34/81',
      '9/60',
      '41/58',
      '34/78',
      '10/90',
      '1/94',
    ],
  }),
  []
);
console.log(
  whoPassed({
    Margurite: [
      '12/16',
      '26/89',
      '2/59',
      '5/79',
      '13/58',
      '13/81',
      '28/51',
      '13/88',
    ],
    Jacob: ['7/33', '65/71', '84/96', '25/42', '24/95', '20/72'],
    Morgan: ['43/43'],
    Marilu: ['84/84', '23/23', '53/53', '32/32', '39/39'],
    Antionette: ['53/53', '87/87', '12/12', '72/72'],
    Debra: ['74/74', '54/54', '99/99', '9/9', '64/64', '65/65'],
  }),
  ['Antionette', 'Debra', 'Marilu', 'Morgan']
);
console.log(
  whoPassed({
    Shonda: ['17/17'],
    Monica: ['29/29', '28/28', '80/80'],
    Deandra: ['87/87', '68/68', '62/62', '1/1', '49/49', '10/10', '70/70'],
    Luba: ['21/37', '8/87', '28/85', '56/100', '8/93'],
  }),
  ['Deandra', 'Monica', 'Shonda']
);
console.log(
  whoPassed({
    Shanika: ['44/44', '11/11', '60/60', '20/20', '36/36'],
    Ronna: ['53/53', '82/82', '47/47'],
    Moses: ['2/2', '42/42', '58/58'],
    Charla: ['6/52', '19/80', '21/81'],
  }),
  ['Moses', 'Ronna', 'Shanika']
);
console.log(
  whoPassed({
    Amos: ['9/9', '47/47', '35/35', '49/49', '48/48', '5/5', '13/13', '59/59'],
    Suzette: ['62/71', '7/51'],
  }),
  ['Amos']
);
console.log(
  whoPassed({
    Collene: ['69/69', '67/67'],
    Rudolf: ['20/20', '23/23', '20/20'],
    Frankie: ['19/85', '3/34'],
  }),
  ['Collene', 'Rudolf']
);
console.log(
  whoPassed({
    Franklin: [
      '17/17',
      '9/9',
      '77/77',
      '94/94',
      '32/32',
      '32/32',
      '65/65',
      '32/32',
    ],
  }),
  ['Franklin']
);
console.log(
  whoPassed({
    Shonda: ['20/20', '22/22', '6/6', '35/35', '85/85', '86/86'],
    Raquel: ['53/53', '97/97', '72/72', '40/40'],
    Kathie: ['62/85', '0/40', '79/94', '59/88', '93/99', '9/58'],
    Fallon: ['28/28'],
    Sulema: ['8/66', '36/99', '74/97', '8/55', '1/21', '12/59'],
    Monica: ['83/83', '33/33', '93/93'],
    Ronna: ['100/100', '98/98'],
  }),
  ['Fallon', 'Monica', 'Raquel', 'Ronna', 'Shonda']
);
console.log(whoPassed({ Suzette: ['49/53'] }), []);
console.log(
  whoPassed({
    Claudia: ['42/51'],
    Ferne: ['4/40', '80/96', '11/94', '1/98', '20/85'],
    Ramona: [
      '49/49',
      '43/43',
      '90/90',
      '38/38',
      '89/89',
      '61/61',
      '35/35',
      '1/1',
    ],
    Franklin: ['44/85'],
  }),
  ['Ramona']
);
console.log(
  whoPassed({
    Franklin: ['61/61', '97/97', '49/49', '90/90', '74/74', '25/25'],
    Merilyn: ['91/91'],
    Albina: ['96/96'],
    Lon: ['84/84'],
  }),
  ['Albina', 'Franklin', 'Lon', 'Merilyn']
);
console.log(
  whoPassed({
    Jan: ['54/55'],
    Ira: ['52/77', '53/54', '25/77', '20/46', '29/78'],
    Erin: ['61/72', '2/63', '17/80', '13/84', '5/86'],
    Deandra: ['37/69', '8/79', '43/89', '28/44'],
  }),
  []
);
console.log(
  whoPassed({
    Fernanda: ['89/89', '58/58', '62/62', '22/22', '40/40'],
    Sulema: ['28/64', '63/93', '68/75', '33/49', '54/98'],
  }),
  ['Fernanda']
);
console.log(
  whoPassed({
    Karissa: ['15/15', '83/83', '7/7', '57/57', '3/3'],
    Suzette: ['24/49', '63/99', '66/96', '36/51'],
  }),
  ['Karissa']
);
console.log(
  whoPassed({
    Franklin: ['26/70', '23/76', '7/46', '78/83', '53/98', '36/41', '4/78'],
    Charla: ['10/10', '50/50', '51/51', '0/1', '9/9', '64/64'],
    Monica: ['11/96', '46/72', '35/90', '32/59', '51/63', '9/39'],
    Antionette: ['84/84', '51/51', '42/42', '74/74', '98/98'],
    Rudolf: [
      '34/34',
      '43/43',
      '56/56',
      '62/62',
      '84/84',
      '47/47',
      '73/73',
      '2/2',
    ],
    Deandra: ['34/97', '60/85', '55/91', '9/50', '54/91', '20/75'],
    Jan: ['67/67', '13/13', '66/66', '82/82', '94/94', '59/59'],
    Moses: ['53/66', '7/50'],
  }),
  ['Antionette', 'Jan', 'Rudolf']
);
console.log(
  whoPassed({
    Karissa: [
      '68/70',
      '33/38',
      '38/56',
      '25/65',
      '5/14',
      '0/48',
      '43/83',
      '17/78',
    ],
    Nestor: ['93/93', '1/1', '97/97', '53/53'],
    Halina: ['70/70', '18/18', '86/86', '44/44'],
    Shonda: ['13/76', '22/67', '4/35', '22/79', '64/71', '44/100'],
    Carmelia: ['39/39'],
  }),
  ['Carmelia', 'Halina', 'Nestor']
);
console.log(
  whoPassed({
    Marilu: ['18/75', '10/45', '23/100', '9/13'],
    Kathie: ['47/47', '32/32'],
    Maryellen: [
      '42/50',
      '62/78',
      '44/71',
      '30/58',
      '83/95',
      '43/48',
      '41/43',
      '13/71',
    ],
    Sulema: ['9/62', '31/75', '16/90', '67/93', '2/89'],
    Margurite: ['64/64', '83/83', '53/53', '3/3', '20/20'],
  }),
  ['Kathie', 'Margurite']
);
console.log(
  whoPassed({
    Charla: ['29/97'],
    Monica: [
      '48/48',
      '71/71',
      '59/59',
      '31/31',
      '75/75',
      '26/26',
      '69/69',
      '33/33',
    ],
  }),
  ['Monica']
);
console.log(
  whoPassed({
    Antionette: [
      '31/67',
      '46/73',
      '58/61',
      '73/88',
      '71/86',
      '66/72',
      '15/89',
      '1/28',
    ],
    Jacob: ['13/13'],
    Mohammad: ['23/34', '14/62'],
    Deandra: ['82/94'],
    Sulema: ['85/85', '53/53', '15/15', '51/51'],
    Shonda: ['49/53', '10/27', '5/25', '69/96', '4/11', '71/86'],
    Collene: [
      '75/75',
      '18/18',
      '70/70',
      '35/35',
      '39/39',
      '52/52',
      '45/45',
      '48/48',
    ],
    Marilu: [
      '13/21',
      '29/94',
      '61/83',
      '18/86',
      '27/82',
      '60/81',
      '4/96',
      '59/97',
    ],
  }),
  ['Collene', 'Jacob', 'Sulema']
);
console.log(
  whoPassed({
    Rudolf: ['3/60'],
    Jan: ['44/57', '6/49', '25/40', '25/53', '58/98'],
    Shonda: ['41/41', '60/60', '80/80', '18/18'],
    Lon: ['28/48', '67/76', '10/15'],
    Halina: ['40/96', '66/72', '31/67', '90/91'],
    Janina: ['78/78', '96/96'],
    Margurite: ['20/20', '25/25', '4/4', '5/5', '90/90', '52/52'],
  }),
  ['Janina', 'Margurite', 'Shonda']
);
console.log(
  whoPassed({
    Marilu: ['64/64', '45/45', '81/81'],
    Ramona: ['50/50', '2/2', '25/25', '62/62'],
    Griselda: ['75/75', '31/31', '99/99', '45/45', '52/52'],
    Frankie: ['4/4', '63/63', '99/99'],
    Fernanda: ['80/80'],
    Halina: [
      '33/84',
      '4/93',
      '69/89',
      '39/41',
      '30/77',
      '2/97',
      '61/95',
      '3/79',
    ],
  }),
  ['Fernanda', 'Frankie', 'Griselda', 'Marilu', 'Ramona']
);

// made by @Joshua Señoron
