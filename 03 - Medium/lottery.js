// set-up
const getCharCodes = (str) => {
  return [...str].map((l) => l.charCodeAt(0));
};

console.log(getCharCodes('ABC'));

const isMiniWin = (ticket) => {
  const [letters, number] = ticket;
  const codes = getCharCodes(letters);
  return codes.some((n) => n === number);
};

const lottery = (ticket, win) => {
  return;
};

// Tests

console.log(
  lottery(
    [
      ['YYW', 70],
      ['WXK', 65],
      ['RPDI', 88],
    ],
    2
  ),
  'Loser!'
);
console.log(
  lottery(
    [
      ['KG', 80],
      ['NTBBVZ', 79],
      ['CI', 73],
      ['AGXMEE', 74],
      ['IU', 68],
      ['VOSP', 84],
    ],
    1
  ),
  'Winner!'
);
console.log(
  lottery(
    [
      ['ZSAMZB', 81],
      ['XWWCXP', 72],
      ['SYBRQOHP', 88],
      ['HJSVV', 75],
    ],
    1
  ),
  'Loser!'
);
console.log(
  lottery(
    [
      ['GM', 84],
      ['KLJ', 86],
      ['UOF', 77],
      ['JKC', 84],
      ['RUI', 72],
    ],
    3
  ),
  'Loser!'
);
console.log(
  lottery(
    [
      ['CXFAFUOW', 90],
      ['VKKC', 74],
      ['OPYVAUR', 84],
      ['WTMRW', 79],
      ['ZIL', 84],
      ['TDQMZD', 74],
      ['MR', 66],
      ['IQ', 86],
      ['JTBX', 88],
      ['ZJKX', 77],
    ],
    4
  ),
  'Loser!'
);
console.log(
  lottery(
    [
      ['SHUT', 85],
      ['DOWPKSLD', 80],
      ['QOOGBTDG', 85],
      ['EID', 68],
      ['EZKKAEYW', 81],
      ['OYQBJCJE', 86],
      ['WYTDAMFI', 87],
      ['CW', 89],
      ['BICKVN', 76],
      ['BQH', 79],
    ],
    3
  ),
  'Winner!'
);
console.log(
  lottery(
    [
      ['GITVQFQ', 65],
      ['VCQ', 71],
      ['DLK', 70],
      ['HUVMWH', 80],
      ['PLUYERTX', 68],
      ['JVJSHC', 81],
      ['OUSXBLP', 77],
      ['IGNCP', 82],
      ['LV', 65],
    ],
    9
  ),
  'Loser!'
);
console.log(
  lottery(
    [
      ['CKLD', 80],
      ['VDGDL', 78],
      ['LKAJBSPM', 74],
      ['CCPNIE', 67],
      ['GS', 77],
      ['QYWGWS', 83],
      ['XLJUE', 73],
      ['CMUCLWE', 70],
      ['MHM', 90],
    ],
    8
  ),
  'Loser!'
);
console.log(
  lottery(
    [
      ['TRJZKKCQ', 81],
      ['KYC', 80],
      ['WU', 66],
      ['MFTWCFZ', 83],
      ['TNIRSP', 72],
      ['VC', 86],
      ['AINOS', 87],
      ['RGROXMF', 86],
      ['URKVFY', 70],
    ],
    3
  ),
  'Winner!'
);
console.log(
  lottery(
    [
      ['XONLHEB', 71],
      ['FXMR', 65],
      ['WMGY', 89],
    ],
    1
  ),
  'Winner!'
);
