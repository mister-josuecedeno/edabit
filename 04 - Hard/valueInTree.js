const valueInTree = (tree, val) => {
  return tree.flat(Infinity).indexOf(val) !== -1;
};

// Tests

lst1 = [3, [7, [1, null, null], [8, null, null]], [5, null, [4, null, null]]];
lst2_8 = [2, null, null];
lst2_6 = [24, null, null];
lst2_7 = [18, null, null];
lst2_4 = [4, lst2_8, null];
lst2_3 = [12, null, lst2_4];
lst2_2 = [10, null, lst2_3];
lst2_1 = [15, lst2_2, null];
lst2_5 = [6, lst2_6, lst2_7];
lst2 = [9, lst2_1, lst2_5];
lst3_1 = [4, null, null];
lst3_2 = [9, null, null];
lst3_3 = [21, null, null];
lst3_4 = [17, null, null];
lst3_5 = [25, null, null];
lst3_6 = [18, lst3_5, null];
lst3_7 = [20, lst3_3, lst3_4];
lst3_8 = [91, lst3_2, null];
lst3_9 = [75, null, lst3_1];
lst3_10 = [45, null, null];
lst3_11 = [71, null, null];
lst3_12 = [34, null, null];
lst3_13 = [11, null, null];
lst3_14 = [10, lst3_6, lst3_13];
lst3_15 = [3, lst3_7, lst3_12];
lst3_16 = [26, lst3_8, lst3_11];
lst3_17 = [1, lst3_9, lst3_10];
lst3_18 = [66, lst3_14, lst3_17];
lst3_19 = [52, lst3_16, lst3_15];
lst3 = [97, lst3_18, lst3_19];

console.log(valueInTree(lst1, 7), true);
console.log(valueInTree(lst1, 4), true);
console.log(valueInTree(lst1, 15), false);
console.log(valueInTree(lst2, 18), true);
console.log(valueInTree(lst2, 51), false);
console.log(valueInTree(lst2, 23), false);
console.log(valueInTree(lst3, 52), true);
console.log(valueInTree(lst3, 120), false);
console.log(valueInTree(lst3, -2), false);
console.log(valueInTree(lst3, 91), true);
