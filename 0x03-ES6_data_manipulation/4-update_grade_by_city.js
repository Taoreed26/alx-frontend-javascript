export default function updateStudentGradeByCity(array, city, grad) {
  return array
  // this .filter filters the way it's been localized
    .filter((item) => item.location === city)
    .map((student) => {
    // this .filter filters student id and it maps by grade
      const gradeItems = grad
        .filter((item) => item.studentId === student.id)
        .map((n) => n.grade)[0];
      const grade = gradeItems || 'N/A';
      return { ...student, grade };
    });
}
