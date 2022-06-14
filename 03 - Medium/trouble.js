const trouble = (num1, num2) => {
  const repeat1 = (`${num1}`.match(/([0-9])\1{2}/gi) || []).map((n) =>
    n.slice(0, 2)
  );
  const repeat2 = `${num2}`.match(/([0-9])\1{1}/gi) || [];

  if (repeat1.length === 0 || repeat2.length === 0) return false;

  return (repeat1.filter((n) => repeat2.includes(n)) || []).length > 0;
};

// Tests

console.log(trouble(451999277, 41177722899), true);
console.log(trouble(444, 44), true);
console.log(trouble(1222345, 12345), false);
console.log(trouble(12345, 12345), false);
console.log(trouble(888, 888), true);
console.log(trouble(666789, 12345667), true);
console.log(trouble(10560002, 100), true);
console.log(trouble(1, 1), false);
console.log(trouble(9111922229333339, 9559669779), false);
