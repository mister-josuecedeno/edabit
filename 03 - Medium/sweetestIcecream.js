const sweetestIcecream = (arr) => {
  const flavors = {
    Plain: 0,
    Vanilla: 5,
    ChocolateChip: 5,
    Strawberry: 10,
    Chocolate: 10,
  };

  let sweetness = arr.map((f) => flavors[f.flavor] + f.numSprinkles);
  return Math.max(...sweetness);
};

// Tests
class IceCream {
  constructor(flavor, numSprinkles) {
    this.flavor = flavor;
    this.numSprinkles = numSprinkles;
  }
}

ice1 = new IceCream('Chocolate', 13);
ice2 = new IceCream('Vanilla', 0);
ice3 = new IceCream('Strawberry', 7);
ice4 = new IceCream('Plain', 18);
ice5 = new IceCream('ChocolateChip', 3);
ice6 = new IceCream('Chocolate', 23);
ice7 = new IceCream('Strawberry', 0);
ice8 = new IceCream('Plain', 34);
ice9 = new IceCream('Plain', 81);
ice10 = new IceCream('Vanilla', 12);

console.log(sweetestIcecream([ice1, ice2, ice3, ice4, ice5]), 23);
console.log(
  sweetestIcecream([ice7, ice10, ice1, ice6, ice8, ice10, ice2, ice2]),
  34
);
console.log(sweetestIcecream([ice10, ice10, ice6, ice8, ice4]), 34);
console.log(sweetestIcecream([ice2, ice10, ice6, ice9, ice7]), 81);
console.log(sweetestIcecream([ice10, ice6, ice4, ice1, ice7, ice8, ice6]), 34);
console.log(sweetestIcecream([ice3, ice1]), 23);
console.log(sweetestIcecream([ice6, ice7, ice5, ice4, ice3]), 33);
console.log(sweetestIcecream([ice4, ice8, ice9]), 81);
console.log(sweetestIcecream([ice5, ice7]), 10);
