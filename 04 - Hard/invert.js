// https://edabit.com/challenge/TYcMysG6yy4RKEQPP

const changeCase = (l) => {
  return l === l.toUpperCase() ? l.toLowerCase() : l.toUpperCase();
};

const invert = (s) => {
  return [...s]
    .map((l) => changeCase(l))
    .reverse()
    .join('');
};

// Tests

let [strVector, resVector] = [
  [
    'dLROW YM sI HsEt',
    'This string is CASE and INDEX reversed',
    'ReVeRsIbLe',
    'rAmIfIcAtIoN',
    'IntellectualS',
    'DESREVER xedni DNA esac SI GNIRTS SIHt',
    'ElBiSrEvEr',
    'nOiTaCiFiMaR',
    'sLAUTCELLETNi',
    'CoNSaGuiNiTY',
    'step on NO PETS',
    'dExtErIty cOmplEx',
  ],
  [
    'TeSh iS my worlD',
    'DESREVER xedni DNA esac SI GNIRTS SIHt',
    'ElBiSrEvEr',
    'nOiTaCiFiMaR',
    'sLAUTCELLETNi',
    'This string is CASE and INDEX reversed',
    'ReVeRsIbLe',
    'rAmIfIcAtIoN',
    'IntellectualS',
    'ytInIUgAsnOc',
    'step on NO PETS',
    'XeLPMoC YTiReTXeD',
  ],
];
for (let i in strVector) console.log(invert(strVector[i]), resVector[i]);
