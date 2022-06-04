const createSquare = (length) => {
  if (length < 1) return '';
  if (length === 1) return '#';

  let result = '';

  for (let i = 0; i < length; i++) {
    if (i === 0) {
      result += '#'.repeat(length) + '\n';
    } else if (i === length - 1) {
      result += '#'.repeat(length);
    } else {
      result += '#' + ' '.repeat(length - 2) + '#' + '\n';
    }
  }

  return result;
};

// Tests

console.log(createSquare(-1), '');
console.log(createSquare(0), '');
console.log(createSquare(null), '');
console.log(createSquare(1), '#');
console.log(createSquare(2), '##\n##');
console.log(createSquare(3), '###\n# #\n###');
console.log(createSquare(4), '####\n#  #\n#  #\n####');
console.log(
  createSquare(10),
  '##########\n#        #\n#        #\n#        #\n#        #\n#        #\n#        #\n#        #\n#        #\n##########'
);
console.log(
  createSquare(20),
  '####################\n#                  #\n#                  #\n#                  #\n#                  #\n#                  #\n#                  #\n#                  #\n#                  #\n#                  #\n#                  #\n#                  #\n#                  #\n#                  #\n#                  #\n#                  #\n#                  #\n#                  #\n#                  #\n####################'
);
console.log(
  createSquare(12),
  '############\n#          #\n#          #\n#          #\n#          #\n#          #\n#          #\n#          #\n#          #\n#          #\n#          #\n############'
);
console.log(
  createSquare(50),
  '##################################################\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n##################################################'
);
console.log(
  createSquare(30),
  '##############################\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n##############################'
);
console.log(
  createSquare(21),
  '#####################\n#                   #\n#                   #\n#                   #\n#                   #\n#                   #\n#                   #\n#                   #\n#                   #\n#                   #\n#                   #\n#                   #\n#                   #\n#                   #\n#                   #\n#                   #\n#                   #\n#                   #\n#                   #\n#                   #\n#####################'
);
console.log(
  createSquare(33),
  '#################################\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#################################'
);
console.log(
  createSquare(80),
  '################################################################################\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n################################################################################'
);
console.log(getLength(createSquare(8000)), 64007999);
console.log(getLength(createSquare(4025)), 16204649);
console.log(getLength(createSquare(3018)), 9111341);
console.log(getLength(createSquare(2020)), 4082419);
console.log(getLength(createSquare(9856)), 97150591);
console.log(getLength(createSquare(7542)), 56889305);
console.log(getLength(createSquare(12540)), 157264139);
console.log(getLength(createSquare(13021)), 169559461);
console.log(getLength(createSquare(16200)), 262456199);
console.log(getLength(createSquare(16383)), 268419071);
console.log(getLength(createSquare(10235)), 104765459);
console.log(getLength(createSquare(15465)), 239181689);

function getLength(string) {
  if (typeof string != 'string') {
    return 0;
  } else {
    return string.length;
  }
}
