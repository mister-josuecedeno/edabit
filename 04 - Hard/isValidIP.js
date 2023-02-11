// https://edabit.com/challenge/S5nPFF44x7JceXPBn

// Not my solution
function isValidIP(str) {
  if (/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(str)) {
    str = str.split('.');
    for (var i in str) {
      if (parseInt(str[i]).toString().length !== str[i].length || str[i] > 255)
        return false;
    }
    return true;
  }

  return false;
}

// Tests

console.log(isValidIP('12.255.56.1'), true, 'This is a valid IPv4');
console.log(isValidIP('1.2.3.4'), true, 'This is a valid IPv4');
console.log(isValidIP('1.2.3'), false, 'IPv4 contain exactly four octets.');
console.log(isValidIP('1.2.3.4.5'), false, 'IPv4 contain exactly four octets.');
console.log(isValidIP('123.45.67.89'), true, 'This is a valid IPv4');
console.log(
  isValidIP('123.456.78.90'),
  false,
  'Each octet must be a decimal value between 0 and 255.'
);
console.log(
  isValidIP('123.045.067.089'),
  false,
  'Each octet must be a decimal value between 0 and 255.'
);
console.log(isValidIP(''), false, 'An empty string is invalid.');
console.log(
  isValidIP('abc.def.ghi.jkl'),
  false,
  'This is not in dot decimal format.'
);
console.log(
  isValidIP('123.456.789.0'),
  false,
  'Each octet must be a decimal value between 0 and 255.'
);
console.log(isValidIP('12.34.56'), false, 'IPv4 contain exactly four octets.');
console.log(isValidIP('12.34.56 .1'), false, 'Check for spaces.');
console.log(isValidIP('12.34.56.-1'), false, 'Check for invalid characters.');
console.log(
  isValidIP('123.045.067.089'),
  false,
  'Each octet must be a decimal value between 0 and 255.'
);
console.log(isValidIP('192.168.1.1'), true, 'This is a valid IPv4');
console.log(
  isValidIP('192.168.1.1  '),
  false,
  'IPs with trailing spaces are invalid.'
);
console.log(
  isValidIP('  192.168.1.1'),
  false,
  'IPs with leading spaces are invalid.'
);
console.log(isValidIP('0.232.47.227'), true, 'This is a valid IPv4');
console.log(
  isValidIP('1e0.1e0.1e0.1e0'),
  false,
  'Each octet must be a decimal value between 0 and 255.'
);
