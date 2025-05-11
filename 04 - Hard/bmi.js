// https://edabit.com/challenge/rfjyk42gRWu2RBHhm

const BMI = (weight, height) => {
  let weightValue = +weight.split(" ")[0];
  let heightValue = +height.split(" ")[0];

  if (weight.includes("pounds")) {
    weightValue *= 0.453592; // Convert pounds to kilograms
  }
  if (height.includes("inches")) {
    heightValue *= 0.0254; // Convert inches to meters
  }

  let bmi = weightValue / (heightValue * heightValue);
  bmi = bmi.toFixed(1);

  // Determine BMI category
  let category = "";
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "Normal weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = "Overweight";
  } else {
    category = "Obesity";
  }

  return `${bmi} ${category}`;
}

// Tests

console.log(BMI("53.3 kilos", "1.7 meters"), "18.4 Underweight")
console.log(BMI("76.8 kilos", "1.6 meters"), "30.0 Obesity")
console.log(BMI("53.5 kilos", "1.7 meters"), "18.5 Normal weight")
console.log(BMI("155 pounds", "73 inches"), "20.4 Normal weight")
console.log(BMI("175 pounds", "70 inches"), "25.1 Overweight")