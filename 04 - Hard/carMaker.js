// Not my solution - learning about currying
let carLot = {};

const carMaker = (make) => (num) => (carLot[make] = (carLot[make] || 0) + num);

// Tests

carLot = {};

const toyotaCars = carMaker('Toyota');
const fordCars = carMaker('Ford');

toyotaCars(5);
toyotaCars(3);
toyotaCars(13);
fordCars(3);
fordCars(8);
fordCars(9);

console.log(carLot, { Toyota: 21, Ford: 20 });
