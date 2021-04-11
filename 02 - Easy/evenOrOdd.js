const evenOrOdd = (numbers) => {
  let sumEven = 0;
  let sumOdd = 0;

  for (let number of numbers) {
    if (+number % 2 === 0) {
      sumEven += +number;
    } else {
      sumOdd += +number;
    }
  }

  if (sumOdd > sumEven) {
    return "Odd is greater than Even";
  } else if (sumEven > sumOdd) {
    return "Even is greater than Odd";
  } else {
    return "Even and Odd are the same";
  };
}

// Tests
console.log(evenOrOdd('12345'), 'Odd is greater than Even')
console.log(evenOrOdd('143'), 'Even and Odd are the same')
console.log(evenOrOdd('2221'), 'Even is greater than Odd')
console.log(evenOrOdd('23456'), 'Even is greater than Odd')
console.log(evenOrOdd('4321'), 'Even is greater than Odd')
console.log(evenOrOdd('3245'), 'Odd is greater than Even')
console.log(evenOrOdd('14256'), 'Even is greater than Odd')
console.log(evenOrOdd('11234'), 'Even is greater than Odd')
console.log(evenOrOdd('1734'), 'Odd is greater than Even')
console.log(evenOrOdd('145'), 'Odd is greater than Even')
console.log(evenOrOdd('22471'), 'Even and Odd are the same')
console.log(evenOrOdd('213613'), 'Even and Odd are the same')
console.log(evenOrOdd('23456'), 'Even is greater than Odd')
console.log(evenOrOdd('9738'), 'Odd is greater than Even')
console.log(evenOrOdd('34522'), 'Even and Odd are the same')
console.log(evenOrOdd('12378'), 'Odd is greater than Even')
console.log(evenOrOdd('45228'), 'Even is greater than Odd')
console.log(evenOrOdd('4455'), 'Odd is greater than Even')
console.log(evenOrOdd('6721'), 'Even and Odd are the same')
console.log(evenOrOdd('92184'), 'Even is greater than Odd')
console.log(evenOrOdd('12'), 'Even is greater than Odd')
console.log(evenOrOdd('123'), 'Odd is greater than Even')
console.log(evenOrOdd('112'), 'Even and Odd are the same')
console.log(evenOrOdd('124'), 'Even is greater than Odd')