const longestNonrepeatingSubstring = (letters) => {
  let longest = '';
  let str = '';
  let current, next;

  for (let i = 0; i < letters.length; i++) {
    // Build string
    str += letters[i];

    // Compare to same size string
    l = str.length;
    next = letters.slice(i, i + l);
  }

  return longest;
};

// Tests
console.log(longestNonrepeatingSubstring('abcabcbb'), 'abc');
// console.log(longestNonrepeatingSubstring('aaaaaa'), 'a');
// console.log(longestNonrepeatingSubstring('abcde'), 'abcde');
// console.log(longestNonrepeatingSubstring('abcda'), 'abcd');
// console.log(longestNonrepeatingSubstring('aaccddeeffb'), 'ac');
// console.log(longestNonrepeatingSubstring('abdde'), 'abd');
// console.log(longestNonrepeatingSubstring('ccdddcccc'), 'cd');
// console.log(longestNonrepeatingSubstring('cdxdxccxc'), 'cdx');
// console.log(longestNonrepeatingSubstring('abddefgh'), 'defgh');
// console.log(longestNonrepeatingSubstring('abcdabcd'), 'abcd');
// console.log(longestNonrepeatingSubstring('abddebcc'), 'debc');
// console.log(longestNonrepeatingSubstring('xyxxyzyzy'), 'xyz');
// console.log(longestNonrepeatingSubstring('kjlmjsdeee'), 'lmjsde');
// console.log(longestNonrepeatingSubstring('kjlmjsdfew'), 'lmjsdfew');
// console.log(longestNonrepeatingSubstring('kjlmjsdfewii'), 'lmjsdfewi');
// console.log(longestNonrepeatingSubstring('kjlmjjiiiidfewii'), 'idfew');
// console.log(longestNonrepeatingSubstring('kjlmjjiiiidfiwii'), 'kjlm');
