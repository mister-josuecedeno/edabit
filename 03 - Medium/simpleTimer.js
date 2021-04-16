const simpleTimer = (n) => {
  let hr = 0;
  let min = 0;
  let sec = 0;

  hr = Math.floor(n / (60 * 60));
  n = n % (60 * 60);
  min = Math.floor(n / 60);
  sec = n % 60;

  return `${formatNumber(hr)}:${formatNumber(min)}:${formatNumber(sec)}`;
};

const formatNumber = (n) => {
  return `${n}`.length < 2 ? `0${n}` : `${n}`;
};

// Tests
console.log(simpleTimer(0), '00:00:00');
console.log(simpleTimer(59), '00:00:59');
console.log(simpleTimer(60), '00:01:00');
console.log(simpleTimer(3599), '00:59:59');
console.log(simpleTimer(3600), '01:00:00');
console.log(simpleTimer(86399), '23:59:59');
console.log(simpleTimer(86400), '24:00:00');
console.log(simpleTimer(359999), '99:59:59');
// Mubashir
