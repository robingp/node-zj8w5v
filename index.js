function sortMarksAscending(m1, m2) {
  return m1.marks - m2.marks;
}
let students = [];

(students[0] = {
  name: 'guru',
  total: 200,
  subject: 'biology',
  marks: 87,

  Date: '24 - 02 - 1999',
}),
  (students[1] = {
    name: 'kiran',
    total: 500,
    subject: 'chemistry',
    marks: 84,
    Date: '25 - 03 - 2000',
  }),
  console.log(students.sort(sortMarksAscending));
