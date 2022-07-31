vehicles = [
  {
    make: 'toyota',
    color: 'red',
    engine: 'v6',
    type: 'hatchback',
    year: 2018,
    mileage: 113312,
    isUsed: true,
  },
  {
    make: 'toyota',
    color: 'blue',
    engine: 'v6',
    type: 'hatchback',
    year: 2018,
    mileage: 324312,
    isUsed: true,
  },
  {
    make: 'toyota',
    color: 'yellow',
    engine: 'v6',
    type: 'hatchback',
    year: 2018,
    mileage: 113452,
    isUsed: false,
  },
  {
    make: 'ford',
    color: 'blue',
    engine: 'v4',
    type: 'car',
    year: 2012,
    mileage: 0,
    isUsed: true,
  },
  {
    make: 'ford',
    color: 'blue',
    engine: 'v4',
    type: 'car',
    year: 2012,
    mileage: 0,
    isUsed: true,
  },
  {
    make: 'ford',
    color: 'blue',
    engine: 'v4',
    type: 'car',
    year: 2012,
    mileage: 0,
    isUsed: true,
  },
  {
    make: 'mazda',
    color: 'grey',
    engine: 'v8',
    type: 'sedan',
    year: 2021,
    mileage: 0,
    isUsed: false,
  },
  {
    make: 'ford',
    color: 'green',
    engine: 'v8',
    type: 'truck',
    year: 2008,
    mileage: 25467,
    isUsed: true,
  },
];

vehiclesAsObject = {
  stall1: {
    make: 'toyota',
    color: 'red',
    engine: 'v6',
    type: 'hatchback',
    year: 2018,
    mileage: 113312,
    isUsed: true,
  },
  stall2: {
    make: 'toyota',
    color: 'blue',
    engine: 'v6',
    type: 'hatchback',
    year: 2018,
    mileage: 324312,
    isUsed: true,
  },
  stall3: {
    make: 'toyota',
    color: 'yellow',
    engine: 'v6',
    type: 'hatchback',
    year: 2018,
    mileage: 113452,
    isUsed: false,
  },
  stall4: {
    make: 'ford',
    color: 'blue',
    engine: 'v4',
    type: 'car',
    year: 2012,
    mileage: 0,
    isUsed: true,
  },
  stall5: {
    make: 'ford',
    color: 'blue',
    engine: 'v4',
    type: 'car',
    year: 2012,
    mileage: 0,
    isUsed: true,
  },
  stall6: {
    make: 'ford',
    color: 'blue',
    engine: 'v4',
    type: 'car',
    year: 2012,
    mileage: 0,
    isUsed: true,
  },
  stall7: {
    make: 'mazda',
    color: 'grey',
    engine: 'v8',
    type: 'sedan',
    year: 2021,
    mileage: 0,
    isUsed: false,
  },
  stall8: {
    make: 'ford',
    color: 'green',
    engine: 'v8',
    type: 'truck',
    year: 2008,
    mileage: 25467,
    isUsed: true,
  },
};

// Not my solution

const myGroupBy = (collection, q) => {
  collection = Object.values(collection);
  switch (typeof q) {
    case 'string':
      return collection.reduce(
        (a, c) => ((a[c[q]] = [...(a[c[q]] || []), c]), a),
        {}
      );
    case 'function':
      return collection.reduce(
        (a, c) => ((a[q(c)] = [...(a[q(c)] || []), c]), a),
        {}
      );
    default:
      const [[k, v]] = Object.entries(q);
      return collection.reduce(
        (a, c) => ((a[c[k] === v] = [...(a[c[k] === v] || []), c]), a),
        {}
      );
  }
};
