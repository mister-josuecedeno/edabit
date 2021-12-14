const mineralFormation = (params) => {
  let last = params.length - 1;
  let isTites = params[0].some(n => n == 1);
  let isMites = params[last].some(n => n == 1);

  if(isTites && isMites) {
    return "both";
  } else if(isTites){
    return "stalactites";
  } else {
    return "stalagmites";
  }
}

// Tests

console.log(mineralFormation([
  [0, 1, 0, 1],
  [0, 1, 0, 1],
  [0, 0, 0, 1],
  [0, 0, 0, 0]
  ]), 'stalactites')
  
  console.log(mineralFormation([
  [0, 0, 0, 0],
  [0, 1, 0, 1],
  [0, 1, 1, 1],
  [0, 1, 1, 1]
  ]), 'stalagmites')
  
  console.log(mineralFormation([
  [1, 0, 1, 0],
  [1, 1, 0, 1],
  [0, 1, 1, 1],
  [0, 1, 1, 1]
  ]), 'both')
  
  console.log(mineralFormation([
  [1],
  [1],
  [0],
  [0]
  ]), 'stalactites')
  
  console.log(mineralFormation([
  [1],
  [1],
  [0],
  [1]
  ]), 'both')
  
  console.log(mineralFormation([
  [0],
  [1],
  [1],
  [1]
  ]), 'stalagmites')
  
  console.log(mineralFormation([
  [0, 1],
  [1, 1],
  [1, 1],
  [1, 0]
  ]), 'both')
  
  console.log(mineralFormation([
  [0, 0],
  [1, 1],
  ]), 'stalagmites')
  
  console.log(mineralFormation([
  [1, 1],
  [0, 0],
  ]), 'stalactites')
