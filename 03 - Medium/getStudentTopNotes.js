const getStudentTopNotes = (students) => {
  return students.map((s) => Math.max(...s.notes, 0));
};
