// You have two arrays. One shows the names of the people names,
// while the other shows their occupation jobs.
// Your task is to create an object displaying each person to their
// respective occupation.

// Solution
const assignPersonToJob = (names, jobs) => {
  const assignments = {};

  for (let i = 0; i < names.length; i++) {
    assignments[names[i]] = jobs[i];
  }

  return assignments;
};

// Tests

names1 = ['Annie', 'Steven', 'Lisa', 'Osman'];
names2 = ['Victor', 'Paul', 'Eddie'];
names3 = ['Dennis', 'Vera', 'Mabel', 'Annette', 'Sussan'];
jobs1 = ['Teacher', 'Engineer', 'Doctor', 'Cashier'];
jobs2 = ['Vet', 'Nurse', 'Web Developer'];
jobs3 = ['Butcher', 'Programmer', 'Doctor', 'Teacher', 'Lecturer'];

console.log(assignPersonToJob(names2, jobs2), {
  Victor: 'Vet',
  Paul: 'Nurse',
  Eddie: 'Web Developer',
});
console.log(assignPersonToJob(names3, jobs3), {
  Dennis: 'Butcher',
  Vera: 'Programmer',
  Mabel: 'Doctor',
  Annette: 'Teacher',
  Sussan: 'Lecturer',
});
console.log(assignPersonToJob(names1, jobs1), {
  Annie: 'Teacher',
  Steven: 'Engineer',
  Lisa: 'Doctor',
  Osman: 'Cashier',
});
