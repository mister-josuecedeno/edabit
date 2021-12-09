const getXP = (obj) => {
  const xp = {
    'Very Easy' : 5,
	  'Easy' : 10,
	  'Medium' : 20,
	  'Hard' : 40,
	  'Very Hard' : 80
  }

  let total = 0;

  for (const o in obj) {
    total += obj[o] * xp[o];
  }
  
  return `${total}XP`;
}

// Tests

console.log(getXP({
	'Very Easy' : 89,
	'Easy' : 77,
	'Medium' : 30,
	'Hard' : 4,
	'Very Hard' : 1
}), '2055XP');

console.log(getXP({
	'Very Easy' : 254,
	'Easy' : 32,
	'Medium' : 65,
	'Hard' : 51,
	'Very Hard' : 34
}), '7650XP');


console.log(getXP({
	'Very Easy' : 11,
	'Easy' : 0,
	'Medium' : 2,
	'Hard' : 0,
	'Very Hard' : 27
}), '2255XP');


