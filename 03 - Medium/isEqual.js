const isEqual = (obj1, obj2) => {
  return JSON.stringify(obj1) == JSON.stringify(obj2);
}

// Tests

const objOne = {
  foo: {
    bar: {
      baz: true
    },
    baz: {
      arr: [1, 2, 3]
    }
  }
}

const objTwo = {
  foo: {
    bar: {
      baz: true
    },
    baz: {
      arr: [3, 2, 1]
    }
  }
}

console.log(isEqual(objOne, objTwo), false);
