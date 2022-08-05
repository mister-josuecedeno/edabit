const signAll = (obj, name) => {
  for (const key in obj) {
    if (key === 'signature') {
      obj[key] = name;
    } else {
      obj[key]['signature'] = name;
    }
  }

  return obj;
};

// Tests

const obj1 = {
  kitchen: {
    painting: 100,
    piano: 1000,
    signature: '',
  },
  signature: '',
};

console.log(signAll(obj1, 'Josue'));
