// https://edabit.com/challenge/aZiwEFEdFvWoBvDWS

const getStudentsWithNamesAndAvgNote = (students) => {
  const result = [];

  for (const student of students) {
    let sum = student.notes.reduce((acc, cv) => acc + cv, 0);
    let avg = student.notes.length === 0 ? 0 : sum / student.notes.length;
    result.push({
      name: student.name,
      avgNote: avg,
    });
  }

  return result;
};

// Tests
const arg = [{ name: 'John', notes: [3, 5, 4] }];

console.log(getStudentsWithNamesAndAvgNote(arg), [
  { name: 'John', avgNote: 4 },
]);

const arg2 = [
  { name: 'Jacek', notes: [] },
  { name: 'Ewa', notes: [] },
  { name: 'Zygmunt', notes: [1, 2, 3] },
];

console.log(getStudentsWithNamesAndAvgNote(arg2), [
  { name: 'Jacek', avgNote: 0 },
  { name: 'Ewa', avgNote: 0 },
  { name: 'Zygmunt', avgNote: 2 },
]);
